"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainHeight = void 0;
const react_jss_1 = require("react-jss");
/**
 * 定义主体高度
 */
const mainHeight = 325;
exports.mainHeight = mainHeight;
const useGenericStyle = react_jss_1.createUseStyles({
    borderShadow: {
        boxShadow: '2px 2px 15px #888888',
        border: '0.5px #888888 solid',
        zIndex: 999,
    },
    bgWhiteBlur: {
        backgroundColor: 'rgba(255,255,255,0.6)',
        backdropFilter: 'blur(3px)'
    }, main: {
        padding: '2px', width: 200, height: mainHeight
    }
});
exports.default = useGenericStyle;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvRmFjZVNlbGVjdG9yL3N0eWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlDQUE0QztBQUM1Qzs7R0FFRztBQUNILE1BQU0sVUFBVSxHQUFDLEdBQUcsQ0FBQTtBQWVaLGdDQUFVO0FBZGxCLE1BQU0sZUFBZSxHQUFHLDJCQUFlLENBQUM7SUFDcEMsWUFBWSxFQUFFO1FBQ1YsU0FBUyxFQUFFLHNCQUFzQjtRQUNqQyxNQUFNLEVBQUUscUJBQXFCO1FBQzdCLE1BQU0sRUFBRSxHQUFHO0tBQ2Q7SUFDRCxXQUFXLEVBQUM7UUFDUixlQUFlLEVBQUMsdUJBQXVCO1FBQ3ZDLGNBQWMsRUFBQyxXQUFXO0tBQzdCLEVBQUMsSUFBSSxFQUFDO1FBQ0gsT0FBTyxFQUFFLEtBQUssRUFBQyxLQUFLLEVBQUMsR0FBRyxFQUFDLE1BQU0sRUFBQyxVQUFVO0tBQzdDO0NBQ0osQ0FBQyxDQUFBO0FBQ0Ysa0JBQWUsZUFBZSxDQUFBIn0=