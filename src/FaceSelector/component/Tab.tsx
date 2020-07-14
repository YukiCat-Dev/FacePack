import React from 'react';
import BaseComponentProps from './BaseComponentProps';
export interface TabProps extends BaseComponentProps{
    pos:number
    name:string
    selected:boolean
    onClick:(id:number)=>void
}

/**
 *选项卡的单个标签
 *
 * @author KotoriK
 * @export
 * @param {TabProps} props
 * @returns
 */
export default function Tab(props:TabProps){
    return (          
        <div style={{borderRight:"1pt solid",backgroundColor:props.selected?'#1559ed':undefined,color:props.selected?'white':undefined,...props.style,}} 
        className={props.className} 
        onClick={()=>{props.onClick(props.pos)}}>{props.name}</div>
    )
}