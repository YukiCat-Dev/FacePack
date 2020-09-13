import React, { forwardRef, MutableRefObject } from 'react';
import BaseComponentProps from './BaseComponentProps';
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'
import useGenericStyle from '../style';
export interface PeakProps extends BaseComponentProps {
    imgUrl: string
    imgCaption: string
    show: boolean
}

const useStyles = createUseStyles({
    figCaption: {
        textAlign: "center",  backgroundColor: 'rgba(255,255,255,0.65)'
    },
    hr: {
        marginTop: 0, marginBottom: 0
    }
})
const Peak = React.memo(forwardRef<HTMLDivElement, PeakProps>((props, ref) => {
    const classes = useStyles(), generic = useGenericStyle()
    return (<figure style={{ display: props.show ? 'block' : 'none', ...props.style }}
        className={clsx(generic.borderShadow, props.className, generic.bgWhiteBlur)} ref={ref}>
        <img src={props.imgUrl} height={200} />
        <hr className={classes.hr} />
        <figcaption className={clsx(classes.figCaption,generic.bgWhiteBlur)}>{props.imgCaption}</figcaption>
    </figure>);
}))
export default Peak