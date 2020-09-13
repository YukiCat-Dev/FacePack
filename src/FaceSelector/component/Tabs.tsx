import React from 'react';
import Tab from './Tab';
import { FacePackage } from '../../FacePackage';
import { createUseStyles } from 'react-jss';
import clsx from 'clsx';
import useGenericStyle from '../style';
export interface TabsProps {
    facePackages: Array<FacePackage>,
    onSelected: (newPos: number) => void,
    selectedPos: number
}
const useStyles = createUseStyles({
    root:{
       width:"100%",border:0
    } 
})
/**
 * 选项卡的一行标签（一行Tab
 *
 * @author KotoriK
 */
const Tabs = React.memo((props: TabsProps) => {
    return (
        <select className={clsx(useStyles().root,useGenericStyle().bgWhiteBlur)} onChange={(e)=>props.onSelected(e.target.value as any)}>
            {props.facePackages.map((value, index) => {
                return (<Tab key={value.id} pos={index} name={value.name} selected={index === props.selectedPos} 
                     />)
            })}
        </select>
    )
})
export default Tabs