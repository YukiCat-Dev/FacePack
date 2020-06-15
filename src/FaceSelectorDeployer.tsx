import React from 'react'
import ReactDOM from 'react-dom'
import { createPopper } from '@popperjs/core';
import { FaceSelector } from './component/FaceSelector'
import { Face, FacePackage } from './FacePackage';
export default class FaceSelectorDeployer {
    private _popcorn: HTMLElement
    private _tooltip: HTMLElement
    private _onFaceSelected: (face: Face) => void
    private _facePacks: Array<FacePackage>
    constructor(popcorn: HTMLElement, tooltip: HTMLElement, facePackages: Array<FacePackage>, onFaceSelected: (face: Face) => void = () => { }) {
        this._popcorn = popcorn
        this._tooltip = tooltip
        this._onFaceSelected = onFaceSelected
        this._facePacks = facePackages
    }
    private _displayed: boolean=true
    /**
     *渲染FaceSelector
     *
     * @author KotoriK
     * @memberof FaceSelectorDeployer
     */
    render() {
        ReactDOM.render(<FaceSelector facePacks={this._facePacks} colCount={3} handleHide={this._doHide.bind(this)} onFaceSelected={this._onFaceSelected} refRoot={this._tooltip} />, this._tooltip)
        createPopper(this._popcorn, this._tooltip)
        this._popcorn.addEventListener('click',this._handlePopcornClick.bind(this))
        return this
    }
    private _handlePopcornClick(e: MouseEvent) {
       this._doHide()
    }
    private _doHide(){
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