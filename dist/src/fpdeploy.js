"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FacePacksImporter_1 = require("./FacePacksImporter");
const FaceDisplay_1 = __importDefault(require("./FaceDisplay/FaceDisplay"));
const PopcornFaceSelectorDeployer_1 = __importDefault(require("./FaceSelector/deployer/PopcornFaceSelectorDeployer"));
(async () => {
    const facepacks = await FacePacksImporter_1.importExternalFacePacks('https://cdn.jsdelivr.net/gh/YukiCat-Dev/yukicat.facepack/facepacks.json');
    const display = new FaceDisplay_1.default(facepacks);
    document.querySelectorAll('article.hentry').forEach((v) => {
        v.addEventListener('load', () => {
            display.render(v);
        });
    });
    const commentArea = document.getElementById('comment');
    /*     const facePacks = DefaultFacePack
     */ new PopcornFaceSelectorDeployer_1.default({
        popcorn: document.getElementById('show-fs'),
        tooltip: document.getElementById('fs-c'),
        facePackages: facepacks,
        onFaceSelected: (pack, face) => {
            commentArea.value += `:${pack.id}.${face.id}:`;
        }, popperOptions: { placement: 'top' }
    }).render().switchHide();
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnBkZXBsb3kuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZnBkZXBsb3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSwyREFBNkQ7QUFDN0QsNEVBQW1EO0FBQ25ELHNIQUE2RjtBQUM3RixDQUFDLEtBQUssSUFBSSxFQUFFO0lBQ1IsTUFBTSxTQUFTLEdBQUcsTUFBTSwyQ0FBdUIsQ0FBQyx5RUFBeUUsQ0FBQyxDQUFBO0lBQzFILE1BQU0sT0FBTyxHQUFHLElBQUkscUJBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUMxQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtRQUN0RCxDQUFDLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3JCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQyxDQUFDLENBQUE7SUFDRixNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBd0IsQ0FBQTtJQUM3RTtPQUNHLENBQUksSUFBSSxxQ0FBMkIsQ0FBQztRQUNuQyxPQUFPLEVBQUUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUM7UUFDM0MsT0FBTyxFQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDO1FBQ3hDLFlBQVksRUFBRSxTQUFTO1FBQ3ZCLGNBQWMsRUFDVixDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRTtZQUNYLFdBQVcsQ0FBQyxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQTtRQUNsRCxDQUFDLEVBQUUsYUFBYSxFQUFFLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRTtLQUM3QyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUE7QUFDNUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQSJ9