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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericStyle = exports.Global = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const TableView_1 = __importDefault(require("./TableView"));
const Tabs_1 = __importDefault(require("./Tabs"));
const Peak_1 = __importDefault(require("./Peak"));
const style_1 = __importStar(require("../style"));
const clsx_1 = __importDefault(require("clsx"));
const react_popper_1 = require("react-popper");
const Global = react_1.createContext({});
exports.Global = Global;
/**
 *表情包选择器的完整主体
 *
 * @author KotoriK
 * @export
 * @param { children }
 * @returns
 */
function GenericStyle({ children }) {
    return children(style_1.default());
}
exports.GenericStyle = GenericStyle;
function FaceSelector({ peakPopperOptions, facePacks, style, className, colCount, onFaceSelected, handleHide, loadContent }) {
    const [_nowPackagePos, setPos] = react_1.useState(0);
    const [isShowPeak, setShowPeak] = react_1.useState(false);
    const [peak_url, set_url] = react_1.useState();
    const [peak_caption, set_caption] = react_1.useState();
    const [main, setMain] = react_1.useState();
    const [peak, setPeak] = react_1.useState();
    const head = react_1.useRef();
    const body = react_1.useRef();
    const { styles, update } = react_popper_1.usePopper(main, peak, peakPopperOptions);
    const handleFaceSelected = react_1.useCallback((face_pos) => {
        const nowPackage = facePacks[_nowPackagePos];
        onFaceSelected(nowPackage, nowPackage.faces[face_pos]);
        handleHide();
    }, [handleHide, onFaceSelected, facePacks, _nowPackagePos]);
    react_1.useEffect(() => {
        if (loadContent)
            body.current.style.height = style_1.mainHeight - head.current.clientHeight + 'px';
    }, [loadContent]);
    let nowPackagePos = _nowPackagePos;
    const maxPos = facePacks.length - 1;
    if (nowPackagePos > maxPos)
        nowPackagePos = maxPos; //防止prop发生改动带来越界
    return (jsx_runtime_1.jsxs(jsx_runtime_1.Fragment, { children: [jsx_runtime_1.jsx(GenericStyle, { children: classes => (jsx_runtime_1.jsxs("div", Object.assign({ ref: setMain, style: { ...style }, className: clsx_1.default(classes.borderShadow, className, classes.bgWhiteBlur, classes.main) }, { children: [jsx_runtime_1.jsx(Tabs_1.default, { facePackages: facePacks, onSelected: (pos) => setPos(pos), selectedPos: nowPackagePos, ref: head }, void 0),
                        jsx_runtime_1.jsx(Global.Provider, Object.assign({ value: react_1.useMemo(() => {
                                return {
                                    showPeak: (imgUrl, imgCaption) => {
                                        set_url(imgUrl);
                                        set_caption(imgCaption);
                                        setShowPeak(true);
                                        if (update)
                                            update();
                                    },
                                    hidePeak: () => setShowPeak(false)
                                };
                            }, [set_url, set_caption, setShowPeak, update]) }, { children: loadContent ? jsx_runtime_1.jsx(TableView_1.default, { facePackage: facePacks[nowPackagePos], colCount: colCount, onImageSelected: handleFaceSelected, ref: body }, void 0) : null }), void 0)] }), void 0)) }, void 0),
            jsx_runtime_1.jsx(Peak_1.default, { imgCaption: peak_caption, imgUrl: peak_url, ref: setPeak, show: isShowPeak, style: styles.popper }, void 0)] }, void 0));
}
exports.default = FaceSelector;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmFjZVNlbGVjdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL0ZhY2VTZWxlY3Rvci9jb21wb25lbnQvRmFjZVNlbGVjdG9yLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlDQUErRjtBQUMvRiw0REFBb0M7QUFFcEMsa0RBQTBCO0FBQzFCLGtEQUEwQjtBQUcxQixrREFBdUQ7QUFDdkQsZ0RBQXdCO0FBQ3hCLCtDQUF3QztBQXlDeEMsTUFBTSxNQUFNLEdBQXNDLHFCQUFhLENBQUMsRUFBd0IsQ0FBQyxDQUFBO0FBQ2hGLHdCQUFNO0FBQ2Y7Ozs7Ozs7R0FPRztBQUNILFNBQWdCLFlBQVksQ0FBQyxFQUFFLFFBQVEsRUFBMEc7SUFDN0ksT0FBTyxRQUFRLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQTtBQUN0QyxDQUFDO0FBRkQsb0NBRUM7QUFDRCxTQUF3QixZQUFZLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFLFVBQVUsRUFBQyxXQUFXLEVBQXFCO0lBQ3hKLE1BQU0sQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDLEdBQUcsZ0JBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUM1QyxNQUFNLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxHQUFHLGdCQUFRLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDakQsTUFBTSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsR0FBRyxnQkFBUSxFQUFVLENBQUE7SUFDOUMsTUFBTSxDQUFDLFlBQVksRUFBRSxXQUFXLENBQUMsR0FBRyxnQkFBUSxFQUFVLENBQUE7SUFDdEQsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxnQkFBUSxFQUFrQixDQUFBO0lBQ2xELE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsZ0JB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