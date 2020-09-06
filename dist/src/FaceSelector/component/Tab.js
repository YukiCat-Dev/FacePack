"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
/**
 *选项卡的单个标签
 *
 * @author KotoriK
 * @export
 * @param {TabProps} props
 * @returns
 */
function Tab(props) {
    return (react_1.default.createElement("div", { style: { borderRight: "1pt solid", backgroundColor: props.selected ? '#1559ed' : undefined, color: props.selected ? 'white' : undefined, ...props.style, }, className: props.className, onClick: () => { props.onClick(props.pos); } }, props.name));
}
exports.default = Tab;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFiLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL0ZhY2VTZWxlY3Rvci9jb21wb25lbnQvVGFiLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGtEQUEwQjtBQVMxQjs7Ozs7OztHQU9HO0FBQ0gsU0FBd0IsR0FBRyxDQUFDLEtBQWM7SUFDdEMsT0FBTyxDQUNILHVDQUFLLEtBQUssRUFBRSxFQUFDLFdBQVcsRUFBQyxXQUFXLEVBQUMsZUFBZSxFQUFDLEtBQUssQ0FBQyxRQUFRLENBQUEsQ0FBQyxDQUFBLFNBQVMsQ0FBQSxDQUFDLENBQUEsU0FBUyxFQUFDLEtBQUssRUFBQyxLQUFLLENBQUMsUUFBUSxDQUFBLENBQUMsQ0FBQSxPQUFPLENBQUEsQ0FBQyxDQUFBLFNBQVMsRUFBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLEdBQUUsRUFDL0ksU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTLEVBQzFCLE9BQU8sRUFBRSxHQUFFLEVBQUUsR0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQSxDQUFBLENBQUMsSUFBRyxLQUFLLENBQUMsSUFBSSxDQUFPLENBQzlELENBQUE7QUFDTCxDQUFDO0FBTkQsc0JBTUMifQ==