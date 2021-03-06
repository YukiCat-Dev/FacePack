import React from 'react';
import BaseComponentProps from './BaseComponentProps';
export interface TabProps extends BaseComponentProps {
    pos: number
    name: string
    selected: boolean
}
/**
 *选项卡的单个标签
 *
 * @author KotoriK
 * @export
 * @param {TabProps} props
 * @returns
 */
export default function Tab(props: TabProps) {
    return (
        <option selected={props.selected} style={{ ...props.style }} className={props.className}
            value={props.pos}>
            {props.name}
        </option>
    )
}