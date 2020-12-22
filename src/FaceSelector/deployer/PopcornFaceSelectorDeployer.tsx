import { createPopper, Instance, OptionsGeneric } from '@popperjs/core';
import { TModifier } from '../component/FaceSelector'
import { unmountComponentAtNode } from 'react-dom';
import { AbstractDeployer, AbstractDeployerOptions } from './AbstractDeployer';
export interface PopcornFaceSelectorDeployerOptions extends AbstractDeployerOptions {
    /**
     * 停靠于哪个元素上(popper.js)
     *
     * @type {HTMLElement}
     * @memberof FaceSelectorDeployerOptions
     */
    popcorn: HTMLElement,
    /**
     * 渲染在哪个元素上
     *
     * @type {HTMLElement}
     * @memberof FaceSelectorDeployerOptions
     */
    tooltip?: HTMLElement,
    popperOptions?: Partial<OptionsGeneric<TModifier>>,
}
export default class PopcornFaceSelectorDeployer extends AbstractDeployer {
    private _popcorn: HTMLElement
    private _tooltip: HTMLElement
    private _popper: Instance
    private _popperOptions: Partial<OptionsGeneric<TModifier>>
    constructor(props: PopcornFaceSelectorDeployerOptions) {
        super(props)
        this._popcorn = props.popcorn
        this._tooltip = props.tooltip ?? document.documentElement.appendChild(document.createElement('div'))
        this._popperOptions = props.popperOptions
    }


    render() {
        this._render(this._tooltip)
        this._popper = createPopper(this._popcorn, this._tooltip, this._popperOptions);
        this._popcorn.addEventListener('click', this._handlePopcornClick.bind(this));
        return this
    }
    private _handlePopcornClick(e: MouseEvent) {
        this.switchHide()
    }
    switchHide() {
        if (this._displayed) {
            this._tooltip.setAttribute("hidden", "hidden")
            this._displayed = false
        } else {
            this._tooltip.removeAttribute("hidden")
            this._popper.update()
            if (!this._loadContent) {
                this._loadContent = true
                this._render(this._tooltip)
            }

            this._displayed = true
        }
        return this
    }
    unload() {
        unmountComponentAtNode(this._tooltip);
        this._popcorn.removeEventListener('click', this._handlePopcornClick);
        return this
    }
}