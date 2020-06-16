import { FacePackage } from "../FacePackage"

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
                this._faceMap.set(face.id, face.url)
            }
        }
    }
    render(onElement: HTMLElement|Element) {
        onElement.innerHTML = this.processInnerHTML(onElement.innerHTML)
    }
    processInnerHTML(innerHTML: string) {
        let inBracket = false
        let newInnerHTML = ""
        let bracketContent = ""
        for (const char of innerHTML) {
            switch (char) {
                case this.LEFT_BRACKET:
                    if (inBracket) {
                        if (this.LEFT_BRACKET == this.RIGHT_BRACKET) {
                            inBracket = false
                            newInnerHTML += this.replacePlaceHolder(bracketContent)
                            bracketContent = ""
                        } else {
                            inBracket = false
                            newInnerHTML += `${this.LEFT_BRACKET}bracketContent${this.LEFT_BRACKET}`
                            bracketContent = ""
                        }
                    } else {
                        inBracket = true
                    }
                    break
                case this.RIGHT_BRACKET:
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
            return `<img class="${this._className}" src="${url}" style="${this._inlineStyle} max-height:5vh;" alt="${this.LEFT_BRACKET}${placeHolder}${this.RIGHT_BRACKET}"/>`
        } else {
            return placeHolder
        }
    }
}