import React, { CSSProperties } from 'react'
import ReactDOM from 'react-dom'
import { createPopper, OptionsGeneric } from '@popperjs/core';
import { FaceSelector, TModifier } from './component/FaceSelector'
import { Face, FacePackage } from '../FacePackage';
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
    
    /**
     * 要加载的表情包
     *
     * @type {Array<FacePackage>}
     * @memberof FaceSelectorDeployerProps
     */
    facePackages: Array<FacePackage>, onFaceSelected: (face: Face) => void, style?: CSSProperties, popperOptions?: Partial<OptionsGeneric<TModifier>>
}
export default class FaceSelectorDeployer {
    private _popcorn: HTMLElement
    private _tooltip: HTMLElement
    private _onFaceSelected: (face: Face) => void
    private _facePacks: Array<FacePackage>
    private _popperOption: Partial<OptionsGeneric<TModifier>>
    private _style: CSSProperties
    constructor(props: FaceSelectorDeployerProps) {
        this._popcorn = props.popcorn
        this._tooltip = props.tooltip
        this._onFaceSelected = props.onFaceSelected || function () { }
        this._facePacks = props.facePackages
        this._popperOption = props.popperOptions
        this._style = props.style
    }
    private _displayed: boolean = true
    /**
     *渲染FaceSelector
     *
     * @author KotoriK
     * @memberof FaceSelectorDeployer
     */
    render() {
        ReactDOM.render(<FaceSelector facePacks={this._facePacks} colCount={3} handleHide={this.hide.bind(this)} onFaceSelected={this._onFaceSelected} refRoot={this._tooltip} popperOptions={this._popperOption} style={this._style} />, this._tooltip)
        createPopper(this._popcorn, this._tooltip)
        this._popcorn.addEventListener('click', this._handlePopcornClick.bind(this))
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
        ReactDOM.unmountComponentAtNode(this._tooltip)
        this._popcorn.removeEventListener('click', this._handlePopcornClick)
        return this
    }
}