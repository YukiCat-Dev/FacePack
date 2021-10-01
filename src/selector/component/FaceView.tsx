import BaseComponentProps from './BaseComponentProps';
import { useState, useContext, useCallback, MouseEvent } from 'react';
import Indicator, { IndicatorProps, IndicateLevel } from './Indicator';
import { Global } from './FaceSelector'
export interface FaceViewProps extends BaseComponentProps {
    face_pos: number
    src: string
    alt?: string
    onClick?: (e: MouseEvent<HTMLImageElement>, pos?: number) => void
    refererPolicy?: ReferrerPolicy,
}
/**
 * 处理表情显示
 *
 * @author KotoriK
 * @param {FaceViewProps} props
 * @returns
 */
export default function FaceView(props: FaceViewProps) {
    const [loaded, setLoaded] = useState(false)
    const [showIndicator, setShowIndicator] = useState({ level: IndicateLevel.PRELOAD } as IndicatorProps)
    const global = useContext(Global)
    const handleError = useCallback(() => {
        setLoaded(false)
        setShowIndicator({ level: IndicateLevel.ERROR })
    }, [])
    const handleLoad = useCallback(() => {
        setShowIndicator(null)
        setLoaded(true)
    }, [])
    return (
        <>
            {showIndicator && <Indicator {...showIndicator} style={{ ...props.style, transition: "opacity 2s ease" }} className={props.className} />}
            <img src={props.src}
                onClick={(e) => props.onClick(e, props.face_pos)}
                onPointerEnter={() => global.showPeak(props.src, props.alt)}
                onPointerOut={() => global.hidePeak()} alt={props.alt} style={{ ...props.style }} className={props.className}
                onLoad={handleLoad}
                hidden={!loaded}
                onError={handleError} />
        </>
    )
}