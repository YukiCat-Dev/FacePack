"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.importJSON = void 0;
async function importJSON(url) {
    return fetch(url, { method: "GET" }).then((response) => {
        if (response.ok) {
            return response.json();
        }
        else {
            throw new Error(`Fetch Error:Return HTTP ${response.status}, ${response.statusText}`);
        }
    });
}
exports.importJSON = importJSON;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1wb3J0SlNPTi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlsL2ltcG9ydEpTT04udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQU8sS0FBSyxVQUFVLFVBQVUsQ0FBQyxHQUFVO0lBQ3ZDLE9BQU8sS0FBSyxDQUFDLEdBQUcsRUFBQyxFQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBQyxFQUFFO1FBQzlDLElBQUcsUUFBUSxDQUFDLEVBQUUsRUFBQztZQUNYLE9BQU8sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFBO1NBQ3pCO2FBQUk7WUFDRCxNQUFNLElBQUksS0FBSyxDQUFDLDJCQUEyQixRQUFRLENBQUMsTUFBTSxLQUFLLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFBO1NBQ3hGO0lBQ0wsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDO0FBUkQsZ0NBUUMifQ==