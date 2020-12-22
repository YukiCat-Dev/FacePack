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
    render(node) {
        const raw = node.innerHTML, result = this.renderText(raw);
        if (result !== raw)
            node.innerHTML = result;
    }
    renderText(text) {
        return template_1.processTemplate(this.LEFT_BRACKET, this.RIGHT_BRACKET, this.replacePlaceHolder.bind(this), text);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmFjZURpc3BsYXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvRmFjZURpc3BsYXkvRmFjZURpc3BsYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSwrQ0FBa0Q7QUFFbEQsTUFBcUIsV0FBVztJQU01QixZQUFZLFlBQWdDLEVBQUUsZUFBdUIsRUFBRSxFQUFFLGlCQUF5QixFQUFFLEVBQUUsY0FBc0IsR0FBRyxFQUFFLGVBQXVCLEdBQUc7UUFIbkosYUFBUSxHQUF3QixJQUFJLEdBQUcsRUFBRSxDQUFBO1FBSTdDLElBQUksQ0FBQyxVQUFVLEdBQUcsWUFBWSxDQUFBO1FBQzlCLElBQUksQ0FBQyxZQUFZLEdBQUcsY0FBYyxDQUFBO1FBQ2xDLElBQUksQ0FBQyxZQUFZLEdBQUcsV0FBVyxDQUFBO1FBQy9CLElBQUksQ0FBQyxhQUFhLEdBQUcsWUFBWSxDQUFBO1FBQ2pDLEtBQUssTUFBTSxJQUFJLElBQUksWUFBWSxFQUFFO1lBQzdCLEtBQUssTUFBTSxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7YUFDdkQ7U0FDSjtJQUNMLENBQUM7SUFDRCxNQUFNLENBQUMsSUFBYTtRQUNoQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3pELElBQUksTUFBTSxLQUFLLEdBQUc7WUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQTtJQUMvQyxDQUFDO0lBQ0QsVUFBVSxDQUFDLElBQVk7UUFDbkIsT0FBTywwQkFBZSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQzNHLENBQUM7SUFDRCxrQkFBa0IsQ0FBQyxXQUFtQjtRQUNsQyxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUMxQyxJQUFJLEdBQUcsRUFBRTtZQUNMLE9BQU8sZUFBZSxJQUFJLENBQUMsVUFBVSxVQUFVLEdBQUcsWUFBWSxJQUFJLENBQUMsWUFBWSwwQkFBMEIsSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLEdBQUcsSUFBSSxDQUFDLGFBQWEsS0FBSyxDQUFBO1NBQ3JLO2FBQU07WUFDSCxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO1NBQ25FO0lBQ0wsQ0FBQztDQUNKO0FBaENELDhCQWdDQyJ9