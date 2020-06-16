import React from 'react';
export interface TabProps {
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
            <div onClick={()=>{this.props.onClick(this.props.pos)}}>{/*TODO:selected为true的时候为选中状态*/this.props.name}</div>
        );
    }
}
 
export default Tab;