/* export default class Template {
    LEFT_BRACKET: string
    RIGHT_BRACKET: string
    constructor(left_bracket: string, right_bracket: string, replacePlaceHolder: (str: string) => Promise<string>) {
        this.replacePlaceHolder = replacePlaceHolder
        this.LEFT_BRACKET = left_bracket
        this.RIGHT_BRACKET = right_bracket
    }
    replacePlaceHolder: (str: string) => Promise<string>
    async process(text: string) {
        let inBracket = false
        let newText = ""
        let bracketContent = ""
        for (const char of text) {
            switch (char) {
                case this.LEFT_BRACKET:
                    if (inBracket) {
                        if (this.LEFT_BRACKET == this.RIGHT_BRACKET) {
                            inBracket = false
                            newText += await this.replacePlaceHolder(bracketContent)
                            bracketContent = ""
                        } else {
                            inBracket = false
                            newText += `${this.LEFT_BRACKET}${bracketContent}${this.LEFT_BRACKET}`
                            bracketContent = ""
                        }
                    } else {
                        inBracket = true
                    }
                    break
                case this.RIGHT_BRACKET:
                    if (inBracket) {
                        inBracket = false
                        newText += await this.replacePlaceHolder(bracketContent)
                        bracketContent = ""
                    } else {
                        newText += char
                    }
                    break
                default:
                    if (inBracket) {
                        bracketContent += char
                    } else {
                        newText += char
                    }
            }
        }
        if (bracketContent != '') {
            newText += this.LEFT_BRACKET + bracketContent
        }
        return newText
    }
} */
export function processTemplate(left_bracket: string, right_bracket: string, replacePlaceHolder: (str: string) => string, str: string) {
    let inBracket = false, newText = "", bracketContent = ""
    for (const char of str) {
        switch (char) {
            case left_bracket:
                if (inBracket) {
                    if (left_bracket == right_bracket) {
                        inBracket = false
                        newText += replacePlaceHolder(bracketContent)
                        bracketContent = ""
                    } else {
                        inBracket = false
                        newText += `${left_bracket}${bracketContent}${left_bracket}`
                        bracketContent = ""
                    }
                } else {
                    inBracket = true
                }
                break
            case right_bracket:
                if (inBracket) {
                    inBracket = false
                    newText += replacePlaceHolder(bracketContent)
                    bracketContent = ""
                } else {
                    newText += char
                }
                break
            case ' ':
            case '\n':
            case '\r':
            case '\t':
            case '\v':
            case '\f':
                //跳过空白字符
                //取消状态并放回字符
                if (inBracket) {
                    inBracket = false
                    newText += `${left_bracket}${bracketContent}${char}`
                    bracketContent = ""
                }
                break

            default:
                if (inBracket) {
                    bracketContent += char
                } else {
                    newText += char
                }
        }
    }
    if (bracketContent != '') {
        newText += left_bracket + bracketContent
        inBracket = false
    }
    if (inBracket) {
        newText += left_bracket
    }
    return newText
}