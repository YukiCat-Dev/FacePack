import React from 'react';
export interface TabProps {
    name:string
    selected:boolean
    onClick:(e:React.MouseEvent<HTMLButtonElement,MouseEvent>)=>void
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
            
            <button onClick={this.props.onClick}>{/*TODO:selected为true的时候为选中状态*/this.props.name}</button>
        );
    }
}
 
export default Tab;