"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.preprocessFacePack = exports.importExternalFacePacks = void 0;
const importJSON_1 = require("./util/importJSON");
const FacePackage_1 = require("./FacePackage");
async function importExternalFacePacks(url) {
    const json = await importJSON_1.importJSON(url);
    if (json) {
        preprocessFacePack(json);
        return json;
    }
    throw new Error(`Try to load FacePacks from '${url}' failed.`);
}
exports.importExternalFacePacks = importExternalFacePacks;
function preprocessFacePack(facepacks) {
    for (const pack of facepacks) {
        pack.faces = pack.faces.map((face) => FacePackage_1.getFaceFullUrl(face, pack));
    }
}
exports.preprocessFacePack = preprocessFacePack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmFjZVBhY2tzSW1wb3J0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvRmFjZVBhY2tzSW1wb3J0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsa0RBQThDO0FBQzlDLCtDQUE4RTtBQUN2RSxLQUFLLFVBQVUsdUJBQXVCLENBQUMsR0FBVztJQUNyRCxNQUFNLElBQUksR0FBNkIsTUFBTSx1QkFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQzVELElBQUksSUFBSSxFQUFFO1FBQ04sa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDeEIsT0FBTyxJQUEwQixDQUFBO0tBQ3BDO0lBQ0QsTUFBTSxJQUFJLEtBQUssQ0FBQywrQkFBK0IsR0FBRyxXQUFXLENBQUMsQ0FBQTtBQUNsRSxDQUFDO0FBUEQsMERBT0M7QUFDRCxTQUFnQixrQkFBa0IsQ0FBQyxTQUFtQztJQUNsRSxLQUFLLE1BQU0sSUFBSSxJQUFJLFNBQVMsRUFBRTtRQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyw0QkFBYyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFBO0tBQ3BFO0FBQ0wsQ0FBQztBQUpELGdEQUlDIn0=