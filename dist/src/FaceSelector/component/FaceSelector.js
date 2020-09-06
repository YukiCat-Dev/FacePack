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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Global = void 0;
const React = __importStar(require("react"));
const TableView_1 = __importDefault(require("./TableView"));
const Tabs_1 = __importDefault(require("./Tabs"));
const Peak_1 = __importDefault(require("./Peak"));
const core_1 = require("@popperjs/core");
require("../../facepack.css");
const react_dom_1 = __importDefault(require("react-dom"));
const Global = React.createContext({});
exports.Global = Global;
/**
 * 表情包选择器的完整主体
 *
 * @author KotoriK
 * @export
 * @class FaceSelector
 * @extends {React.Component}
 */
class FaceSelector extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            nowPackagePos: 0
        };
    }
    handleTabSelectionChange(newPos) {
        this.setState({ nowPackagePos: newPos });
    }
    handleFaceSelected(face_pos) {
        const nowPackage = this.props.facePacks[this.state.nowPackagePos];
        this.props.onFaceSelected(nowPackage, nowPackage.faces[face_pos]);
        this.props.handleHide();
    }
    createPeakContainer() {
        this.peakContainer = document.createElement('div');
        this.peakContainer.setAttribute('id', 'peak-container');
        this.hidePeak();
        this.props.refRoot.append(this.peakContainer);
        this.peakPopper = core_1.createPopper(this.props.refRoot, this.peakContainer, this.props.peakPopperOptions);
    }
    removePeakContainer() {
        Promise.resolve().then(() => __importStar(require('react-dom'))).then((ReactDOM) => {
            ReactDOM.unmountComponentAtNode(this.peakContainer);
            this.peakPopper.destroy();
            this.peakPopper = undefined;
            document.removeChild(this.peakContainer);
            this.peakContainer = undefined;
        });
    }
    renderPeak(imgUrl, imgCaption) {
        react_dom_1.default.render(React.createElement(Peak_1.default, { imgUrl: imgUrl, imgCaption: imgCaption }), this.peakContainer);
    }
    hidePeak() {
        this.peakContainer.setAttribute("hidden", "hidden");
    }
    showPeak() {
        try {
            this.peakContainer.removeAttribute("hidden");
        }
        catch (e) {
            console.warn(e);
        }
    }
    componentDidMount() {
        this.createPeakContainer();
    }
    componentWillUnmount() {
        this.removePeakContainer();
    }
    render() {
        let nowPackagePos = this.state.nowPackagePos;
        const maxPos = this.props.facePacks.length - 1;
        if (nowPackagePos > maxPos)
            nowPackagePos = maxPos; //防止prop发生改动带来越界
        return (React.createElement("div", { style: { ...this.props.style }, className: 'fp-border-shadow' + (this.props.className ? this.props.className : '') },
            React.createElement(Tabs_1.default, { facePackages: this.props.facePacks, onSelected: (pos) => this.handleTabSelectionChange(pos), selectedPos: this.state.nowPackagePos }),
            React.createElement(Global.Provider, { value: {
                    showPeak: (imgUrl, imgCaption) => {
                        this.renderPeak(imgUrl, imgCaption);
                        this.showPeak();
                    },
                    hidePeak: this.hidePeak.bind(this)
                } },
                React.createElement(TableView_1.default, { facePackage: this.props.facePacks[nowPackagePos], colCount: this.props.colCount, onImageSelected: this.handleFaceSelected.bind(this) }))));
    }
}
exports.default = FaceSelector;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmFjZVNlbGVjdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL0ZhY2VTZWxlY3Rvci9jb21wb25lbnQvRmFjZVNlbGVjdG9yLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBQy9CLDREQUFvQztBQUVwQyxrREFBMEI7QUFDMUIsa0RBQTBCO0FBQzFCLHlDQUErRTtBQUUvRSw4QkFBMkI7QUFDM0IsMERBQWlDO0FBc0NqQyxNQUFNLE1BQU0sR0FBc0MsS0FBSyxDQUFDLGFBQWEsQ0FBQyxFQUF3QixDQUFDLENBQUE7QUFDdEYsd0JBQU07QUFDZjs7Ozs7OztHQU9HO0FBQ0gsTUFBcUIsWUFBYSxTQUFRLEtBQUssQ0FBQyxTQUErQztJQUEvRjs7UUFDSSxVQUFLLEdBQUc7WUFDSixhQUFhLEVBQUUsQ0FBQztTQUNuQixDQUFBO0lBK0RMLENBQUM7SUE1REcsd0JBQXdCLENBQUMsTUFBYztRQUNuQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUE7SUFDNUMsQ0FBQztJQUNELGtCQUFrQixDQUFDLFFBQWdCO1FBQy9CLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUE7UUFDakUsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQTtRQUNqRSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFBO0lBQzNCLENBQUM7SUFDRCxtQkFBbUI7UUFDZixJQUFJLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDbEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMs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