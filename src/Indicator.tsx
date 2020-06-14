import React from 'react';
import BaseComponentProps from './BaseComponentProps';
export enum IndicateLevel {
    PRELOAD,INFO, WARNING, ERROR
}
import PRELOAD from "../static/Ripple-1.3s-237px.svg"
/**
 * 按照IndicateLevel的顺序排列
 */
const IndicatorPicsArray:Array<any>=[
    PRELOAD,"",'',''
]
export interface IndicatorProps extends BaseComponentProps{
    level: IndicateLevel
    description?: string
}
/**
 * 一个指示错误的组件
 *
 * @author KotoriK
 * @export
 * @class Indicator
 * @extends {Component<IndicatorProps>}
 */
export class Indicator extends React.Component<IndicatorProps> {
    render() {
        let descr = this.props.description
        return (
            <div>
                <img src={IndicatorPicsArray[this.props.level]}></img>
                {descr && (<p>{descr}</p>)}
            </div>
        )
    }
}


