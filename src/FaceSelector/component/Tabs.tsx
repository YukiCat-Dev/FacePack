import React from 'react';
import Tab from './Tab';
import { FacePackage } from '../../FacePackage';
import { createUseStyles } from 'react-jss';
export interface TabsProps {
    facePackages: Array<FacePackage>,
    onSelected: (newPos: number) => void,
    selectedPos: number
}
const useStyles = createUseStyles({
    root:{
        overflowX:'auto',
        overflowY:'hidden',
        '&>ul': {
        display: "block",
        listStyle: 'none',
        marginBlockStart: '5px',
        marginBlockEnd: '5px',
        paddingInlineStart: '5px',
        width:'max-content',
        '& li': {
            display: 'inline', marginRight: 1.5
            ,
            '&:after': {
                content: '"|"',
                marginLeft: 1.5,
                color:"#888"
            }
        }
    }
    }
    
})
/**
 * 选项卡的一行标签（一行Tab
 *
 * @author KotoriK
 */
const Tabs = React.memo((props: TabsProps) => {
    return (
        <div className={useStyles().root}> 
        <ul>
            {props.facePackages.map((value, index) => {
                return (<Tab key={value.id} pos={index} name={value.name} selected={index === props.selectedPos} onClick={(id: number) => props.onSelected(id)} />)
            })}
        </ul>
        </div>
    )
})
export default Tabs