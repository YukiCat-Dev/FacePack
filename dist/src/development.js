"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PopcornFaceSelectorDeployer_1 = __importDefault(require("./FaceSelector/deployer/PopcornFaceSelectorDeployer"));
const FaceDisplay_1 = __importDefault(require("./FaceDisplay/FaceDisplay"));
const DefaultFacePacksImporter_1 = __importDefault(require("./DefaultFacePacksImporter"));
(async () => {
    const commentArea = document.getElementById('comment');
    const facePacks = DefaultFacePacksImporter_1.default;
    new PopcornFaceSelectorDeployer_1.default({
        popcorn: document.getElementById('show-fs'),
        tooltip: document.getElementById('fs-c'),
        facePackages: facePacks,
        onFaceSelected: (pack, face) => {
            commentArea.value += `:${pack.id}.${face.id}:`;
        }, popperOptions: { placement: 'top' }, peakPopperOptions: {
            placement: "right-start", modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset: [0, 20],
                    },
                },
            ],
        }
    }).render().switchHide();
    let display = new FaceDisplay_1.default(facePacks);
    document.getElementById('comment')
        .addEventListener('change', (e) => {
        const { target } = e;
        if (target instanceof HTMLInputElement)
            document.getElementById('display').innerText = target.value;
        display.render(document.getElementById('display'));
    });
    display.render(document.getElementById('display'));
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2ZWxvcG1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZGV2ZWxvcG1lbnQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsc0hBQTZGO0FBQzdGLDRFQUFtRDtBQUNuRCwwRkFBd0Q7QUFDeEQsQ0FBQyxLQUFLLElBQUksRUFBRTtJQUNSLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUF3QixDQUFBO0lBQzdFLE1BQU0sU0FBUyxHQUFHLGtDQUFzQixDQUFBO0lBQ3hDLElBQUkscUNBQTJCLENBQUM7UUFDNUIsT0FBTyxFQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDO1FBQzNDLE9BQU8sRUFBRSxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQztRQUN4QyxZQUFZLEVBQUUsU0FBUztRQUN2QixjQUFjLEVBQ1YsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUU7WUFDWCxXQUFXLENBQUMsS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUE7UUFDbEQsQ0FBQyxFQUFFLGFBQWEsRUFBRSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsRUFBQyxpQkFBaUIsRUFBQztZQUNyRCxTQUFTLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRTtnQkFDakM7b0JBQ0ksSUFBSSxFQUFFLFFBQVE7b0JBQ2QsT0FBTyxFQUFFO3dCQUNMLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7cUJBQ2xCO2lCQUNKO2FBQ0o7U0FDSjtLQUNSLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQTtJQUV4QixJQUFJLE9BQU8sR0FBRyxJQUFJLHFCQUFXLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDeEMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUM7U0FDN0IsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7UUFDOUIsTUFBTSxFQUFDLE1BQU0sRUFBQyxHQUFFLENBQUMsQ0FBQTtRQUNqQixJQUFHLE1BQU0sWUFBWSxnQkFBZ0I7WUFBRSxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFBO1FBQ2xHLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFBO0lBRXRELENBQUMsQ0FBQyxDQUFBO0lBQ04sT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUE7QUFDdEQsQ0FBQyxDQUFDLEVBQUUsQ0FBQSJ9