import { unmountComponentAtNode } from "react-dom";
import AbstractDeployer,{  AbstractDeployerOptions } from "./AbstractDeployer";

export interface FaceSelectorDeployerOptions extends AbstractDeployerOptions {
    /**
     * FaceSelector要渲染到的元素
     *
     */
    self: HTMLElement
}
export default class FaceSelectorDeployer extends AbstractDeployer {
    private _self: HTMLElement
    constructor(options: FaceSelectorDeployerOptions) {
        super(options)
        this._self = options.self
    }
    switchHide() {
        if (this._displayed) {
            this._self.setAttribute("hidden", "hidden")
            this._displayed = false
        } else {
            this._self.removeAttribute("hidden")
            if (!this._loadContent) this._loadContent = true, this.render()
            this._displayed = true
        }
        return this
    }
    unload() {
        unmountComponentAtNode(this._self);
        return this
    }
    render() {
        this._render(this._self)
        return this
    }
}