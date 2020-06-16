import React from 'react'
import ReactDOM from 'react-dom'
import { createPopper, OptionsGeneric } from '@popperjs/core';
import { FaceSelector, TModifier } from './component/FaceSelector'
import { Face, FacePackage } from '../FacePackage';
export default class FaceSelectorDeployer {
    private _popcorn: HTMLElement
    private _tooltip: HTMLElement
    private _onFaceSelected: (face: Face) => void
    private _facePacks: Array<FacePackage>
    private _popperOption:Partial<OptionsGeneric<TModifier>>
    constructor(popcorn: HTMLElement, tooltip: HTMLElement, facePackages: Array<FacePackage>, onFaceSelected: (face: Face) => void = () => { },popperOptions:Partial<OptionsGeneric<TModifier>>) {
        this._popcorn = popcorn
        this._tooltip = tooltip
        this._onFaceSelected = onFaceSelected
        this._facePacks = facePackages
        this._popperOption=popperOptions
    }
    private _displayed: boolean=true
    /**
     *渲染FaceSelector
     *
     * @author KotoriK
     * @memberof FaceSelectorDeployer
     */
    render() {
        ReactDOM.render(<FaceSelector facePacks={this._facePacks} colCount={3} handleHide={this.hide.bind(this)} onFaceSelected={this._onFaceSelected} refRoot={this._tooltip} popperOptions={this._popperOption}/>, this._tooltip)
        createPopper(this._popcorn, this._tooltip)
        this._popcorn.addEventListener('click',this._handlePopcornClick.bind(this))
        return this
    }
    private _handlePopcornClick(e: MouseEvent) {
       this.hide()
    }
    hide(){
        if(this._displayed) {
           this._tooltip.setAttribute("hidden", "hidden")
           this._displayed=false
        }else{
            this._tooltip.removeAttribute("hidden")
            this._displayed=true
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
        this._popcorn.removeEventListener('click',this._handlePopcornClick)
        return this
    }
}