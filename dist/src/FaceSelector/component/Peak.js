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
const React = __importStar(require("react"));
require("../../facepack.css");
const Peak = React.memo((props) => {
    return (React.createElement("figure", { className: "fp-border-shadow " + (props.className ? props.className : '') },
        React.createElement("img", { src: props.imgUrl, style: { ...props.style, height: "200px" } }),
        React.createElement("hr", { style: { marginTop: "0", marginBottom: "0" } }),
        React.createElement("figcaption", { style: { textAlign: "center", marginBottom: "3px", backgroundColor: '#FFFFFF' } }, props.imgCaption)));
});
exports.default = Peak;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGVhay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9GYWNlU2VsZWN0b3IvY29tcG9uZW50L1BlYWsudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUUvQiw4QkFBMkI7QUFPM0IsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQWdCLEVBQUUsRUFBRTtJQUN6QyxPQUFPLENBQUMsZ0NBQVEsU0FBUyxFQUFFLG1CQUFtQixHQUFHLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQUUsNkJBQUssR0FBRyxFQUFFLEtBQUssQ0FBQyxNQUFNLEVBQzdHLEtBQUssRUFBRSxFQUFFLEdBQUcsS0FBSyxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQzVDO1FBQ0UsNEJBQUksS0FBSyxFQUFFLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxZQUFZLEVBQUUsR0FBRyxFQUFFLEdBQUk7UUFDcEQsb0NBQVksS0FBSyxFQUFFLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsSUFBRyxLQUFLLENBQUMsVUFBVSxDQUFjLENBQ3ZILENBQUMsQ0FBQztBQUNmLENBQUMsQ0FBQyxDQUFBO0FBQ0Ysa0JBQWUsSUFBSSxDQUFBIn0=