"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFaceFullUrl = void 0;
const template_1 = require("./util/template");
function getFaceFullUrl(face, parentPack) {
    const _face = typeof face == "string" ? { id: face } : face;
    const _process = (ph) => template_1.processTemplate('{', '}', (str) => {
        if (str == 'id') {
            return _face.id;
        }
        else if (str in parentPack) {
            return parentPack[str];
        }
        else {
            return `{${str}}`;
        }
    }, ph);
    const { url, ...other_key } = _face;
    return {
        ...other_key, url: _process(url && _process(url) || parentPack.default)
    };
}
exports.getFaceFullUrl = getFaceFullUrl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmFjZVBhY2thZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvRmFjZVBhY2thZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQWtEO0FBcURsRCxTQUFnQixjQUFjLENBQUMsSUFBZ0IsRUFBRSxVQUEyQztJQUN4RixNQUFNLEtBQUssR0FBRyxPQUFPLElBQUksSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUE7SUFDM0QsTUFBTSxRQUFRLEdBQUcsQ0FBQyxFQUFVLEVBQUUsRUFBRSxDQUFDLDBCQUFlLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFO1FBQy9ELElBQUcsR0FBRyxJQUFFLElBQUksRUFBQztZQUNULE9BQU8sS0FBSyxDQUFDLEVBQUUsQ0FBQTtTQUNsQjthQUFLLElBQUksR0FBRyxJQUFJLFVBQVUsRUFBQztZQUN4QixPQUFPLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQTtTQUN6QjthQUFJO1lBQ0QsT0FBTyxJQUFJLEdBQUcsR0FBRyxDQUFBO1NBQ3BCO0lBQ0wsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFBO0lBQ04sTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLFNBQVMsRUFBRSxHQUFHLEtBQUssQ0FBQTtJQUNuQyxPQUFPO1FBQ0gsR0FBRyxTQUFTLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQyxHQUFHLElBQUksUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUM7S0FDMUUsQ0FBQTtBQUNMLENBQUM7QUFmRCx3Q0FlQyJ9