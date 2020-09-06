"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.importExternalFacePacks = void 0;
const importJSON_1 = require("./util/importJSON");
const FacePackage_1 = require("./FacePackage");
async function importExternalFacePacks(url) {
    const json = await importJSON_1.importJSON(url);
    if (json) {
        for (const pack of json) {
            pack.faces.forEach((face) => {
                face.url = FacePackage_1.getFaceFullUrl(face, pack);
            });
        }
        return json;
    }
    throw new Error(`Try to load FacePacks from '${url}' failed.`);
}
exports.importExternalFacePacks = importExternalFacePacks;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmFjZVBhY2tzSW1wb3J0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvRmFjZVBhY2tzSW1wb3J0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsa0RBQThDO0FBQzlDLCtDQUEyRDtBQUNwRCxLQUFLLFVBQVUsdUJBQXVCLENBQUMsR0FBVztJQUNyRCxNQUFNLElBQUksR0FBdUIsTUFBTSx1QkFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ3RELElBQUksSUFBSSxFQUFFO1FBQ04sS0FBSSxNQUFNLElBQUksSUFBSSxJQUFJLEVBQUM7WUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDeEIsSUFBSSxDQUFDLEdBQUcsR0FBRyw0QkFBYyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQTtZQUN6QyxDQUFDLENBQUMsQ0FBQTtTQUNMO1FBQ0QsT0FBTyxJQUFJLENBQUE7S0FDZDtJQUNELE1BQU0sSUFBSSxLQUFLLENBQUMsK0JBQStCLEdBQUcsV0FBVyxDQUFDLENBQUE7QUFDbEUsQ0FBQztBQVhELDBEQVdDIn0=