
import facePacks from '../facepack_template/facepacks'
import FaceSelectorDeployer from './FaceSelector/FaceSelectorDeployer'
const commentArea = document.getElementById('comment') as HTMLTextAreaElement
new FaceSelectorDeployer(document.getElementById('p'), document.getElementById('c'), facePacks, (face) => {
    commentArea.value += `:${face.id}:`
}).render()