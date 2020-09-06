"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFaceFullUrl = void 0;
const template_1 = require("./util/template");
function getFaceFullUrl(face, parentPack) {
    var _a;
    return template_1.processTemplate('{', '}', (str) => {
        if (str == 'p_url') {
            return parentPack.p_url;
        }
        else if (str == 'id') {
            return face.id;
        }
        else {
            return `{${str}}`;
        }
    }, (_a = face.url) !== null && _a !== void 0 ? _a : parentPack.default);
}
exports.getFaceFullUrl = getFaceFullUrl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmFjZVBhY2thZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvRmFjZVBhY2thZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQWtEO0FBdUNsRCxTQUFnQixjQUFjLENBQUMsSUFBZ0IsRUFBRSxVQUF1Qjs7SUFDakUsT0FBTywwQkFBZSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRTtRQUN4QyxJQUFJLEdBQUcsSUFBSSxPQUFPLEVBQUU7WUFDaEIsT0FBTyxVQUFVLENBQUMsS0FBSyxDQUFBO1NBQzFCO2FBQU0sSUFBRyxHQUFHLElBQUksSUFBSSxFQUFDO1lBQ2xCLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQTtTQUNqQjthQUFJO1lBQ0QsT0FBTyxJQUFJLEdBQUcsR0FBRyxDQUFBO1NBQ3BCO0lBQ0wsQ0FBQyxRQUFFLElBQUksQ0FBQyxHQUFHLG1DQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQTtBQUN0QyxDQUFDO0FBVkQsd0NBVUMifQ==