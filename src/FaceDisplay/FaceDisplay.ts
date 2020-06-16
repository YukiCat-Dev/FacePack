import { FacePackage } from "../FacePackage"
const LEFT_BRACKET = ":"
const RIGHT_BRACKET = ":"
export default class FaceDisplay {
    private _className: string
    private _inlineStyle: string
    private _faceMap: Map<string, string>=new Map()
    constructor(facePackages: Array<FacePackage>, imgClassName: string = '', imgInlineStyle: string = '') {
        this._className = imgClassName
        this._inlineStyle = imgInlineStyle
        for (const pack of facePackages) {
            for (const face of pack.faces) {
                this._faceMap.set(face.id, face.url)
            }
        }
    }
    render(onElement: HTMLElement) {
        onElement.innerHTML = this.processInnerHTML(onElement.innerHTML)
    }
    processInnerHTML(innerHTML: string) {
        let inBracket = false
        let newInnerHTML = ""
        let bracketContent = ""
        for (const char of innerHTML) {
            switch (char) {
                case LEFT_BRACKET:
                    if (inBracket) {
                        if (LEFT_BRACKET == RIGHT_BRACKET) {
                            inBracket = false
                            newInnerHTML += this.replacePlaceHolder(bracketContent)
                            bracketContent = ""
                        } else {
                            inBracket = false
                            newInnerHTML += `${LEFT_BRACKET}bracketContent${LEFT_BRACKET}`
                            bracketContent = ""
                        }
                    } else {
                        inBracket = true
                    }
                    break
                case RIGHT_BRACKET:
                    if (inBracket) {
                        inBracket = false
                        newInnerHTML += this.replacePlaceHolder(bracketContent)
                        bracketContent = ""
                    } else {
                        newInnerHTML += char
                    }
                    break
                default:
                    if (inBracket) {
                        bracketContent += char
                    } else {
                        newInnerHTML += char
                    }
            }
        }
        if (bracketContent != '') {
            newInnerHTML += bracketContent
        }
        return newInnerHTML
    }
    replacePlaceHolder(placeHolder: string) {
        let url = this._faceMap.get(placeHolder)
        if (url) {
            return `<img class="${this._className}" src="${url}" style="${this._inlineStyle} max-height:5vh;" alt="${placeHolder}"/>`
        } else {
            return placeHolder
        }
    }
}