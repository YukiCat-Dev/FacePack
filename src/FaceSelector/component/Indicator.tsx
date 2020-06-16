import React from 'react';
import BaseComponentProps from './BaseComponentProps';
import SVG_PRELOAD from "../../../static/Ripple-1.3s-237px.svg"
import SVG_WARNING from "../../../static/warning.svg"
import SVG_INFO from "../../../static/info.svg"
import SVG_ERROR from "../../../static/error.svg"
export enum IndicateLevel {
    PRELOAD = SVG_PRELOAD, INFO = SVG_INFO, WARNING = SVG_WARNING, ERROR = SVG_ERROR
}
export interface IndicatorProps extends BaseComponentProps {
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

            <img src={IndicateLevel[this.props.level]} alt={descr} style={this.props.style} />

        )
    }
}


