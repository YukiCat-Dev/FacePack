"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_jss_1 = require("react-jss");
const clsx_1 = __importDefault(require("clsx"));
const style_1 = __importDefault(require("../style"));
const useStyles = react_jss_1.createUseStyles({
    figCaption: {
        textAlign: "center", backgroundColor: 'rgba(255,255,255,0.65)'
    },
    hr: {
        marginTop: 0, marginBottom: 0
    }
});
const Peak = react_1.forwardRef((props, ref) => {
    const classes = useStyles(), generic = style_1.default();
    return (jsx_runtime_1.jsxs("figure", Object.assign({ style: { display: props.show ? 'block' : 'none', ...props.style }, className: clsx_1.default(generic.borderShadow, props.className, generic.bgWhiteBlur), ref: ref }, { children: [jsx_runtime_1.jsx("img", { src: props.imgUrl, height: 200 }, void 0),
            jsx_runtime_1.jsx("hr", { className: classes.hr }, void 0),
            jsx_runtime_1.jsx("figcaption", Object.assign({ className: clsx_1.default(classes.figCaption, generic.bgWhiteBlur) }, { children: props.imgCaption }), void 0)] }), void 0));
});
exports.default = Peak;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGVhay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9GYWNlU2VsZWN0b3IvY29tcG9uZW50L1BlYWsudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGlDQUEwQztBQUUxQyx5Q0FBMkM7QUFDM0MsZ0RBQXVCO0FBQ3ZCLHFEQUF1QztBQU92QyxNQUFNLFNBQVMsR0FBRywyQkFBZSxDQUFDO0lBQzlCLFVBQVUsRUFBRTtRQUNSLFNBQVMsRUFBRSxRQUFRLEVBQUcsZUFBZSxFQUFFLHdCQUF3QjtLQUNsRTtJQUNELEVBQUUsRUFBRTtRQUNBLFNBQVMsRUFBRSxDQUFDLEVBQUUsWUFBWSxFQUFFLENBQUM7S0FDaEM7Q0FDSixDQUFDLENBQUE7QUFDRixNQUFNLElBQUksR0FBRyxrQkFBVSxDQUE0QixDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUM5RCxNQUFNLE9BQU8sR0FBRyxTQUFTLEVBQUUsRUFBRSxPQUFPLEdBQUcsZUFBZSxFQUFFLENBQUE7SUFDeEQsT0FBTyxDQUFDLDZDQUFRLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFDN0UsU0FBUyxFQUFFLGNBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLGlCQUNyRiwyQkFBSyxHQUFHLEVBQUUsS0FBSyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxXQUFJO1lBQ3ZDLDBCQUFJLFNBQVMsRUFBRSxPQUFPLENBQUMsRUFBRSxXQUFJO1lBQzdCLGdEQUFZLFNBQVMsRUFBRSxjQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBQyxPQUFPLENBQUMsV0FBVyxDQUFDLGdCQUFHLEtBQUssQ0FBQyxVQUFVLFlBQWMsYUFDL0YsQ0FBQyxDQUFDO0FBQ2YsQ0FBQyxDQUFDLENBQUE7QUFDRixrQkFBZSxJQUFJLENBQUEifQ==