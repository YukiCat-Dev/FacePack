import { OptionsGeneric } from '@popperjs/core';
import { TModifier } from '../component/FaceSelector';
import AbstractDeployer, { AbstractDeployerOptions } from './AbstractDeployer';
export interface PopcornFaceSelectorDeployerOptions extends AbstractDeployerOptions {
    /**
     * 停靠于哪个元素上(popper.js)
     *
     * @type {HTMLElement}
     * @memberof FaceSelectorDeployerOptions
     */
    popcorn: HTMLElement;
    /**
     * 渲染在哪个元素上
     *
     * @type {HTMLElement}
     * @memberof FaceSelectorDeployerOptions
     */
    tooltip?: HTMLElement;
    popperOptions?: Partial<OptionsGeneric<TModifier>>;
}
export default class PopcornFaceSelectorDeployer extends AbstractDeployer {
    private _popcorn;
    private _tooltip;
    private _popper;
    private _popperOptions;
    constructor(props: PopcornFaceSelectorDeployerOptions);
    render(): this;
    private _handlePopcornClick;
    switchHide(): this;
    unload(): this;
}
//# sourceMappingURL=PopcornFaceSelectorDeployer.d.ts.map