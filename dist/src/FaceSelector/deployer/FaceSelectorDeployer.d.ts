import AbstractDeployer, { AbstractDeployerOptions } from "./AbstractDeployer";
export interface FaceSelectorDeployerOptions extends AbstractDeployerOptions {
    /**
     * FaceSelector要渲染到的元素
     *
     */
    self: HTMLElement;
}
export default class FaceSelectorDeployer extends AbstractDeployer {
    private _self;
    constructor(options: FaceSelectorDeployerOptions);
    switchHide(): this;
    unload(): this;
    render(): this;
}
//# sourceMappingURL=FaceSelectorDeployer.d.ts.map