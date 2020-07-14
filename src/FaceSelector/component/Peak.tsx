import * as React from 'react';
import BaseComponentProps from './BaseComponentProps';
import '../../facepack.css'

export interface PeakProps extends BaseComponentProps {
    imgUrl: string
    imgCaption: string
}

const Peak = React.memo((props: PeakProps) => {
    return (<figure className={"fp-border-shadow " + (props.className ? props.className : '')}><img src={props.imgUrl}
        style={{ ...props.style, height: "200px" }}
    />
        <hr style={{ marginTop: "0", marginBottom: "0" }} />
        <figcaption style={{ textAlign: "center", marginBottom: "3px", backgroundColor: '#FFFFFF' }}>{props.imgCaption}</figcaption>
    </figure>);
})
export default Peak