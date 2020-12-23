import { OptionsGeneric } from "@popperjs/core";
import React, { CSSProperties } from "react";
import { render } from 'react-dom';
import FaceSelector, { TModifier } from '../component/FaceSelector'
import { FacePackage, Face } from "../../FacePackage";

export default abstract class AbstractDeployer {
    /**
     * 隐藏/显示FaceSelector
     * @author KotoriK
     * @memberof AbstractDeployer
     */
    abstract switchHide()
    /**
     * 解除FaceSelector在tooltip上的挂载
     *
     * @author KotoriK
     * @memberof AbstractDeployer
     */
    abstract unload()
    /**
     *渲染FaceSelector
     *
     * @author KotoriK
     * @memberof AbstractDeployer
     */
    abstract render()
    protected _render(onElement: HTMLElement) {
        render(<FaceSelector
            facePacks={this._facePacks}
            colCount={4}
            handleHide={this.switchHide.bind(this)}
            onFaceSelected={this._onFaceSelected}
            peakPopperOptions={this._peakPopperOptions}
            style={this._style}
            className={this._className}
            loadContent={this._loadContent} />, onElement);
    }
    constructor(options: AbstractDeployerOptions) {
        this._onFaceSelected = options.onFaceSelected || function () { }
        this._facePacks = options.facePackages
        this._style = options.style
        this._className = options.className
        this._peakPopperOptions = options.peakPopperOptions
    }
    protected _onFaceSelected: (parentPack: FacePackage, face: Face) => void
    protected _facePacks: Array<FacePackage>
    protected _style: CSSProperties
    protected _className: string
    protected _peakPopperOptions: Partial<OptionsGeneric<TModifier>>
    protected _displayed: boolean = true
    protected _loadContent: boolean = false
}
export interface AbstractDeployerOptions {

    /**
 * FaceSelector主体的class，会替换默认class
 *
 */
    className?: string
    style?: CSSProperties,
    /**
     * 要加载的表情包
     *
     * @type {Array<FacePackage>}
     * @memberof FaceSelectorDeployerOptions
     */
    facePackages: Array<FacePackage>,
    onFaceSelected: (parentPack: FacePackage, face: Face) => void,
    peakPopperOptions?: Partial<OptionsGeneric<TModifier>>

}