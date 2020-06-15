import BaseComponentProps from './BaseComponentProps';
import React from 'react';
import { IndicatorProps, Indicator, IndicateLevel } from './Indicator';
export interface ImageProps extends BaseComponentProps {
    id?: string
    src: string
    alt?: string
    onClick?: (e: React.MouseEvent<HTMLImageElement, MouseEvent>, id?: string) => void
    refererPolicy?: ReferrerPolicy,
    imgInlineStyle?: React.CSSProperties,
    imgCSSClass?: string,


}
export interface ImageState {
    src: { url?: string, data?: string }
    showIndicator?: IndicatorProps
    hovering: boolean
}
/**
 * 显示图片
 *
 * @author KotoriK
 * @class Image
 * @extends {React.Component<ImageProps, ImageState>}
 */
export default class Image extends React.Component<ImageProps, ImageState> {
    constructor(props: ImageProps) {
        super(props)
        this.state = {
            src: { url: props.src },
            showIndicator: { level: IndicateLevel.PRELOAD },
            hovering: false
        }
    }

    /**
     * 懒加载图片
     * @author KotoriK
     * @memberof Image
     */
    loadImg() {
        let nowSrc = this.state.src.url
        fetch(nowSrc, { method: "GET", referrerPolicy: this.props.refererPolicy || "no-referrer" })
            .then(async (response) => {
                if (response.ok) {
                    this.setState({ src: { url: nowSrc, data: URL.createObjectURL(await response.blob()) }, showIndicator: undefined })
                } else {
                    switch (response.status) {
                        case 404:
                            this.setState({ showIndicator: { level: IndicateLevel.ERROR, description: "表情包不见了！" } })
                            break
                        case 500://服务器不可用
                            this.setState({ showIndicator: { level: IndicateLevel.ERROR, description: "服务器暂时不可用，请稍后再试。" } })
                            break
                        default:
                            this.setState({ showIndicator: { level: IndicateLevel.ERROR, description: `HTTP ${response.status}:${response.statusText}` } })
                    }
                }
            }, (reason) => {
                this.setState({ showIndicator: { level: IndicateLevel.ERROR, description: reason } })
            })

    }
    componentDidMount() {
        this.loadImg()
    }
    componentDidUpdate() {
        if (this.props.src !== this.state.src.url) {
            this.revokeData()
            this.setState({
                src: { url: this.props.src, data: undefined },
                showIndicator: { level: IndicateLevel.PRELOAD },
            }, () => {
                this.loadImg()
            })
        }
    }
    revokeData() {
        //释放资源
        if (this.state.src.data) URL.revokeObjectURL(this.state.src.data)
    }
    componentWillUnmount() {
        this.revokeData()
    }
    prerender() {
        if (this.state.src.data) {
            return (
                <img src={this.state.src.data}
                    onClick={(e) => this.props.onClick(e, this.props.id)}
                    onPointerEnter={() => this.setState({ hovering: true })}
                    onPointerOut={() => this.setState({ hovering: false })} alt={this.props.alt} style={{ ...this.props.imgInlineStyle }} className={this.props.imgCSSClass}></img>
            );
        }
        if (this.state.showIndicator) {
            return (<Indicator {...this.state.showIndicator} inlineStyle={this.props.imgInlineStyle} />)
        }
    }
    render() {
        return (<div className={this.props.cssClass} style={this.props.inlineStyle}>{this.prerender()}</div>)
    }
}