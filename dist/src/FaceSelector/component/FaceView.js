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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
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
    const handleError = react_1.useCallback(() => {
        setLoaded(false);
        setShowIndicator({ level: Indicator_1.IndicateLevel.ERROR });
    }, []);
    const handleLoad = react_1.useCallback(() => {
        setShowIndicator(null);
        setLoaded(true);
    }, []);
    return (jsx_runtime_1.jsxs(jsx_runtime_1.Fragment, { children: [showIndicator && jsx_runtime_1.jsx(Indicator_1.default, Object.assign({}, showIndicator, { style: { ...props.style, transition: "opacity 2s ease" }, className: props.className }), void 0),
            jsx_runtime_1.jsx("img", { src: props.src, onClick: (e) => props.onClick(e, props.face_pos), onPointerEnter: () => global.showPeak(props.src, props.alt), onPointerOut: () => global.hidePeak(), alt: props.alt, style: { ...props.style }, className: props.className, onLoad: handleLoad, hidden: !loaded, onError: handleError }, void 0)] }, void 0));
}
exports.default = FaceView;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmFjZVZpZXcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvRmFjZVNlbGVjdG9yL2NvbXBvbmVudC9GYWNlVmlldy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLGlDQUFpRTtBQUNqRSx5REFBdUU7QUFDdkUsaURBQXVDO0FBUXZDOzs7Ozs7R0FNRztBQUNILFNBQXdCLFFBQVEsQ0FBQyxLQUFvQjtJQUNqRCxNQUFNLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxHQUFHLGdCQUFRLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDM0MsTUFBTSxDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLGdCQUFRLENBQUMsRUFBRSxLQUFLLEVBQUUseUJBQWEsQ0FBQyxPQUFPLEVBQW9CLENBQUMsQ0FBQTtJQUN0RyxNQUFNLE1BQU0sR0FBRyxrQkFBVSxDQUFDLHFCQUFNLENBQUMsQ0FBQTtJQUNqQyxNQUFNLFdBQVcsR0FBRyxtQkFBVyxDQUFDLEdBQUcsRUFBRTtRQUNqQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDaEIsZ0JBQWdCLENBQUMsRUFBRSxLQUFLLEVBQUUseUJBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFBO0lBQ3BELENBQUMsRUFBQyxFQUFFLENBQUMsQ0FBQTtJQUNMLE1BQU0sVUFBVSxHQUFHLG1CQUFXLENBQUMsR0FBRyxFQUFFO1FBQ2hDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3RCLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNuQixDQUFDLEVBQUMsRUFBRSxDQUFDLENBQUE7SUFDTCxPQUFPLENBQ0gsd0RBQ0ssYUFBYSxJQUFJLGtCQUFDLG1CQUFTLG9CQUFLLGFBQWEsSUFBRSxLQUFLLEVBQUUsRUFBRSxHQUFHLEtBQUssQ0FBQyxLQUFLLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLEVBQUUsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTLFlBQUk7WUFDeEksMkJBQUssR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFHLEVBQ2YsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQ2hELGNBQWMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUMzRCxZQUFZLEVBQUUsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFLEdBQUcsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUyxFQUM1RyxNQUFNLEVBQUUsVUFBVSxFQUNsQixNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQ2YsT0FBTyxFQUFFLFdBQVcsV0FBSSxZQUM3QixDQUNOLENBQUE7QUFDTCxDQUFDO0FBeEJELDJCQXdCQyJ9