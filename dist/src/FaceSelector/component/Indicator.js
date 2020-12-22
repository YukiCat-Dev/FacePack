"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndicateLevel = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const SVG_PREFIX = "https://cdn.jsdelivr.net/gh/YukiCat-Dev/FacePack/static/";
const SVG_PRELOAD = SVG_PREFIX + "Ripple-1.3s-237px.svg";
/* const SVG_WARNING = "https://cdn.jsdelivr.net/gh/YukiCat-Dev/FacePack/static/warning.svg"
const SVG_INFO = "https://cdn.jsdelivr.net/gh/YukiCat-Dev/FacePack/static/info.svg" */
const SVG_ERROR = SVG_PREFIX + "error.svg";
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
const Indicator = ({ level, description, style, className }) => jsx_runtime_1.jsx("img", { src: IndicateLevelSVG[level], alt: description, style: style, className: className }, void 0);
exports.default = Indicator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5kaWNhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL0ZhY2VTZWxlY3Rvci9jb21wb25lbnQvSW5kaWNhdG9yLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsTUFBTSxVQUFVLEdBQUcsMERBQTBELENBQUE7QUFDN0UsTUFBTSxXQUFXLEdBQUcsVUFBVSxHQUFHLHVCQUF1QixDQUFBO0FBQ3hEO3NGQUNzRjtBQUN0RixNQUFNLFNBQVMsR0FBRyxVQUFVLEdBQUcsV0FBVyxDQUFBO0FBQzFDLElBQVksYUFLWDtBQUxELFdBQVksYUFBYTtJQUNyQix1REFBTyxDQUFBO0lBQ1A7cUJBQ2lCO0lBQ2pCLG1EQUFLLENBQUE7QUFDVCxDQUFDLEVBTFcsYUFBYSxHQUFiLHFCQUFhLEtBQWIscUJBQWEsUUFLeEI7QUFDRCxNQUFNLGdCQUFnQixHQUFHLENBQUMsV0FBVyxFQUFDLDJCQUEyQixDQUFBLFNBQVMsQ0FBQyxDQUFBO0FBSzNFOzs7Ozs7O0dBT0c7QUFDSCxNQUFNLFNBQVMsR0FBRyxDQUFDLEVBQUMsS0FBSyxFQUFDLFdBQVcsRUFBQyxLQUFLLEVBQUMsU0FBUyxFQUFpQixFQUFFLEVBQUUsQ0FBQywyQkFBSyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLFdBQUksQ0FBQTtBQUN0SyxrQkFBZSxTQUFTLENBQUEifQ==