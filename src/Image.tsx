import BaseComponentProps from './BaseComponentProps';
import React from 'react';
export interface ImageProps extends BaseComponentProps {

    src: string
    onHover: Function
    onClick: (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => void
}

export interface ImageState {
    nowSrc:string
    imgUrl?: string
}
/**
 * 显示图片
 *
 * @author KotoriK
 * @class Image
 * @extends {Component<ImageProps, ImageState>}
 */
class Image extends React.Component<ImageProps, ImageState> {
    state: ImageState = {

    }
    render() {
        return (<img src={this.props.src}
            onClick={this.props.onClick} ></img>);
    }
    componentDidMount() {
        let nowSrc=this.props.src
        fetch({ url: nowSrc, method: "GET" }).then(async (response) => {
            if (response.ok) {
                this.setState({nowSrc, imgUrl: URL.createObjectURL(await response.blob()) })
            }
        })
    }
    componentWillUnmount(){
        this.state.imgUrl && URL.revokeObjectURL( this.state.imgUrl)
    }
}

export default Image;