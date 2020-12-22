"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Tab_1 = __importDefault(require("./Tab"));
const react_jss_1 = require("react-jss");
const clsx_1 = __importDefault(require("clsx"));
const style_1 = __importDefault(require("../style"));
const useStyles = react_jss_1.createUseStyles({
    root: {
        width: "100%", border: 0, fontWeight: 'bold'
    }
});
/**
 * 选项卡的一行标签（一行Tab
 *
 * @author KotoriK
 */
const Tabs = react_1.forwardRef(function Tabs(props, ref) {
    return (jsx_runtime_1.jsx("select", Object.assign({ ref: ref, className: clsx_1.default(useStyles().root, style_1.default().bgWhiteBlur), onChange: (e) => props.onSelected(e.target.value) }, { children: react_1.useMemo(() => props.facePackages.map((value, index) => jsx_runtime_1.jsx(Tab_1.default, { pos: index, name: value.name, selected: index === props.selectedPos }, value.id)), [props.facePackages]) }), void 0));
});
exports.default = Tabs;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFicy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9GYWNlU2VsZWN0b3IvY29tcG9uZW50L1RhYnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGlDQUFvRDtBQUNwRCxnREFBd0I7QUFFeEIseUNBQTRDO0FBQzVDLGdEQUF3QjtBQUN4QixxREFBdUM7QUFNdkMsTUFBTSxTQUFTLEdBQUcsMkJBQWUsQ0FBQztJQUM5QixJQUFJLEVBQUU7UUFDRixLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU07S0FDL0M7Q0FDSixDQUFDLENBQUE7QUFDRjs7OztHQUlHO0FBQ0gsTUFBTSxJQUFJLEdBQ04sa0JBQVUsQ0FDTixTQUFTLElBQUksQ0FBQyxLQUFLLEVBQUUsR0FBRztJQUNwQixPQUFPLENBQ0gsNENBQVEsR0FBRyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsY0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksRUFBRSxlQUFlLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFZLENBQUMsZ0JBQ3ZJLGVBQU8sQ0FBQyxHQUFFLEVBQUUsQ0FBQSxLQUFLLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLGtCQUFDLGFBQUcsSUFBZ0IsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksRUFDbEcsUUFBUSxFQUFFLEtBQUssS0FBSyxLQUFLLENBQUMsV0FBVyxJQUR1QixLQUFLLENBQUMsRUFBRSxDQUMzQixDQUM1QyxFQUFDLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLFlBQ2xCLENBQ1osQ0FBQTtBQUNMLENBQUMsQ0FBQyxDQUFBO0FBRVYsa0JBQWUsSUFBSSxDQUFBIn0=