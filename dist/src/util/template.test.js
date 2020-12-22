"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const template_1 = require("./template");
test('template:skip blank', () => {
    expect(template_1.processTemplate(":", ":", (str) => '😀', ':123:: :')).toBe('😀: :');
    expect(template_1.processTemplate("{", "}", (str) => '😀', '{123}{ }{\r} ')).toBe('😀{ }{\r} ');
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlsL3RlbXBsYXRlLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5Q0FBMEM7QUFDMUMsSUFBSSxDQUFDLHFCQUFxQixFQUFDLEdBQUUsRUFBRTtJQUMzQixNQUFNLENBQUMsMEJBQWUsQ0FBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLENBQUMsR0FBRyxFQUFDLEVBQUUsQ0FBQSxJQUFJLEVBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDckUsTUFBTSxDQUFDLDBCQUFlLENBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxDQUFDLEdBQUcsRUFBQyxFQUFFLENBQUEsSUFBSSxFQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO0FBR25GLENBQUMsQ0FBQyxDQUFBIn0=