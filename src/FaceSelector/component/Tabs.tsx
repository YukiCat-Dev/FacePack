
import React from 'react';
import Tab from './Tab';
import { FacePackage } from '../../FacePackage';
export interface TabsProps {
    facePackages: Array<FacePackage>,
    onSelected:(newPos:number)=>void,
    selectedPos:number
}

/**
 * 选项卡的一行标签（一行Tab
 *
 * @author KotoriK
 * @class Tab
 * @extends {React.Component<TabProps, TabState>}
 */
class Tabs extends React.Component<TabsProps> {
    handleTabClick(pos:number){
        this.props.onSelected(pos)
    }
    render() {
        return (<div>
            {this.props.facePackages.map((value,index) => {
                return (<Tab key={value.id} pos={index} name={value.name} selected={index===this.props.selectedPos} onClick={(id)=>this.handleTabClick(id)}></Tab>)
            })}
        </div>);
    }
}

export default Tabs;