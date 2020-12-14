import { FacePackage } from "../FacePackage"

export default class FaceDisplay {
    private _className: string
    private _style: string
    private _map: Map<string, string> = new Map()
    readonly regexp: RegExp
    constructor(facePackages: Array<FacePackage>, imgClassName: string = '', imgInlineStyle: string = '', regExp: string | RegExp = /:(\S+):/) {
        this._className = imgClassName
        this._style = imgInlineStyle
        this.regexp = typeof regExp == 'string' ? new RegExp(regExp) : regExp
        for (const pack of facePackages) {
            for (const face of pack.faces) {
                this._map.set(`${pack.id}.${face.id}`, face.url)
            }
        }
    }
    render(element: HTMLElement) {
        const raw = element.innerHTML, result = this.renderText(raw)
        if (result !== raw) element.innerHTML = result
    }
    renderText(text: string) {
        const placeholder = text.match(this.regexp)
        if (placeholder) {
            return this._replace(text,placeholder[1])
        } else {
            return text
        }
    }
    private _replace(raw:string,content: string) {
        const url = this._map.get(content)
        if (url) {
            return `<img ${this._className ? ('class=' + this._className) : ''} src="${url}" style="${this._style ?? 'max-height:6vh;'}" alt="${raw}"/>`
        } else {
            return raw
        }
    }
}