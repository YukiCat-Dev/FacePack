"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FaceSelectorDeployer_1 = __importDefault(require("./FaceSelector/FaceSelectorDeployer"));
const FaceDisplay_1 = __importDefault(require("./FaceDisplay/FaceDisplay"));
const DefaultFacePacksImporter_1 = __importDefault(require("./DefaultFacePacksImporter"));
(async () => {
    const commentArea = document.getElementById('comment');
    const facePacks = DefaultFacePacksImporter_1.default;
    new FaceSelectorDeployer_1.default({
        popcorn: document.getElementById('show-fs'), tooltip: document.getElementById('fs-c'), facePackages: facePacks, onFaceSelected: (pack, face) => {
            commentArea.value += `:${pack.id}.${face.id}:`;
        }, style: { backgroundColor: "#FFFFFF", padding: '2px', borderWidth: '3px' }
    }).render();
    let display = new FaceDisplay_1.default(facePacks);
    document.getElementById('comment')
        .addEventListener('change', (e) => {
        document.getElementById('display').innerText = e.target.value;
        display.render(document.getElementById('display'));
    });
    display.render(document.getElementById('display'));
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2ZWxvcG1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZGV2ZWxvcG1lbnQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsK0ZBQXNFO0FBQ3RFLDRFQUFtRDtBQUNuRCwwRkFBd0Q7QUFDeEQsQ0FBQyxLQUFLLElBQUksRUFBRTtJQUNSLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUF3QixDQUFBO0lBQzdFLE1BQU0sU0FBUyxHQUFHLGtDQUFlLENBQUE7SUFDakMsSUFBSSw4QkFBb0IsQ0FBQztRQUNyQixPQUFPLEVBQUUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRyxDQUFDLElBQUksRUFBQyxJQUFJLEVBQUUsRUFBRTtZQUMzSSxXQUFXLENBQUMsS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUE7UUFDbEQsQ0FBQyxFQUFDLEtBQUssRUFBQyxFQUFDLGVBQWUsRUFBQyxTQUFTLEVBQUMsT0FBTyxFQUFDLEtBQUssRUFBQyxXQUFXLEVBQUMsS0FBSyxFQUFDO0tBQ3RFLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQTtJQUVYLElBQUksT0FBTyxHQUFHLElBQUkscUJBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUN4QyxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQztTQUM3QixnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtRQUM5QixRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQTtRQUM3RCxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQTtJQUV0RCxDQUFDLENBQUMsQ0FBQTtJQUNOLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFBO0FBQ3RELENBQUMsQ0FBQyxFQUFFLENBQUEifQ==