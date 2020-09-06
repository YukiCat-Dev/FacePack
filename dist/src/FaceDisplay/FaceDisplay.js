"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const template_1 = require("../util/template");
class FaceDisplay {
    constructor(facePackages, imgClassName = '', imgInlineStyle = '', leftBracket = ':', rightBracket = ':') {
        this._faceMap = new Map();
        this._className = imgClassName;
        this._inlineStyle = imgInlineStyle;
        this.LEFT_BRACKET = leftBracket;
        this.RIGHT_BRACKET = rightBracket;
        for (const pack of facePackages) {
            for (const face of pack.faces) {
                this._faceMap.set(`${pack.id}.${face.id}`, face.url);
            }
        }
    }
    render(onElement) {
        const raw = onElement.innerHTML, result = template_1.processTemplate(this.LEFT_BRACKET, this.RIGHT_BRACKET, this.replacePlaceHolder.bind(this), raw);
        if (result !== raw)
            onElement.innerHTML = result;
    }
    replacePlaceHolder(placeHolder) {
        const url = this._faceMap.get(placeHolder);
        if (url) {
            return `<img class="${this._className}" src="${url}" style="${this._inlineStyle} max-height:6vh;" alt="${this.LEFT_BRACKET}${placeHolder}${this.RIGHT_BRACKET}"/>`;
        }
        else {
            return `${this.LEFT_BRACKET}${placeHolder}${this.RIGHT_BRACKET}`;
        }
    }
}
exports.default = FaceDisplay;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmFjZURpc3BsYXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvRmFjZURpc3BsYXkvRmFjZURpc3BsYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSwrQ0FBa0Q7QUFFbEQsTUFBcUIsV0FBVztJQU01QixZQUFZLFlBQWdDLEVBQUUsZUFBdUIsRUFBRSxFQUFFLGlCQUF5QixFQUFFLEVBQUUsY0FBc0IsR0FBRyxFQUFFLGVBQXVCLEdBQUc7UUFIbkosYUFBUSxHQUF3QixJQUFJLEdBQUcsRUFBRSxDQUFBO1FBSTdDLElBQUksQ0FBQyxVQUFVLEdBQUcsWUFBWSxDQUFBO1FBQzlCLElBQUksQ0FBQyxZQUFZLEdBQUcsY0FBYyxDQUFBO1FBQ2xDLElBQUksQ0FBQyxZQUFZLEdBQUcsV0FBVyxDQUFBO1FBQy9CLElBQUksQ0FBQyxhQUFhLEdBQUcsWUFBWSxDQUFBO1FBQ2pDLEtBQUssTUFBTSxJQUFJLElBQUksWUFBWSxFQUFFO1lBQzdCLEtBQUssTUFBTSxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7YUFDdkQ7U0FDSjtJQUNMLENBQUM7SUFDRCxNQUFNLENBQUMsU0FBZ0M7UUFDbkMsTUFBTSxHQUFHLEdBQUcsU0FBUyxDQUFDLFNBQVMsRUFBRSxNQUFNLEdBQUcsMEJBQWUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtRQUN6SSxJQUFJLE1BQU0sS0FBSyxHQUFHO1lBQUUsU0FBUyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUE7SUFDcEQsQ0FBQztJQUNELGtCQUFrQixDQUFDLFdBQW1CO1FBQ2xDLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQzFDLElBQUksR0FBRyxFQUFFO1lBQ0wsT0FBTyxlQUFlLElBQUksQ0FBQyxVQUFVLFVBQVUsR0FBRyxZQUFZLElBQUksQ0FBQyxZQUFZLDBCQUEwQixJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsR0FBRyxJQUFJLENBQUMsYUFBYSxLQUFLLENBQUE7U0FDcks7YUFBTTtZQUNILE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7U0FDbkU7SUFDTCxDQUFDO0NBQ0o7QUE3QkQsOEJBNkJDIn0=