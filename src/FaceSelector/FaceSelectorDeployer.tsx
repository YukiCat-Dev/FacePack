import { CSSProperties } from 'react'
import { createPopper, OptionsGeneric } from '@popperjs/core';
import FaceSelector,{ TModifier } from './component/FaceSelector'
import { Face, FacePackage } from '../FacePackage';
import ReactDOM from 'react-dom';
import React from 'react';
export interface FaceSelectorDeployerProps {
    /**
     * 停靠于哪个元素上(popper.js)
     *
     * @type {HTMLElement}
     * @memberof FaceSelectorDeployerProps
     */
    popcorn: HTMLElement,
    /**
     * 渲染在哪个元素上
     *
     * @type {HTMLElement}
     * @memberof FaceSelectorDeployerProps
     */
    tooltip: HTMLElement,
    className?: string
    /**
     * 要加载的表情包
     *
     * @type {Array<FacePackage>}
     * @memberof FaceSelectorDeployerProps
     */
    facePackages: Array<FacePackage>, onFaceSelected: (parentPack: FacePackage, face: Face) => void, style?: CSSProperties, popperOptions?: Partial<OptionsGeneric<TModifier>>, peakPopperOptions?: Partial<OptionsGeneric<TModifier>>
}
export default class FaceSelectorDeployer {
    private _popcorn: HTMLElement
    private _tooltip: HTMLElement
    private _onFaceSelected: (parentPack: FacePackage, face: Face) => void
    private _facePacks: Array<FacePackage>
    private _popperOptions: Partial<OptionsGeneric<TModifier>>
    private _peakPopperOptions: Partial<OptionsGeneric<TModifier>>
    private _style: CSSProperties
    private _className: string
    constructor(props: FaceSelectorDeployerProps) {
        this._popcorn = props.popcorn
        this._tooltip = props.tooltip
        this._onFaceSelected = props.onFaceSelected || function () { }
        this._facePacks = props.facePackages
        this._popperOptions = props.popperOptions
        this._style = props.style
        this._className = props.className
        this._peakPopperOptions = props.peakPopperOptions
    }
    private _displayed: boolean = true
    /**
     *渲染FaceSelector
     *
     * @author KotoriK
     * @memberof FaceSelectorDeployer
     */
    render() {
        ReactDOM.render(<FaceSelector facePacks={this._facePacks} colCount={3} handleHide={this.hide.bind(this)} onFaceSelected={this._onFaceSelected} refRoot={this._tooltip} peakPopperOptions={this._peakPopperOptions}
            style={this._style} className={this._className} />, this._tooltip);
        createPopper(this._popcorn, this._tooltip, this._popperOptions);
        this._popcorn.addEventListener('click', this._handlePopcornClick.bind(this));
        return this
    }
    private _handlePopcornClick(e: MouseEvent) {
        this.hide()
    }
    hide() {
        if (this._displayed) {
            this._tooltip.setAttribute("hidden", "hidden")
            this._displayed = false
        } else {
            this._tooltip.removeAttribute("hidden")
            this._displayed = true
        }
    }
    /**
     * 解除FaceSelector在tooltip上的挂载
     *
     * @author KotoriK
     * @memberof FaceSelectorDeployer
     */
    unload() {
        ReactDOM.unmountComponentAtNode(this._tooltip);
        this._popcorn.removeEventListener('click', this._handlePopcornClick);
        return this
    }
}