import BaseComponentProps from './BaseComponentProps';
import React, { useState } from 'react';
import { IndicatorProps, Indicator, IndicateLevel } from './Indicator';
export interface FaceViewProps extends BaseComponentProps {
    face_pos: number
    src: string
    alt?: string
    onClick?: (e: React.MouseEvent<HTMLImageElement, MouseEvent>, pos?: number) => void
    refererPolicy?: ReferrerPolicy,
}
/**
 * 处理表情显示
 *
 * @author KotoriK
 * @param {FaceViewProps} props
 * @returns
 */
export default function fv(props:FaceViewProps){
    const [loaded,setLoaded]= useState(false)
    const [showIndicator,setShowIndicator]=useState({level: IndicateLevel.PRELOAD} as IndicatorProps)
    return (
        <>
            {showIndicator && <Indicator {...showIndicator} style={{ ...props.style, transition: "opacity 2s ease" }} className={props.className} />}
            <img src={props.src}
                onClick={(e) => props.onClick(e, props.face_pos)}
                onPointerEnter={() => props.global.showPeak(props.src,props.alt)}
                onPointerOut={() => props.global.hidePeak()} alt={props.alt} style={{ ...props.style }} className={props.className}
                onLoad={() => {
                    setShowIndicator(null)
                    setLoaded(true)
                }}
                hidden={!loaded}
                onError={() => {
                    setLoaded(false)
                    setShowIndicator({ level: IndicateLevel.ERROR })
                }} /></>
    )
}