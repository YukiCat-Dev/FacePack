"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processTemplate = void 0;
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
            case ' ':
            case '\n':
            case '\r':
            case '\t':
            case '\v':
            case '\f':
                //跳过空白字符
                //取消状态并放回字符
                if (inBracket) {
                    inBracket = false;
                    newText += `${left_bracket}${bracketContent}${char}`;
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
    //for end
    if (bracketContent != '') {
        newText += left_bracket + bracketContent;
        inBracket = false;
    }
    if (inBracket) {
        newText += left_bracket;
    }
    return newText;
}
exports.processTemplate = processTemplate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXRpbC90ZW1wbGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxTQUFnQixlQUFlLENBQUMsWUFBb0IsRUFBRSxhQUFxQixFQUFFLGtCQUEyQyxFQUFFLEdBQVc7SUFDakksSUFBSSxTQUFTLEdBQUcsS0FBSyxFQUFFLE9BQU8sR0FBRyxFQUFFLEVBQUUsY0FBYyxHQUFHLEVBQUUsQ0FBQTtJQUN4RCxLQUFLLE1BQU0sSUFBSSxJQUFJLEdBQUcsRUFBRTtRQUNwQixRQUFRLElBQUksRUFBRTtZQUNWLEtBQUssWUFBWTtnQkFDYixJQUFJLFNBQVMsRUFBRTtvQkFDWCxJQUFJLFlBQVksSUFBSSxhQUFhLEVBQUU7d0JBQy9CLFNBQVMsR0FBRyxLQUFLLENBQUE7d0JBQ2pCLE9BQU8sSUFBSSxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsQ0FBQTt3QkFDN0MsY0FBYyxHQUFHLEVBQUUsQ0FBQTtxQkFDdEI7eUJBQU07d0JBQ0gsU0FBUyxHQUFHLEtBQUssQ0FBQTt3QkFDakIsT0FBTyxJQUFJLEdBQUcsWUFBWSxHQUFHLGNBQWMsR0FBRyxZQUFZLEVBQUUsQ0FBQTt3QkFDNUQsY0FBYyxHQUFHLEVBQUUsQ0FBQTtxQkFDdEI7aUJBQ0o7cUJBQU07b0JBQ0gsU0FBUyxHQUFHLElBQUksQ0FBQTtpQkFDbkI7Z0JBQ0QsTUFBSztZQUNULEtBQUssYUFBYTtnQkFDZCxJQUFJLFNBQVMsRUFBRTtvQkFDWCxTQUFTLEdBQUcsS0FBSyxDQUFBO29CQUNqQixPQUFPLElBQUksa0JBQWtCLENBQUMsY0FBYyxDQUFDLENBQUE7b0JBQzdDLGNBQWMsR0FBRyxFQUFFLENBQUE7aUJBQ3RCO3FCQUFNO29CQUNILE9BQU8sSUFBSSxJQUFJLENBQUE7aUJBQ2xCO2dCQUNELE1BQUs7WUFDVCxLQUFLLEdBQUcsQ0FBQztZQUNULEtBQUssSUFBSSxDQUFDO1lBQ1YsS0FBSyxJQUFJLENBQUM7WUFDVixLQUFLLElBQUksQ0FBQztZQUNWLEtBQUssSUFBSSxDQUFDO1lBQ1YsS0FBSyxJQUFJO2dCQUNMLFFBQVE7Z0JBQ1IsV0FBVztnQkFDWCxJQUFJLFNBQVMsRUFBRTtvQkFDWCxTQUFTLEdBQUcsS0FBSyxDQUFBO29CQUNqQixPQUFPLElBQUksR0FBRyxZQUFZLEdBQUcsY0FBYyxHQUFHLElBQUksRUFBRSxDQUFBO29CQUNwRCxjQUFjLEdBQUcsRUFBRSxDQUFBO2lCQUN0QjtxQkFBTTtvQkFDSCxPQUFPLElBQUksSUFBSSxDQUFBO2lCQUNsQjtnQkFDRCxNQUFLO1lBRVQ7Z0JBQ0ksSUFBSSxTQUFTLEVBQUU7b0JBQ1gsY0FBYyxJQUFJLElBQUksQ0FBQTtpQkFDekI7cUJBQU07b0JBQ0gsT0FBTyxJQUFJLElBQUksQ0FBQTtpQkFDbEI7U0FDUjtLQUNKO0lBQ0QsU0FBUztJQUNULElBQUksY0FBYyxJQUFJLEVBQUUsRUFBRTtRQUN0QixPQUFPLElBQUksWUFBWSxHQUFHLGNBQWMsQ0FBQTtRQUN4QyxTQUFTLEdBQUcsS0FBSyxDQUFBO0tBQ3BCO0lBQ0QsSUFBSSxTQUFTLEVBQUU7UUFDWCxPQUFPLElBQUksWUFBWSxDQUFBO0tBQzFCO0lBQ0QsT0FBTyxPQUFPLENBQUE7QUFDbEIsQ0FBQztBQTlERCwwQ0E4REMifQ==