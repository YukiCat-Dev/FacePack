"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**部署样板 */
const FacePacksImporter_1 = require("./FacePacksImporter");
const PopcornFaceSelectorDeployer_1 = __importDefault(require("./FaceSelector/deployer/PopcornFaceSelectorDeployer"));
(async () => {
    const commentArea = document.getElementById('comment');
    /*     const facePacks = DefaultFacePack
     */ new PopcornFaceSelectorDeployer_1.default({
        popcorn: document.getElementById('show-fs'),
        facePackages: await FacePacksImporter_1.importExternalFacePacks('https://cdn.jsdelivr.net/gh/YukiCat-Dev/yukicat.facepack/facepacks.json'),
        onFaceSelected: (pack, face) => {
            commentArea.value += `:${pack.id}.${face.id}:`;
        }, popperOptions: { placement: 'top' }, peakPopperOptions: {
            placement: "right", modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset: [0, 20],
                    },
                },
            ],
        }
    }).render().switchHide();
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwbG95LXNlbGVjdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2RlcGxveS1zZWxlY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLFVBQVU7QUFDViwyREFBNkQ7QUFDN0Qsc0hBQTZGO0FBQzdGLENBQUMsS0FBSyxJQUFJLEVBQUU7SUFDUixNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBd0IsQ0FBQTtJQUNqRjtPQUNHLENBQUcsSUFBSSxxQ0FBMkIsQ0FBQztRQUM5QixPQUFPLEVBQUUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUM7UUFDM0MsWUFBWSxFQUFFLE1BQU0sMkNBQXVCLENBQUMseUVBQXlFLENBQUM7UUFDdEgsY0FBYyxFQUNWLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFO1lBQ1gsV0FBVyxDQUFDLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFBO1FBQ2xELENBQUMsRUFBRSxhQUFhLEVBQUUsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEVBQUMsaUJBQWlCLEVBQUM7WUFDckQsU0FBUyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUU7Z0JBQzNCO29CQUNJLElBQUksRUFBRSxRQUFRO29CQUNkLE9BQU8sRUFBRTt3QkFDTCxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO3FCQUNsQjtpQkFDSjthQUNKO1NBQ0o7S0FDUixDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUE7QUFDNUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQSJ9