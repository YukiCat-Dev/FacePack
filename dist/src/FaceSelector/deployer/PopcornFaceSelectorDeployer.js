"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@popperjs/core");
const react_dom_1 = require("react-dom");
const AbstractDeployer_1 = __importDefault(require("./AbstractDeployer"));
class PopcornFaceSelectorDeployer extends AbstractDeployer_1.default {
    constructor(props) {
        var _a;
        super(props);
        this._popcorn = props.popcorn;
        this._tooltip = (_a = props.tooltip) !== null && _a !== void 0 ? _a : document.documentElement.appendChild(document.createElement('div'));
        this._popperOptions = props.popperOptions;
    }
    render() {
        this._render(this._tooltip);
        this._popper = core_1.createPopper(this._popcorn, this._tooltip, this._popperOptions);
        this._popcorn.addEventListener('click', this._handlePopcornClick.bind(this));
        return this;
    }
    _handlePopcornClick(e) {
        this.switchHide();
    }
    switchHide() {
        if (this._displayed) {
            this._tooltip.setAttribute("hidden", "hidden");
            this._displayed = false;
        }
        else {
            this._tooltip.removeAttribute("hidden");
            this._popper.update();
            if (!this._loadContent) {
                this._loadContent = true;
                this._render(this._tooltip);
            }
            this._displayed = true;
        }
        return this;
    }
    unload() {
        react_dom_1.unmountComponentAtNode(this._tooltip);
        this._popcorn.removeEventListener('click', this._handlePopcornClick);
        return this;
    }
}
exports.default = PopcornFaceSelectorDeployer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUG9wY29ybkZhY2VTZWxlY3RvckRlcGxveWVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL0ZhY2VTZWxlY3Rvci9kZXBsb3llci9Qb3Bjb3JuRmFjZVNlbGVjdG9yRGVwbG95ZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEseUNBQXdFO0FBRXhFLHlDQUFtRDtBQUNuRCwwRUFBK0U7QUFrQi9FLE1BQXFCLDJCQUE0QixTQUFRLDBCQUFnQjtJQUtyRSxZQUFZLEtBQXlDOztRQUNqRCxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDWixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUE7UUFDN0IsSUFBSSxDQUFDLFFBQVEsU0FBRyxLQUFLLENBQUMsT0FBTyxtQ0FBSSxRQUFRLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7UUFDcEcsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFBO0lBQzdDLENBQUM7SUFHRCxNQUFNO1FBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxtQkFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDL0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzdFLE9BQU8sSUFBSSxDQUFBO0lBQ2YsQ0FBQztJQUNPLG1CQUFtQixDQUFDLENBQWE7UUFDckMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO0lBQ3JCLENBQUM7SUFDRCxVQUFVO1FBQ04sSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQTtZQUM5QyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQTtTQUMxQjthQUFNO1lBQ0gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUE7WUFDdkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQTtZQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDcEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUE7Z0JBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO2FBQzlCO1lBRUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUE7U0FDekI7UUFDRCxPQUFPLElBQUksQ0FBQTtJQUNmLENBQUM7SUFDRCxNQUFNO1FBQ0Ysa0NBQXNCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3JFLE9BQU8sSUFBSSxDQUFBO0lBQ2YsQ0FBQztDQUNKO0FBM0NELDhDQTJDQyJ9