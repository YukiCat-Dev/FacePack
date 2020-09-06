"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndicateLevel = void 0;
const react_1 = __importDefault(require("react"));
const SVG_PRELOAD = "https://cdn.jsdelivr.net/gh/YukiCat-Dev/FacePack/static/Ripple-1.3s-237px.svg";
/* const SVG_WARNING = "https://cdn.jsdelivr.net/gh/YukiCat-Dev/FacePack/static/warning.svg"
const SVG_INFO = "https://cdn.jsdelivr.net/gh/YukiCat-Dev/FacePack/static/info.svg" */
const SVG_ERROR = "https://cdn.jsdelivr.net/gh/YukiCat-Dev/FacePack/static/error.svg";
var IndicateLevel;
(function (IndicateLevel) {
    IndicateLevel[IndicateLevel["PRELOAD"] = 0] = "PRELOAD";
    /*     INFO ,
        WARNING ,  */
    IndicateLevel[IndicateLevel["ERROR"] = 1] = "ERROR";
})(IndicateLevel = exports.IndicateLevel || (exports.IndicateLevel = {}));
const IndicateLevelSVG = [SVG_PRELOAD, /* SVG_WARNING,SVG_INFO, */ SVG_ERROR];
/**
 *一个指示错误的组件
 *
 * @author KotoriK
 * @export
 * @param {IndicatorProps} props
 * @returns
 */
const Indicator = (props) => {
    return (react_1.default.createElement("img", { src: IndicateLevelSVG[props.level], alt: props.description, style: props.style }));
};
exports.default = Indicator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5kaWNhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL0ZhY2VTZWxlY3Rvci9jb21wb25lbnQvSW5kaWNhdG9yLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxrREFBMEI7QUFFMUIsTUFBTSxXQUFXLEdBQUcsK0VBQStFLENBQUE7QUFDbkc7c0ZBQ3NGO0FBQ3RGLE1BQU0sU0FBUyxHQUFHLG1FQUFtRSxDQUFBO0FBQ3JGLElBQVksYUFLWDtBQUxELFdBQVksYUFBYTtJQUNyQix1REFBTyxDQUFBO0lBQ1A7cUJBQ2lCO0lBQ2pCLG1EQUFLLENBQUE7QUFDVCxDQUFDLEVBTFcsYUFBYSxHQUFiLHFCQUFhLEtBQWIscUJBQWEsUUFLeEI7QUFDRCxNQUFNLGdCQUFnQixHQUFHLENBQUMsV0FBVyxFQUFDLDJCQUEyQixDQUFBLFNBQVMsQ0FBQyxDQUFBO0FBSzNFOzs7Ozs7O0dBT0c7QUFDSCxNQUFNLFNBQVMsR0FBQyxDQUFDLEtBQXFCLEVBQUMsRUFBRTtJQUNyQyxPQUFPLENBQ0gsdUNBQUssR0FBRyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLFdBQVcsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssR0FBSSxDQUMxRixDQUFBO0FBQ0wsQ0FBQyxDQUFBO0FBQ0Qsa0JBQWUsU0FBUyxDQUFBIn0=