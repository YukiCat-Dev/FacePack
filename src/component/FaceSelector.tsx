import * as React from 'react';
import TableView from './TableView';
import { FacePackage, Face } from '../FacePackage';
import Tabs from './Tabs';
import ReactDOM from 'react-dom';
import Peak from './Peak';
import Popper, { createPopper } from '@popperjs/core'
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
    handleHide: Function
    /**
    *  当用户选中一个表情时触发
    */
    onFaceSelected: (face: Face) => void
    /**
     * 指向正挂载在的HTML元素
     */
    refRoot: HTMLElement
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
    global: FaceSelectorGlobal = {
        showPeak: (imgUrl) => {
            this.renderPeak(imgUrl)
            this.showPeak()
        },
        hidePeak:this.hidePeak.bind(this)
    }
    peakContainer: HTMLDivElement
    peakPopper: Popper.Instance
    handleTabSelectionChange(newPos: number) {
        this.setState({ nowPackagePos: newPos })
    }
    handleFaceSelected(face_pos: number) {
        this.props.onFaceSelected(this.props.facePacks[this.state.nowPackagePos].faces[face_pos])
        this.props.handleHide()
    }
    createPeakContainer() {
        this.peakContainer = document.createElement('div')
        this.peakContainer.setAttribute('id', 'peak-container')
        this.hidePeak()
        this.props.refRoot.append(this.peakContainer)
        this.peakPopper = createPopper(this.props.refRoot, this.peakContainer,{placement:"left-start",modifiers: [
            {
              name: 'offset',
              options: {
                offset: [10, 20],
              },
            },
          ],})
    }
    removePeakContainer() {
        ReactDOM.unmountComponentAtNode(this.peakContainer)
        this.peakPopper.destroy()
        this.peakPopper = undefined
        document.removeChild(this.peakContainer)
        this.peakContainer = undefined
    }
    renderPeak(imgUrl: string) {
        ReactDOM.render(<Peak imgUrl={imgUrl} />, this.peakContainer)
    }
    hidePeak() {
        this.peakContainer.setAttribute("hidden", "hidden")
    }
    showPeak() {
        try {
            this.peakContainer.removeAttribute("hidden")
        } catch (e) {
            console.warn(e)
        }
    }
    componentDidMount(){
        this.createPeakContainer()
    }
    componentWillUnmount(){
        this.removePeakContainer()
    }
    render() {
        let nowPackagePos = this.state.nowPackagePos,
            maxPos = this.props.facePacks.length - 1
        if (nowPackagePos > maxPos) nowPackagePos = maxPos //防止prop发生改动带来越界
        return (<div style={{ border: "solid" }}>
            <Tabs facePackages={this.props.facePacks} onSelected={(pos) => this.handleTabSelectionChange(pos)} selectedPos={this.state.nowPackagePos} />
            <TableView facePackage={this.props.facePacks[nowPackagePos]} colCount={this.props.colCount} onImageSelected={this.handleFaceSelected.bind(this)} global={this.global} />
        </div>)
    }
}
export interface FaceSelectorGlobal {
    showPeak: (imgUrl: string) => void
    hidePeak: Function
}
