"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processTemplate = void 0;
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
function processTemplate(left_bracket, right_bracket, replacePlaceHolder, str) {
    let inBracket = false, newText = "", bracketContent = "";
    for (const char of str) {
        switch (char) {
            case left_bracket:
                if (inBracket) {
                    if (left_bracket == right_bracket) {
                        inBracket = false;
                        newText += replacePlaceHolder(bracketContent);
                        bracketContent = "";
                    }
                    else {
                        inBracket = false;
                        newText += `${left_bracket}${bracketContent}${left_bracket}`;
                        bracketContent = "";
                    }
                }
                else {
                    inBracket = true;
                }
                break;
            case right_bracket:
                if (inBracket) {
                    inBracket = false;
                    newText += replacePlaceHolder(bracketContent);
                    bracketContent = "";
                }
                else {
                    newText += char;
                }
                break;
            default:
                if (inBracket) {
                    bracketContent += char;
                }
                else {
                    newText += char;
                }
        }
    }
    if (bracketContent != '') {
        newText += left_bracket + bracketContent;
    }
    return newText;
}
exports.processTemplate = processTemplate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXRpbC90ZW1wbGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQW9ESTtBQUNKLFNBQWdCLGVBQWUsQ0FBQyxZQUFvQixFQUFFLGFBQXFCLEVBQUUsa0JBQTJDLEVBQUUsR0FBVztJQUNqSSxJQUFJLFNBQVMsR0FBRyxLQUFLLEVBQUUsT0FBTyxHQUFHLEVBQUUsRUFBRSxjQUFjLEdBQUcsRUFBRSxDQUFBO0lBQ3hELEtBQUssTUFBTSxJQUFJLElBQUksR0FBRyxFQUFFO1FBQ3BCLFFBQVEsSUFBSSxFQUFFO1lBQ1YsS0FBSyxZQUFZO2dCQUNiLElBQUksU0FBUyxFQUFFO29CQUNYLElBQUksWUFBWSxJQUFJLGFBQWEsRUFBRTt3QkFDL0IsU0FBUyxHQUFHLEtBQUssQ0FBQTt3QkFDakIsT0FBTyxJQUFJLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxDQUFBO3dCQUM3QyxjQUFjLEdBQUcsRUFBRSxDQUFBO3FCQUN0Qjt5QkFBTTt3QkFDSCxTQUFTLEdBQUcsS0FBSyxDQUFBO3dCQUNqQixPQUFPLElBQUksR0FBRyxZQUFZLEdBQUcsY0FBYyxHQUFHLFlBQVksRUFBRSxDQUFBO3dCQUM1RCxjQUFjLEdBQUcsRUFBRSxDQUFBO3FCQUN0QjtpQkFDSjtxQkFBTTtvQkFDSCxTQUFTLEdBQUcsSUFBSSxDQUFBO2lCQUNuQjtnQkFDRCxNQUFLO1lBQ1QsS0FBSyxhQUFhO2dCQUNkLElBQUksU0FBUyxFQUFFO29CQUNYLFNBQVMsR0FBRyxLQUFLLENBQUE7b0JBQ2pCLE9BQU8sSUFBSSxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsQ0FBQTtvQkFDN0MsY0FBYyxHQUFHLEVBQUUsQ0FBQTtpQkFDdEI7cUJBQU07b0JBQ0gsT0FBTyxJQUFJLElBQUksQ0FBQTtpQkFDbEI7Z0JBQ0QsTUFBSztZQUNUO2dCQUNJLElBQUksU0FBUyxFQUFFO29CQUNYLGNBQWMsSUFBSSxJQUFJLENBQUE7aUJBQ3pCO3FCQUFNO29CQUNILE9BQU8sSUFBSSxJQUFJLENBQUE7aUJBQ2xCO1NBQ1I7S0FDSjtJQUNELElBQUksY0FBYyxJQUFJLEVBQUUsRUFBRTtRQUN0QixPQUFPLElBQUksWUFBWSxHQUFHLGNBQWMsQ0FBQTtLQUMzQztJQUNELE9BQU8sT0FBTyxDQUFBO0FBQ2xCLENBQUM7QUF4Q0QsMENBd0NDIn0=