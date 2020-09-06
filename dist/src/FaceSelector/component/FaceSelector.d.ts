import * as React from 'react';
import { FacePackage, Face } from '../../FacePackage';
import Popper, { OptionsGeneric, Modifier } from '@popperjs/core';
import BaseComponentProps from './BaseComponentProps';
import '../../facepack.css';
export declare type TModifier = Partial<Modifier<any, any>>;
export interface FaceSelectorProps extends BaseComponentProps {
    /**
     *  指示选项卡标签条停靠的位置
     */
    tabsDockOn?: "bottom" | "top";
    /**
    *  加载的表情包集
    */
    facePacks: Array<FacePackage>;
    /**
    *  每行表情数
    */
    colCount: number;
    /**
    *  实现隐藏FaceSelector的方法
    */
    handleHide: Function;
    /**
    *  当用户选中一个表情时触发
    */
    onFaceSelected: (parentPack: FacePackage, face: Face) => void;
    /**
     * 指向正挂载在的HTML元素
     */
    refRoot: HTMLElement;
    peakPopperOptions?: Partial<OptionsGeneric<TModifier>>;
}
export interface FaceSelectorState {
    /**
     * 使用数字，方便在数组中快速检索
     *
     * @type {number}
     * @memberof FaceSelectorState
     */
    nowPackagePos: number;
}
declare const Global: React.Context<FaceSelectorGlobal>;
export { Global };
/**
 * 表情包选择器的完整主体
 *
 * @author KotoriK
 * @export
 * @class FaceSelector
 * @extends {React.Component}
 */
export default class FaceSelector extends React.Component<FaceSelectorProps, FaceSelectorState> {
    state: {
        nowPackagePos: number;
    };
    peakContainer: HTMLDivElement;
    peakPopper: Popper.Instance;
    handleTabSelectionChange(newPos: number): void;
    handleFaceSelected(face_pos: number): void;
    createPeakContainer(): void;
    removePeakContainer(): void;
    renderPeak(imgUrl: string, imgCaption: string): void;
    hidePeak(): void;
    showPeak(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export interface FaceSelectorGlobal {
    showPeak: (imgUrl: string, imgCaption: string) => void;
    hidePeak: Function;
}
//# sourceMappingURL=FaceSelector.d.ts.map