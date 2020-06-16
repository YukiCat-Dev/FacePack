
import facePacks from '../facepack_template/facepacks'
import FaceSelectorDeployer from './FaceSelector/FaceSelectorDeployer'
import FaceDisplay from './FaceDisplay/FaceDisplay'
const commentArea = document.getElementById('comment') as HTMLTextAreaElement
new FaceSelectorDeployer(document.getElementById('show-fs'), document.getElementById('fs-c'), facePacks, (face) => {
    commentArea.value += `:${face.id}:`
}).render()
let display = new FaceDisplay(facePacks)
document.getElementById('comment')
    .addEventListener('change', (e) => {
        document.getElementById('display').innerText = e.target.value
    })
display.render(document.getElementById('display'))
window.display=display