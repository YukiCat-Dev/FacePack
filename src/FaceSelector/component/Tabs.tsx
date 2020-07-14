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
 */
const Tabs=React.memo((props:TabsProps)=>{
    return (<div>
        {props.facePackages.map((value,index) => {
            return (<Tab key={value.id} pos={index} name={value.name} selected={index===props.selectedPos} onClick={(id: number)=>props.onSelected(id)}/>)
        })}
    </div>)
})
export default Tabs