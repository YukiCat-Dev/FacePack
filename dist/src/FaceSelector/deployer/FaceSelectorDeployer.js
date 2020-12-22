"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_dom_1 = require("react-dom");
const AbstractDeployer_1 = __importDefault(require("./AbstractDeployer"));
class FaceSelectorDeployer extends AbstractDeployer_1.default {
    constructor(options) {
        super(options);
        this._self = options.self;
    }
    switchHide() {
        if (this._displayed) {
            this._self.setAttribute("hidden", "hidden");
            this._displayed = false;
        }
        else {
            this._self.removeAttribute("hidden");
            if (!this._loadContent)
                this._loadContent = true, this.render();
            this._displayed = true;
        }
        return this;
    }
    unload() {
        react_dom_1.unmountComponentAtNode(this._self);
        return this;
    }
    render() {
        this._render(this._self);
        return this;
    }
}
exports.default = FaceSelectorDeployer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmFjZVNlbGVjdG9yRGVwbG95ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvRmFjZVNlbGVjdG9yL2RlcGxveWVyL0ZhY2VTZWxlY3RvckRlcGxveWVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHlDQUFtRDtBQUNuRCwwRUFBK0U7QUFTL0UsTUFBcUIsb0JBQXFCLFNBQVEsMEJBQWdCO0lBRTlELFlBQVksT0FBb0M7UUFDNUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ2QsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFBO0lBQzdCLENBQUM7SUFDRCxVQUFVO1FBQ04sSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQTtZQUMzQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQTtTQUMxQjthQUFNO1lBQ0gsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUE7WUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZO2dCQUFFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQTtZQUMvRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQTtTQUN6QjtRQUNELE9BQU8sSUFBSSxDQUFBO0lBQ2YsQ0FBQztJQUNELE1BQU07UUFDRixrQ0FBc0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkMsT0FBTyxJQUFJLENBQUE7SUFDZixDQUFDO0lBQ0QsTUFBTTtRQUNGLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ3hCLE9BQU8sSUFBSSxDQUFBO0lBQ2YsQ0FBQztDQUNKO0FBekJELHVDQXlCQyJ9