"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert2String = void 0;
/**
* 把React的CSSProperties转为string
*
* @author KotoriK
* @export
* @param {CSSProperties} properties
* @returns
*/
function convert2String(properties) {
    let str = '';
    for (const propName in Object.keys(properties)) {
        str += `${propName}:${properties[propName]};`;
    }
    return str;
}
exports.convert2String = convert2String;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVhY3RDU1NQcm9wZXJ0aWVzMlN0cmluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9SZWFjdENTU1Byb3BlcnRpZXMyU3RyaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBOzs7Ozs7O0VBT0U7QUFFRixTQUFnQixjQUFjLENBQUMsVUFBeUI7SUFDcEQsSUFBSSxHQUFHLEdBQVcsRUFBRSxDQUFBO0lBQ3BCLEtBQUssTUFBTSxRQUFRLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUM1QyxHQUFHLElBQUksR0FBRyxRQUFRLElBQUksVUFBVSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUE7S0FDaEQ7SUFDRCxPQUFPLEdBQUcsQ0FBQTtBQUNkLENBQUM7QUFORCx3Q0FNQyJ9