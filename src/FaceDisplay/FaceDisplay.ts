import { FacePackage } from "../FacePackage"
import { processTemplate } from "../util/template"

export default class FaceDisplay {
    private _className: string
    private _inlineStyle: string
    private _faceMap: Map<string, string> = new Map()
    LEFT_BRACKET: string
    RIGHT_BRACKET: string
    constructor(facePackages: Array<FacePackage>, imgClassName: string = '', imgInlineStyle: string = '', leftBracket: string = ':', rightBracket: string = ':') {
        this._className = imgClassName
        this._inlineStyle = imgInlineStyle
        this.LEFT_BRACKET = leftBracket
        this.RIGHT_BRACKET = rightBracket
        for (const pack of facePackages) {
            for (const face of pack.faces) {
                this._faceMap.set(`${pack.id}.${face.id}`, face.url)
            }
        }
    }
    render(node: Element) {
        const raw = node.innerHTML, result = this.renderText(raw)
        if (result !== raw) node.innerHTML = result
    }
    renderText(text: string) {
        return processTemplate(this.LEFT_BRACKET, this.RIGHT_BRACKET, this.replacePlaceHolder.bind(this), text)
    }
    replacePlaceHolder(placeHolder: string) {
        const url = this._faceMap.get(placeHolder)
        if (url) {
            return `<img class="${this._className}" src="${url}" style="${this._inlineStyle} max-height:6vh;" alt="${this.LEFT_BRACKET}${placeHolder}${this.RIGHT_BRACKET}"/>`
        } else {
            return `${this.LEFT_BRACKET}${placeHolder}${this.RIGHT_BRACKET}`
        }
    }
}