import { FacePackage } from "../FacePackage";
export default class FaceDisplay {
    private _className;
    private _inlineStyle;
    private _faceMap;
    LEFT_BRACKET: string;
    RIGHT_BRACKET: string;
    constructor(facePackages: Array<FacePackage>, imgClassName?: string, imgInlineStyle?: string, leftBracket?: string, rightBracket?: string);
    render(onElement: HTMLElement | Element): void;
    replacePlaceHolder(placeHolder: string): string;
}
//# sourceMappingURL=FaceDisplay.d.ts.map