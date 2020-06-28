import React from 'react';
import BaseComponentProps from './BaseComponentProps';
export interface TabProps extends BaseComponentProps{
    pos:number
    name:string
    selected:boolean
    onClick:(id:number)=>void
}

/**
 * 选项卡的单个标签
 *
 * @author KotoriK
 * @class Tab
 * @extends {Component<TabProps, TabState>}
 */
class Tab extends React.Component<TabProps> {
    render() { 
        return (          
            <div style={{borderRight:"1pt solid",backgroundColor:this.props.selected?'#1559ed':undefined,color:this.props.selected?'white':undefined,...this.props.style,}} className={this.props.className} onClick={()=>{this.props.onClick(this.props.pos)}}>{/*TODO:selected为true的时候为选中状态*/this.props.name}</div>
        );
    }
}
 
export default Tab;