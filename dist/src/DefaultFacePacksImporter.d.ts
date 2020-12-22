declare const FacePacks: ({
    id: string;
    name: string;
    p_url: string;
    p: string;
    default: string;
    nohd: string;
    faces: (string | {
        id: string;
        url: string;
    })[];
} | {
    id: string;
    name: string;
    p_url: string;
    faces: {
        id: string;
        url: string;
    }[];
    p?: undefined;
    default?: undefined;
    nohd?: undefined;
} | {
    id: string;
    name: string;
    default: string;
    faces: string[];
    p_url?: undefined;
    p?: undefined;
    nohd?: undefined;
})[];
export default FacePacks;
//# sourceMappingURL=DefaultFacePacksImporter.d.ts.map