"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const FaceView_1 = __importDefault(require("./FaceView"));
const react_jss_1 = require("react-jss");
const useStyles = react_jss_1.createUseStyles({
    td: {
        textAlign: "center", border: "1pt solid #888", padding: "1.5px"
    },
    pic: { width: "40px", height: "40px" },
    wrap: {
        overflowY: "auto", overflowX: 'hidden'
    }
});
const TableView = react_1.forwardRef(function TableView({ facePackage, onImageSelected, colCount }, ref) {
    const classes = useStyles();
    const facePackId = facePackage.id;
    const handleImageClick = react_1.useCallback((e, pos) => {
        onImageSelected(pos);
    }, [onImageSelected]);
    const faces = react_1.useMemo(() => facePackage.faces.map((value, index) => jsx_runtime_1.jsx("td", Object.assign({ className: classes.td }, { children: jsx_runtime_1.jsx(FaceView_1.default, { src: value.url, alt: value.id, face_pos: index, className: classes.pic, onClick: handleImageClick }, void 0) }), facePackId + index)), [facePackage]);
    const rows = react_1.useMemo(() => {
        const rowCount = Math.ceil((faces.length / colCount));
        const array = new Array(rowCount);
        for (let i = 0; i < rowCount; i++) {
            const start = i * colCount;
            array[i] = jsx_runtime_1.jsx("tr", { children: faces.slice(start, start + colCount) }, facePackId + 'r' + i);
        }
        return array;
    }, [faces, colCount]);
    return jsx_runtime_1.jsx("div", Object.assign({ className: classes.wrap, ref: ref }, { children: jsx_runtime_1.jsx("table", { children: jsx_runtime_1.jsx("tbody", { children: rows }, void 0) }, void 0) }), void 0);
});
exports.default = TableView;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFibGVWaWV3LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL0ZhY2VTZWxlY3Rvci9jb21wb25lbnQvVGFibGVWaWV3LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxpQ0FBZ0U7QUFFaEUsMERBQWlDO0FBRWpDLHlDQUE0QztBQW9CNUMsTUFBTSxTQUFTLEdBQUcsMkJBQWUsQ0FBQztJQUM5QixFQUFFLEVBQUU7UUFDQSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxPQUFPLEVBQUUsT0FBTztLQUNsRTtJQUNELEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRTtJQUN0QyxJQUFJLEVBQUU7UUFDRixTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxRQUFRO0tBQ3pDO0NBQ0osQ0FBQyxDQUFBO0FBQ0YsTUFBTSxTQUFTLEdBQUcsa0JBQVUsQ0FDeEIsU0FBUyxTQUFTLENBQUMsRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxFQUFFLEdBQUc7SUFDOUQsTUFBTSxPQUFPLEdBQUcsU0FBUyxFQUFFLENBQUE7SUFDM0IsTUFBTSxVQUFVLEdBQUcsV0FBVyxDQUFDLEVBQUUsQ0FBQTtJQUNqQyxNQUFNLGdCQUFnQixHQUFHLG1CQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBVyxFQUFFLEVBQUU7UUFDcEQsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ3hCLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUE7SUFDckIsTUFBTSxLQUFLLEdBQUcsZUFBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQ25FLHdDQUE2QixTQUFTLEVBQUUsT0FBTyxDQUFDLEVBQUUsZ0JBQzlDLGtCQUFDLGtCQUFRLElBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLFdBQUksS0FEMUcsVUFBVSxHQUFHLEtBQUssQ0FFdEIsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQTtJQUN0QixNQUFNLElBQUksR0FBdUIsZUFBTyxDQUFDLEdBQUcsRUFBRTtRQUMxQyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFBO1FBQ3JELE1BQU0sS0FBSyxHQUFHLElBQUksS0FBSyxDQUFjLFFBQVEsQ0FBQyxDQUFBO1FBQzlDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDL0IsTUFBTSxLQUFLLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQTtZQUMxQixLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsb0NBQTRCLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssR0FBRyxRQUFRLENBQUMsSUFBdkQsVUFBVSxHQUFDLEdBQUcsR0FBQyxDQUFDLENBQTZDLENBQUE7U0FDcEY7UUFDRCxPQUFPLEtBQUssQ0FBQTtJQUNoQixDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQTtJQUNyQixPQUFPLHlDQUFLLFNBQVMsRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLGdCQUN6Qyx1Q0FDSSx1Q0FDSyxJQUFJLFdBQ0QsV0FDSixZQUNOLENBQUM7QUFDWCxDQUFDLENBQ0osQ0FBQTtBQUNELGtCQUFlLFNBQVMsQ0FBQSJ9