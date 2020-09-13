import React from 'react';
import BaseComponentProps from './BaseComponentProps';
import { createUseStyles } from 'react-jss';
import clsx from 'clsx';
export interface TabProps extends BaseComponentProps {
    pos: number
    name: string
    selected: boolean
    onClick: (id: number) => void
}
const useStyles = createUseStyles({
    selected: {}, item: {
        marginRight: 1.5,
        cursor:'pointer'
        , '&$selected': {
            borderBottom: '8px #1559ed solid',
            borderTop: '8px #1559ed solid'
        },
    },
})
/**
 *选项卡的单个标签
 *
 * @author KotoriK
 * @export
 * @param {TabProps} props
 * @returns
 */
export default function Tab(props: TabProps) {
    const classes = useStyles()
    return (
        <li style={{ ...props.style }} className={ props.className}
            onClick={() => { props.onClick(props.pos) }}><span className={clsx(classes.item, props.selected && classes.selected)}>{props.name}</span></li>
    )
}