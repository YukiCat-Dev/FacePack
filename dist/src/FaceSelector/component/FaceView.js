"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const Indicator_1 = __importStar(require("./Indicator"));
const FaceSelector_1 = require("./FaceSelector");
/**
 * 处理表情显示
 *
 * @author KotoriK
 * @param {FaceViewProps} props
 * @returns
 */
function FaceView(props) {
    const [loaded, setLoaded] = react_1.useState(false);
    const [showIndicator, setShowIndicator] = react_1.useState({ level: Indicator_1.IndicateLevel.PRELOAD });
    const global = react_1.useContext(FaceSelector_1.Global);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        showIndicator && react_1.default.createElement(Indicator_1.default, Object.assign({}, showIndicator, { style: { ...props.style, transition: "opacity 2s ease" }, className: props.className })),
        react_1.default.createElement("img", { src: props.src, onClick: (e) => props.onClick(e, props.face_pos), onPointerEnter: () => global.showPeak(props.src, props.alt), onPointerOut: () => global.hidePeak(), alt: props.alt, style: { ...props.style }, className: props.className, onLoad: () => {
                setShowIndicator(null);
                setLoaded(true);
            }, hidden: !loaded, onError: () => {
                setLoaded(false);
                setShowIndicator({ level: Indicator_1.IndicateLevel.ERROR });
            } })));
}
exports.default = FaceView;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmFjZVZpZXcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvRmFjZVNlbGVjdG9yL2NvbXBvbmVudC9GYWNlVmlldy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsK0NBQW9EO0FBQ3BELHlEQUF1RTtBQUN2RSxpREFBdUM7QUFRdkM7Ozs7OztHQU1HO0FBQ0gsU0FBd0IsUUFBUSxDQUFDLEtBQW9CO0lBQ2pELE1BQU0sQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLEdBQUcsZ0JBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUMzQyxNQUFNLENBQUMsYUFBYSxFQUFFLGdCQUFnQixDQUFDLEdBQUcsZ0JBQVEsQ0FBQyxFQUFFLEtBQUssRUFBRSx5QkFBYSxDQUFDLE9BQU8sRUFBb0IsQ0FBQyxDQUFBO0lBQ3RHLE1BQU0sTUFBTSxHQUFHLGtCQUFVLENBQUMscUJBQU0sQ0FBQyxDQUFBO0lBQ2pDLE9BQU8sQ0FDSDtRQUNLLGFBQWEsSUFBSSw4QkFBQyxtQkFBUyxvQkFBSyxhQUFhLElBQUUsS0FBSyxFQUFFLEVBQUUsR0FBRyxLQUFLLENBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxFQUFFLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUyxJQUFJO1FBQ3hJLHVDQUFLLEdBQUcsRUFBRSxLQUFLLENBQUMsR0FBRyxFQUNmLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUNoRCxjQUFjLEVBQUUsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFDM0QsWUFBWSxFQUFFLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxHQUFHLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVMsRUFDNUcsTUFBTSxFQUFFLEdBQUcsRUFBRTtnQkFDVCxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQTtnQkFDdEIsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ25CLENBQUMsRUFDRCxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQ2YsT0FBTyxFQUFFLEdBQUcsRUFBRTtnQkFDVixTQUFTLENBQUMsS0FBSyxDQUFDLENBQUE7Z0JBQ2hCLGdCQUFnQixDQUFDLEVBQUUsS0FBSyxFQUFFLHlCQUFhLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQTtZQUNwRCxDQUFDLEdBQUksQ0FDVixDQUNOLENBQUE7QUFDTCxDQUFDO0FBdEJELDJCQXNCQyJ9