import * as React from 'react';
import TableView from './TableView';
import { FacePackage, Face } from '../../FacePackage';
import Tabs from './Tabs';
import Peak from './Peak';
import Popper, { createPopper, OptionsGeneric, Modifier } from '@popperjs/core'
import BaseComponentProps from './BaseComponentProps';
import '../../facepack.css'
import ReactDOM from 'react-dom';
export type TModifier = Partial<Modifier<any, any>>
export interface FaceSelectorProps extends BaseComponentProps {
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
    onFaceSelected: (parentPack: FacePackage, face: Face) => void
    /**
     * 指向正挂载在的HTML元素
     */
    refRoot: HTMLElement
    peakPopperOptions?: Partial<OptionsGeneric<TModifier>>
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
const Global: React.Context<FaceSelectorGlobal> = React.createContext({} as FaceSelectorGlobal)
export { Global  };
/**
 * 表情包选择器的完整主体
 *
 * @author KotoriK
 * @export
 * @class FaceSelector
 * @extends {React.Component}
 */
export default class FaceSelector extends React.Component<FaceSelectorProps, FaceSelectorState>{
    state = {
        nowPackagePos: 0
    }
    peakContainer: HTMLDivElement
    peakPopper: Popper.Instance
    handleTabSelectionChange(newPos: number) {
        this.setState({ nowPackagePos: newPos })
    }
    handleFaceSelected(face_pos: number) {
        const nowPackage = this.props.facePacks[this.state.nowPackagePos]
        this.props.onFaceSelected(nowPackage, nowPackage.faces[face_pos])
        this.props.handleHide()
    }
    createPeakContainer() {
        this.peakContainer = document.createElement('div')
        this.peakContainer.setAttribute('id', 'peak-container')
        this.hidePeak()
        this.props.refRoot.append(this.peakContainer)
        this.peakPopper = createPopper(this.props.refRoot, this.peakContainer, this.props.peakPopperOptions)
    }
    removePeakContainer() {
        import('react-dom').then((ReactDOM) => {
            ReactDOM.unmountComponentAtNode(this.peakContainer)
            this.peakPopper.destroy()
            this.peakPopper = undefined
            document.removeChild(this.peakContainer)
            this.peakContainer = undefined
        })
    }
    renderPeak(imgUrl: string, imgCaption: string) {
        ReactDOM.render(<Peak imgUrl={imgUrl} imgCaption={imgCaption} />, this.peakContainer)
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
    componentDidMount() {
        this.createPeakContainer()
    }
    componentWillUnmount() {
        this.removePeakContainer()
    }
    render() {
        let nowPackagePos = this.state.nowPackagePos
        const maxPos = this.props.facePacks.length - 1
        if (nowPackagePos > maxPos) nowPackagePos = maxPos //防止prop发生改动带来越界
        return (<div style={{ ...this.props.style }} className={'fp-border-shadow' + (this.props.className ? this.props.className : '')}>
            <Tabs facePackages={this.props.facePacks} onSelected={(pos) => this.handleTabSelectionChange(pos)} selectedPos={this.state.nowPackagePos} />
            <Global.Provider value={{
                showPeak: (imgUrl: string, imgCaption: string) => {
                    this.renderPeak(imgUrl, imgCaption)
                    this.showPeak()
                },
                hidePeak: this.hidePeak.bind(this)
            } as FaceSelectorGlobal}>
                <TableView facePackage={this.props.facePacks[nowPackagePos]} colCount={this.props.colCount} onImageSelected={this.handleFaceSelected.bind(this)} />
            </Global.Provider>
        </div>)
    }
}
export interface FaceSelectorGlobal {
    showPeak: (imgUrl: string, imgCaption: string) => void
    hidePeak: Function
}
