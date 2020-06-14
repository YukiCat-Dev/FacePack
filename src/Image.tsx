import { Component } from 'react';
export interface ImageProps {

    src:string
    onHover:Function
    onSelected:(e:React.MouseEvent<HTMLImageElement, MouseEvent>)=>void
}
 
export interface ImageState {
    
}
/**
 * 显示图片
 *
 * @author KotoriK
 * @class Image
 * @extends {Component<ImageProps, ImageState>}
 */
class Image extends Component<ImageProps, ImageState> {
    state = {   }
    render() { 
        return (<img src={this.props.src} 
            onClick={this.props.onSelected} ></img>);
    }
}
 
export default Image;