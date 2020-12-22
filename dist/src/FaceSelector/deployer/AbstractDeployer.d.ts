import { OptionsGeneric } from "@popperjs/core";
import { CSSProperties } from "react";
import { TModifier } from '../component/FaceSelector';
import { FacePackage, Face } from "../../FacePackage";
export default abstract class AbstractDeployer {
    /**
     * 隐藏/显示FaceSelector
     * @author KotoriK
     * @memberof AbstractDeployer
     */
    abstract switchHide(): any;
    /**
     * 解除FaceSelector在tooltip上的挂载
     *
     * @author KotoriK
     * @memberof AbstractDeployer
     */
    abstract unload(): any;
    /**
     *渲染FaceSelector
     *
     * @author KotoriK
     * @memberof AbstractDeployer
     */
    abstract render(): any;
    protected _render(onElement: HTMLElement): void;
    constructor(options: AbstractDeployerOptions);
    protected _onFaceSelected: (parentPack: FacePackage, face: Face) => void;
    protected _facePacks: Array<FacePackage>;
    protected _style: CSSProperties;
    protected _className: string;
    protected _peakPopperOptions: Partial<OptionsGeneric<TModifier>>;
    protected _displayed: boolean;
    protected _loadContent: boolean;
}
export interface AbstractDeployerOptions {
    /**
 * 为FaceSelector附加的class
 *
 */
    className?: string;
    style?: CSSProperties;
    /**
     * 要加载的表情包
     *
     * @type {Array<FacePackage>}
     * @memberof FaceSelectorDeployerOptions
     */
    facePackages: Array<FacePackage>;
    onFaceSelected: (parentPack: FacePackage, face: Face) => void;
    peakPopperOptions?: Partial<OptionsGeneric<TModifier>>;
}
//# sourceMappingURL=AbstractDeployer.d.ts.map