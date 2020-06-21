import { FacePackage, getFaceFullUrl } from "../FacePackage"
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
                this._faceMap.set(`${pack.id}.${face.id}`,face.url)
            }
        }
    }
    render(onElement: HTMLElement|Element) {
        onElement.innerHTML = processTemplate(this.LEFT_BRACKET,this.RIGHT_BRACKET,this.replacePlaceHolder.bind(this),onElement.innerHTML)
    }
    replacePlaceHolder(placeHolder: string) {
        const url = this._faceMap.get(placeHolder)
        if (url) {
            return `<img class="${this._className}" src="${url}" style="${this._inlineStyle} max-height:5vh;" alt="${this.LEFT_BRACKET}${placeHolder}${this.RIGHT_BRACKET}"/>`
        } else {
            return placeHolder
        }
    }
}