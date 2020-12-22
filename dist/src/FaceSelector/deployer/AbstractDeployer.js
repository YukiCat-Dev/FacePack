"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_dom_1 = require("react-dom");
const FaceSelector_1 = __importDefault(require("../component/FaceSelector"));
class AbstractDeployer {
    constructor(options) {
        this._displayed = true;
        this._loadContent = false;
        this._onFaceSelected = options.onFaceSelected || function () { };
        this._facePacks = options.facePackages;
        this._style = options.style;
        this._className = options.className;
        this._peakPopperOptions = options.peakPopperOptions;
    }
    _render(onElement) {
        react_dom_1.render(jsx_runtime_1.jsx(FaceSelector_1.default, { facePacks: this._facePacks, colCount: 4, handleHide: this.switchHide.bind(this), onFaceSelected: this._onFaceSelected, peakPopperOptions: this._peakPopperOptions, style: this._style, className: this._className, loadContent: this._loadContent }, void 0), onElement);
    }
}
exports.default = AbstractDeployer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWJzdHJhY3REZXBsb3llci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9GYWNlU2VsZWN0b3IvZGVwbG95ZXIvQWJzdHJhY3REZXBsb3llci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUEseUNBQW1DO0FBQ25DLDZFQUFtRTtBQUduRSxNQUE4QixnQkFBZ0I7SUFnQzFDLFlBQVksT0FBZ0M7UUFZbEMsZUFBVSxHQUFZLElBQUksQ0FBQTtRQUMxQixpQkFBWSxHQUFZLEtBQUssQ0FBQTtRQVpuQyxJQUFJLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQyxjQUFjLElBQUksY0FBYyxDQUFDLENBQUE7UUFDaEUsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFBO1FBQ3RDLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQTtRQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUE7UUFDbkMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQTtJQUN2RCxDQUFDO0lBakJTLE9BQU8sQ0FBQyxTQUFzQjtRQUNwQyxrQkFBTSxDQUFDLGtCQUFDLHNCQUFZLElBQ2hCLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUMxQixRQUFRLEVBQUUsQ0FBQyxFQUNYLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFDdEMsY0FBYyxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQ3BDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxrQkFBa0IsRUFDMUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQ2xCLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUMxQixXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksV0FBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Q0FlSjtBQTlDRCxtQ0E4Q0MifQ==