"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**部署样板 */
const FacePacksImporter_1 = require("./FacePacksImporter");
const FaceDisplay_1 = __importDefault(require("./FaceDisplay/FaceDisplay"));
(async () => {
    const display = new FaceDisplay_1.default(await FacePacksImporter_1.importExternalFacePacks('https://cdn.jsdelivr.net/gh/YukiCat-Dev/yukicat.facepack/facepacks.json'));
    document.querySelectorAll('article.hentry p:not(.ct-respond-form-textarea):not(.form-submit)').forEach((v) => {
        display.render(v);
    });
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwbG95LWRpc3BsYXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZGVwbG95LWRpc3BsYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxVQUFVO0FBQ1YsMkRBQTZEO0FBQzdELDRFQUFtRDtBQUNuRCxDQUFDLEtBQUssSUFBSSxFQUFFO0lBQ1IsTUFBTSxPQUFPLEdBQUcsSUFBSSxxQkFBVyxDQUFDLE1BQU0sMkNBQXVCLENBQUMseUVBQXlFLENBQUMsQ0FBQyxDQUFBO0lBQ3pJLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxtRUFBbUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1FBQ3pHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDckIsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUMsRUFBRSxDQUFBIn0=