import * as React from 'react';
import BaseComponentProps from './BaseComponentProps';
import '../../facepack.css'

export interface PeakProps extends BaseComponentProps {
    imgUrl: string
    imgCaption: string
}

export default class Peak extends React.Component<PeakProps> {

    render() {
        const caption = this.props.imgCaption
        return (<figure className={"fp-border-shadow " + (this.props.className ? this.props.className : '')}><img src={this.props.imgUrl}
            style={{ ...this.props.style, height: "200px" }}
        />
        <hr style={{marginTop:"0",marginBottom:"0"}}/>
            <figcaption style={{ textAlign: "center",marginBottom:"3px" }}>{caption}</figcaption>
        </figure>);
    }
}