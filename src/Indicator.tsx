import React from 'react';
import BaseComponentProps from './BaseComponentProps';
export enum IndicateLevel {
    PRELOAD,INFO, WARNING, ERROR
}
import PRELOAD from "../static/Ripple-1.3s-237px.svg"
import WARNING from "../static/warning.svg"
import INFO from "../static/info.svg"
import ERROR from "../static/error.svg"
/**
 * 按照IndicateLevel的顺序排列
 */
const IndicatorPicsArray:Array<any>=[
    PRELOAD,INFO,WARNING,ERROR
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

                <img src={IndicatorPicsArray[this.props.level] } alt={descr} style={this.props.inlineStyle}/>

        )
    }
}


