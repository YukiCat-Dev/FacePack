import BaseComponentProps from './BaseComponentProps';
import React from 'react';
import { IndicatorProps, Indicator, IndicateLevel } from './Indicator';
export interface FaceViewProps extends BaseComponentProps {
    face_pos: number
    src: string
    alt?: string
    onClick?: (e: React.MouseEvent<HTMLImageElement, MouseEvent>, pos?: number) => void
    refererPolicy?: ReferrerPolicy,
}
export interface FaceViewState {
    loaded: boolean
    showIndicator?: IndicatorProps
}
/**
 * 显示图片
 *
 * @author KotoriK
 * @class FaceView
 * @extends {React.Component<FaceViewProps, FaceViewState>}
 */
export default class FaceView extends React.Component<FaceViewProps, FaceViewState> {
    constructor(props: FaceViewProps) {
        super(props)
        this.state = {
            showIndicator: { level: IndicateLevel.PRELOAD },
            loaded: false
        }
    }
    render() {
        return (
            <div>
                {this.state.showIndicator && <Indicator {...this.state.showIndicator} style={{ ...this.props.style, transition: "opacity 2s ease" }} className={this.props.className} />}
                <img src={this.props.src}
                    onClick={(e) => this.props.onClick(e, this.props.face_pos)}
                    onPointerEnter={() => this.props.global.showPeak(this.props.src,this.props.alt)}
                    onPointerOut={() => this.props.global.hidePeak()} alt={this.props.alt} style={{ ...this.props.style }} className={this.props.className}
                    onLoad={() => {
                        this.setState({ loaded: true, showIndicator: null })
                    }}
                    hidden={!this.state.loaded}
                    onError={() => {
                        this.setState({ showIndicator: { level: IndicateLevel.ERROR }, loaded: false })
                    }} /></div>
        )
    }
}