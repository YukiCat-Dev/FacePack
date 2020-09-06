"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Tab_1 = __importDefault(require("./Tab"));
/**
 * 选项卡的一行标签（一行Tab
 *
 * @author KotoriK
 */
const Tabs = react_1.default.memo((props) => {
    return (react_1.default.createElement("div", null, props.facePackages.map((value, index) => {
        return (react_1.default.createElement(Tab_1.default, { key: value.id, pos: index, name: value.name, selected: index === props.selectedPos, onClick: (id) => props.onSelected(id) }));
    })));
});
exports.default = Tabs;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFicy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9GYWNlU2VsZWN0b3IvY29tcG9uZW50L1RhYnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0RBQTBCO0FBQzFCLGdEQUF3QjtBQVF4Qjs7OztHQUlHO0FBQ0gsTUFBTSxJQUFJLEdBQUMsZUFBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQWUsRUFBQyxFQUFFO0lBQ3JDLE9BQU8sQ0FBQywyQ0FDSCxLQUFLLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBQyxLQUFLLEVBQUUsRUFBRTtRQUNwQyxPQUFPLENBQUMsOEJBQUMsYUFBRyxJQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssS0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQVUsRUFBQyxFQUFFLENBQUEsS0FBSyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDbEosQ0FBQyxDQUFDLENBQ0EsQ0FBQyxDQUFBO0FBQ1gsQ0FBQyxDQUFDLENBQUE7QUFDRixrQkFBZSxJQUFJLENBQUEifQ==