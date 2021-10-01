import { forwardRef } from 'react';
import BaseComponentProps from './BaseComponentProps';
import clsx from 'clsx'
import * as generic from '../style';
import { css } from '@emotion/css';
export interface PeakProps extends BaseComponentProps {
    imgUrl: string
    imgCaption: string
    show: boolean
}

const styleFigCaption = css({
    textAlign: "center", backgroundColor: 'rgba(255,255,255,0.65)'
})
const styleHr = css({
    marginTop: 0, marginBottom: 0
})
const Peak = forwardRef<HTMLDivElement, PeakProps>((props, ref) => {
    return (<figure style={{ display: props.show ? 'block' : 'none', ...props.style }}
        className={clsx(generic.borderShadow, props.className, generic.bgWhiteBlur)} ref={ref}>
        <img src={props.imgUrl} height={200} />
        <hr className={styleHr} />
        <figcaption className={clsx(styleFigCaption, generic.bgWhiteBlur)}>{props.imgCaption}</figcaption>
    </figure>);
})
export default Peak