import React from 'react';
import { FacePackage, Face } from '../../FacePackage';
import { OptionsGeneric, Modifier } from '@popperjs/core';
import BaseComponentProps from './BaseComponentProps';
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
     * 传递给Peak的Popper Option
     */
    peakPopperOptions?: Partial<OptionsGeneric<TModifier>>;
    /**
     * 指示是否加载表情
     */
    loadContent: boolean;
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
 *表情包选择器的完整主体
 *
 * @author KotoriK
 * @export
 * @param { children }
 * @returns
 */
export declare function GenericStyle({ children }: {
    children: (classes: Record<"borderShadow" | "bgWhiteBlur" | "main", string>) => React.ReactElement;
}): React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)>) | (new (props: any) => React.Component<any, any, any>)>;
export default function FaceSelector({ peakPopperOptions, facePacks, style, className, colCount, onFaceSelected, handleHide, loadContent }: FaceSelectorProps): JSX.Element;
export interface FaceSelectorGlobal {
    showPeak: (imgUrl: string, imgCaption: string) => void;
    hidePeak: Function;
}
//# sourceMappingURL=FaceSelector.d.ts.map