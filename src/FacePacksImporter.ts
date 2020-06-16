import { importJSON } from './util/importJSON'
import { FacePackage } from './FacePackage'
export async function importExternalFacePacks(url: string) {
    let json: Array<FacePackage> = await importJSON(url)
    if (json) return json
    throw new Error(`Try to load FacePacks from '${url}' failed.`)
}