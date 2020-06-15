import * as React from 'react';
import TableView from './TableView';
import { FacePackage, Face } from './base/FacePackage';
import Tabs from './Tabs';
export interface FaceSelectorProps {
    /**
     *  指示选项卡标签条停靠的位置
     */
    tabsDockOn?: "bottom" | "top",
     /**
     *  加载的表情包集
     */
    facePacks: Array<FacePackage>,
     /**
     *  每行表情数
     */
    colCount: number,
     /**
     *  实现隐藏FaceSelector的方法
     */
    handleHide:Function
     /**
     *  当用户选中一个表情时触发
     */
    onFaceSelected:(face:Face)=>void
}
export interface FaceSelectorState {
    /**
     * 使用数字，方便在数组中快速检索
     *
     * @type {number}
     * @memberof FaceSelectorState
     */
    nowPackagePos: number
}
/**
 * 表情包选择器的完整主体
 *
 * @author KotoriK
 * @export
 * @class FaceSelector
 * @extends {React.Component}
 */
export class FaceSelector extends React.Component<FaceSelectorProps, FaceSelectorState>{
    state = {
        nowPackagePos: 0
    }
    handleTabSelectionChange(newPos: number) {
        this.setState({ nowPackagePos: newPos })
    }
    handleFaceSelected(face_pos:number){
        this.props.onFaceSelected(this.props.facePacks[this.state.nowPackagePos].faces[face_pos])
        this.props.handleHide()
    }
    render() {
        let nowPackagePos = this.state.nowPackagePos,
        maxPos = this.props.facePacks.length - 1
        if (nowPackagePos > maxPos) nowPackagePos = maxPos //防止prop发生改动带来越界
        return (<div style={{border:"1pt solid"}}>
            <Tabs facePackages={this.props.facePacks} onSelected={(pos) => this.handleTabSelectionChange(pos)} selectedPos={this.state.nowPackagePos} />
            <TableView facePackage={this.props.facePacks[nowPackagePos]} colCount={this.props.colCount} onImageSelected={this.handleFaceSelected.bind(this)}/>
        </div>)
    }
}
