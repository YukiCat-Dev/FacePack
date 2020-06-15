import * as React from 'react';
import BaseComponentProps from './BaseComponentProps';
export interface PeakProps extends BaseComponentProps {
    imgUrl:string
}

class Peak extends React.Component<PeakProps> {
    
    render() { 
        return (<img src={this.props.imgUrl} 
            style={{...this.props.style,borderWidth:"10px",borderColor:"#000000",borderStyle:"solid",aspectRatio:"1",height:"200px"}} 
            className={this.props.className} ></img>);
    }
}
 
export default Peak;