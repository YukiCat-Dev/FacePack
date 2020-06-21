import facepacks from '../facepack_template/facepacks.json'
import { getFaceFullUrl } from './FacePackage'
const FacePacks = facepacks
facepacks.forEach((pack) => {
    pack.faces.forEach((face) => {
        face.url = getFaceFullUrl(face, pack)
    })
})
export default FacePacks