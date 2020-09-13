import React, { forwardRef, memo } from 'react';
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
    root: {
        width: "100%", border: 0, fontWeight: 'bold'
    }
})
/**
 * 选项卡的一行标签（一行Tab
 *
 * @author KotoriK
 */
const Tabs = memo(
    forwardRef<HTMLSelectElement, TabsProps>(
        function Tabs(props, ref) {
            return (
                <select ref={ref} className={clsx(useStyles().root, useGenericStyle().bgWhiteBlur)} onChange={(e) => props.onSelected(e.target.value as any)}>
                    {props.facePackages.map((value, index) => {
                        return (<Tab key={value.id} pos={index} name={value.name}
                            selected={index === props.selectedPos} />)
                    })}
                </select>
            )
        })
)
export default Tabs