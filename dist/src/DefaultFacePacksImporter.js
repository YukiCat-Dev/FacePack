"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const facepacks_json_1 = __importDefault(require("../facepack_template/facepacks.json"));
const FacePackage_1 = require("./FacePackage");
const FacePacks = facepacks_json_1.default;
facepacks_json_1.default.forEach((pack) => {
    pack.faces.forEach((face) => {
        face.url = FacePackage_1.getFaceFullUrl(face, pack);
    });
});
exports.default = FacePacks;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVmYXVsdEZhY2VQYWNrc0ltcG9ydGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0RlZmF1bHRGYWNlUGFja3NJbXBvcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHlGQUEyRDtBQUMzRCwrQ0FBOEM7QUFDOUMsTUFBTSxTQUFTLEdBQUcsd0JBQVMsQ0FBQTtBQUMzQix3QkFBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO0lBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7UUFDeEIsSUFBSSxDQUFDLEdBQUcsR0FBRyw0QkFBYyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUN6QyxDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFBO0FBQ0Ysa0JBQWUsU0FBUyxDQUFBIn0=