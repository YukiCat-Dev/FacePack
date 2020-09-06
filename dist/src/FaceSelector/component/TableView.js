"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const FaceView_1 = __importDefault(require("./FaceView"));
class TableView extends react_1.default.Component {
    handleImageClick(e, pos) {
        this.props.onImageSelected(pos);
    }
    render() {
        const facePackId = this.props.facePackage.id;
        const faces = this.props.facePackage.faces.map((value, index) => {
            return (react_1.default.createElement("td", { key: facePackId + '_' + index, style: { textAlign: "center", border: "1pt solid" } },
                react_1.default.createElement(FaceView_1.default, { src: value.url, alt: value.id, face_pos: index, style: { width: "40px", height: "40px" }, onClick: this.handleImageClick.bind(this) })));
        });
        const colCount = this.props.colCount;
        const rowCount = Math.ceil((faces.length / colCount));
        const rows = [];
        for (let i = 0; i < rowCount; i++) {
            rows.push((react_1.default.createElement("tr", { key: i }, faces.slice(i * colCount, i * colCount + colCount))));
        }
        return (react_1.default.createElement("div", { style: { maxHeight: "20vh", overflow: "auto" } },
            react_1.default.createElement("table", null,
                react_1.default.createElement("tbody", null, rows))));
    }
}
exports.default = TableView;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFibGVWaWV3LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL0ZhY2VTZWxlY3Rvci9jb21wb25lbnQvVGFibGVWaWV3LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGtEQUEwQjtBQUUxQiwwREFBaUM7QUFxQmpDLE1BQXFCLFNBQVUsU0FBUSxlQUFLLENBQUMsU0FBeUI7SUFDbEUsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLEdBQVc7UUFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDbkMsQ0FBQztJQUNELE1BQU07UUFDRixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUE7UUFDNUMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUM1RCxPQUFPLENBQUMsc0NBQUksR0FBRyxFQUFFLFVBQVUsR0FBRyxHQUFHLEdBQUcsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtnQkFBRSw4QkFBQyxrQkFBUSxJQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBSyxDQUFDLENBQUE7UUFDMVAsQ0FBQyxDQUFDLENBQUE7UUFDRixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQTtRQUNwQyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFBO1FBQ3JELE1BQU0sSUFBSSxHQUF1QixFQUFFLENBQUE7UUFDbkMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsc0NBQUksR0FBRyxFQUFFLENBQUMsSUFBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxRQUFRLEVBQUUsQ0FBQyxHQUFHLFFBQVEsR0FBRyxRQUFRLENBQUMsQ0FBTSxDQUFDLENBQUMsQ0FBQTtTQUNyRjtRQUNELE9BQU8sQ0FBQyx1Q0FBSyxLQUFLLEVBQUUsRUFBQyxTQUFTLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxNQUFNLEVBQUU7WUFBRTtnQkFDckQsNkNBQ0ssSUFBSSxDQUNELENBQ0osQ0FBTSxDQUFDLENBQUM7SUFDcEIsQ0FBQztDQUNKO0FBckJELDRCQXFCQyJ9