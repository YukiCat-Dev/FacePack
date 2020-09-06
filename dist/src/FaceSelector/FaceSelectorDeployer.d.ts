import { CSSProperties } from 'react';
import { OptionsGeneric } from '@popperjs/core';
import { TModifier } from './component/FaceSelector';
import { Face, FacePackage } from '../FacePackage';
export interface FaceSelectorDeployerProps {
    /**
     * 停靠于哪个元素上(popper.js)
     *
     * @type {HTMLElement}
     * @memberof FaceSelectorDeployerProps
     */
    popcorn: HTMLElement;
    /**
     * 渲染在哪个元素上
     *
     * @type {HTMLElement}
     * @memberof FaceSelectorDeployerProps
     */
    tooltip: HTMLElement;
    className?: string;
    /**
     * 要加载的表情包
     *
     * @type {Array<FacePackage>}
     * @memberof FaceSelectorDeployerProps
     */
    facePackages: Array<FacePackage>;
    onFaceSelected: (parentPack: FacePackage, face: Face) => void;
    style?: CSSProperties;
    popperOptions?: Partial<OptionsGeneric<TModifier>>;
    peakPopperOptions?: Partial<OptionsGeneric<TModifier>>;
}
export default class FaceSelectorDeployer {
    private _popcorn;
    private _tooltip;
    private _onFaceSelected;
    private _facePacks;
    private _popperOptions;
    private _peakPopperOptions;
    private _style;
    private _className;
    constructor(props: FaceSelectorDeployerProps);
    private _displayed;
    /**
     *渲染FaceSelector
     *
     * @author KotoriK
     * @memberof FaceSelectorDeployer
     */
    render(): this;
    private _handlePopcornClick;
    hide(): void;
    /**
     * 解除FaceSelector在tooltip上的挂载
     *
     * @author KotoriK
     * @memberof FaceSelectorDeployer
     */
    unload(): this;
}
//# sourceMappingURL=FaceSelectorDeployer.d.ts.map