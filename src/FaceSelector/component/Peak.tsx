import * as React from 'react';
import BaseComponentProps from './BaseComponentProps';
import '../../facepack.css'

export interface PeakProps extends BaseComponentProps {
    imgUrl:string
}

export default class Peak extends React.Component<PeakProps> {
    
    render() { 
        return (<img src={this.props.imgUrl} 
            style={{...this.props.style,height:"200px"}} 
            className={"fp-border-shadow " + (this.props.className?this.props.className:'')} />);
    }
}