import FaceSelectorDeployer from './FaceSelector/FaceSelectorDeployer'
import FaceDisplay from './FaceDisplay/FaceDisplay'
import DefaultFacePack from './DefaultFacePacksImporter'
(async () => {
    const commentArea = document.getElementById('comment') as HTMLTextAreaElement
    const facePacks = DefaultFacePack
    new FaceSelectorDeployer({
        popcorn: document.getElementById('show-fs'), tooltip: document.getElementById('fs-c'), facePackages: facePacks, onFaceSelected:  (pack,face) => {
            commentArea.value += `:${pack.id}.${face.id}:`
        },style:{backgroundColor:"#FFFFFF",padding:'2px',borderWidth:'3px'} 
    }).render()

    let display = new FaceDisplay(facePacks)
    document.getElementById('comment')
        .addEventListener('change', (e) => {
            document.getElementById('display').innerText = e.target.value
            display.render(document.getElementById('display'))

        })
    display.render(document.getElementById('display'))
})()