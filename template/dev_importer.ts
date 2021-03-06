import facepacks from '../facepack_template/facepacks.json'
import { preprocessFacePack } from './FacePacksImporter'
preprocessFacePack(facepacks)
const FacePacks = facepacks
export default FacePacks