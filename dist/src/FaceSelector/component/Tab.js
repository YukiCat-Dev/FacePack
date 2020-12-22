"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
/**
 *选项卡的单个标签
 *
 * @author KotoriK
 * @export
 * @param {TabProps} props
 * @returns
 */
function Tab(props) {
    return (jsx_runtime_1.jsx("option", Object.assign({ selected: props.selected, style: { ...props.style }, className: props.className, value: props.pos }, { children: props.name }), void 0));
}
exports.default = Tab;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFiLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL0ZhY2VTZWxlY3Rvci9jb21wb25lbnQvVGFiLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFPQTs7Ozs7OztHQU9HO0FBQ0gsU0FBd0IsR0FBRyxDQUFDLEtBQWU7SUFDdkMsT0FBTyxDQUNILDRDQUFRLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxFQUFFLEdBQUcsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUyxFQUNuRixLQUFLLEVBQUUsS0FBSyxDQUFDLEdBQUcsZ0JBQ2YsS0FBSyxDQUFDLElBQUksWUFDTixDQUNaLENBQUE7QUFDTCxDQUFDO0FBUEQsc0JBT0MifQ==