declare const FacePacks: ({
    id: string;
    name: string;
    p_url: string;
    default: string;
    faces: ({
        id: string;
        url?: undefined;
    } | {
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
    default?: undefined;
} | {
    id: string;
    name: string;
    default: string;
    faces: {
        id: string;
    }[];
    p_url?: undefined;
})[];
export default FacePacks;
//# sourceMappingURL=DefaultFacePacksImporter.d.ts.map