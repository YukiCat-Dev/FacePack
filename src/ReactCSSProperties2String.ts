import { CSSProperties } from "react"

/**
* 把React的CSSProperties转为string
*
* @author KotoriK
* @export
* @param {CSSProperties} properties
* @returns
*/

export function convert2String(properties: CSSProperties) {
    let str: string = ''
    for (const propName in Object.keys(properties)) {
        str += `${propName}:${properties[propName]};`
    }
    return str
}