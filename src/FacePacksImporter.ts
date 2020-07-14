import { importJSON } from './util/importJSON'
import { FacePackage, getFaceFullUrl } from './FacePackage'
export async function importExternalFacePacks(url: string) {
    const json: Array<FacePackage> = await importJSON(url)
    if (json) {
        for(const pack of json){
            pack.faces.forEach((face) => {
                face.url = getFaceFullUrl(face, pack)
            })
        }
        return json
    }
    throw new Error(`Try to load FacePacks from '${url}' failed.`)
}