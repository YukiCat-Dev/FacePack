
import React from 'react';
import Tab from './Tab';
import { FacePackage } from './base/FacePackage';
export interface TabsProps {
    facePackages: Array<FacePackage>
}

export interface TabsState {
    selectedId:string
}
/**
 * 选项卡的一行标签（一行Tab
 *
 * @author KotoriK
 * @class Tab
 * @extends {React.Component<TabProps, TabState>}
 */
class Tabs extends React.Component<TabsProps, TabsState> {
    state = {selectedId:this.props.facePackages[0].id}
    handleTabClick(id:string){

    }
    render() {
        return (<div>
            {this.props.facePackages.map((value) => {
                return (<Tab key={value.id} id={value.id} name={value.name} selected={value.id===this.state.selectedId} onClick={(id)=>this.handleTabClick(id)}></Tab>)
            })}
        </div>);
    }
}

export default Tabs;