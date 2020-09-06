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
        const raw = onElement.innerHTML, result = this.renderHTML(raw);
        if (result !== raw)
            onElement.innerHTML = result;
    }
    renderHTML(html) {
        return template_1.processTemplate(this.LEFT_BRACKET, this.RIGHT_BRACKET, this.replacePlaceHolder.bind(this), html);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmFjZURpc3BsYXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvRmFjZURpc3BsYXkvRmFjZURpc3BsYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSwrQ0FBa0Q7QUFFbEQsTUFBcUIsV0FBVztJQU01QixZQUFZLFlBQWdDLEVBQUUsZUFBdUIsRUFBRSxFQUFFLGlCQUF5QixFQUFFLEVBQUUsY0FBc0IsR0FBRyxFQUFFLGVBQXVCLEdBQUc7UUFIbkosYUFBUSxHQUF3QixJQUFJLEdBQUcsRUFBRSxDQUFBO1FBSTdDLElBQUksQ0FBQyxVQUFVLEdBQUcsWUFBWSxDQUFBO1FBQzlCLElBQUksQ0FBQyxZQUFZLEdBQUcsY0FBYyxDQUFBO1FBQ2xDLElBQUksQ0FBQyxZQUFZLEdBQUcsV0FBVyxDQUFBO1FBQy9CLElBQUksQ0FBQyxhQUFhLEdBQUcsWUFBWSxDQUFBO1FBQ2pDLEtBQUssTUFBTSxJQUFJLElBQUksWUFBWSxFQUFFO1lBQzdCLEtBQUssTUFBTSxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7YUFDdkQ7U0FDSjtJQUNMLENBQUM7SUFDRCxNQUFNLENBQUMsU0FBZ0M7UUFDbkMsTUFBTSxHQUFHLEdBQUcsU0FBUyxDQUFDLFNBQVMsRUFBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUM3RCxJQUFJLE1BQU0sS0FBRyxHQUFHO1lBQUUsU0FBUyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUE7SUFDbEQsQ0FBQztJQUNELFVBQVUsQ0FBQyxJQUFZO1FBQ25CLE9BQU8sMEJBQWUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUMzRyxDQUFDO0lBQ0Qsa0JBQWtCLENBQUMsV0FBbUI7UUFDbEMsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDMUMsSUFBSSxHQUFHLEVBQUU7WUFDTCxPQUFPLGVBQWUsSUFBSSxDQUFDLFVBQVUsVUFBVSxHQUFHLFlBQVksSUFBSSxDQUFDLFlBQVksMEJBQTBCLElBQUksQ0FBQyxZQUFZLEdBQUcsV0FBVyxHQUFHLElBQUksQ0FBQyxhQUFhLEtBQUssQ0FBQTtTQUNySzthQUFNO1lBQ0gsT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsV0FBVyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtTQUNuRTtJQUNMLENBQUM7Q0FDSjtBQWhDRCw4QkFnQ0MifQ==