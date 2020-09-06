"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**部署样板 */
const FacePacksImporter_1 = require("./FacePacksImporter");
const FaceSelectorDeployer_1 = __importDefault(require("./FaceSelector/FaceSelectorDeployer"));
(async () => {
    const commentArea = document.getElementById('comment');
    /*     const facePacks = DefaultFacePack
     */ new FaceSelectorDeployer_1.default({
        popcorn: document.getElementById('show-fs'),
        tooltip: document.getElementById('fs-c'),
        facePackages: await FacePacksImporter_1.importExternalFacePacks('https://cdn.jsdelivr.net/gh/YukiCat-Dev/yukicat.facepack/facepacks.json'),
        onFaceSelected: (pack, face) => {
            commentArea.value += `:${pack.id}.${face.id}:`;
        }, popperOptions: { placement: 'top' }, peakPopperOptions: {
            placement: "right-start", modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset: [10, 20],
                    },
                },
            ],
        }, style: { backgroundColor: "#FFFFFF", padding: '2px', borderWidth: '3px' }
    }).render().hide();
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwbG95LXNlbGVjdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2RlcGxveS1zZWxlY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLFVBQVU7QUFDViwyREFBNkQ7QUFDN0QsK0ZBQXNFO0FBQ3RFLENBQUMsS0FBSyxJQUFJLEVBQUU7SUFDUixNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBd0IsQ0FBQTtJQUNqRjtPQUNHLENBQUcsSUFBSSw4QkFBb0IsQ0FBQztRQUN2QixPQUFPLEVBQUUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUM7UUFDM0MsT0FBTyxFQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDO1FBQ3hDLFlBQVksRUFBRSxNQUFNLDJDQUF1QixDQUFDLHlFQUF5RSxDQUFDO1FBQ3RILGNBQWMsRUFDVixDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRTtZQUNYLFdBQVcsQ0FBQyxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQTtRQUNsRCxDQUFDLEVBQUUsYUFBYSxFQUFFLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxFQUFDLGlCQUFpQixFQUFDO1lBQ3JELFNBQVMsRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFO2dCQUNqQztvQkFDSSxJQUFJLEVBQUUsUUFBUTtvQkFDZCxPQUFPLEVBQUU7d0JBQ0wsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQztxQkFDbkI7aUJBQ0o7YUFDSjtTQUNKLEVBQUUsS0FBSyxFQUFFLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUU7S0FDbkYsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxDQUFBO0FBQ3RCLENBQUMsQ0FBQyxFQUFFLENBQUEifQ==