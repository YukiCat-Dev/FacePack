export interface FacePackage {
    id: string;
    /**
     * 表情包的友好名称
     *
     * @type {string}
     * @memberof FacePackage
     */
    name: string;
    faces: Array<Face>;
    p_url?: string;
    default?: string;
}
export interface Face {
    /**
     * 与php方互通的表情id
     *
     * @type {string}
     * @memberof Face
     */
    id: string;
    /**
     *
     * 表情的url
     * @type {string}
     * @memberof Face
     */
    url: string;
}
export interface FaceDefine {
    id: string;
    url?: string;
}
export declare function getFaceFullUrl(face: FaceDefine, parentPack: FacePackage): string;
//# sourceMappingURL=FacePackage.d.ts.map