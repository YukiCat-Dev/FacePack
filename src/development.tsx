import FaceSelectorDeployer from './FaceSelector/FaceSelectorDeployer'
import FaceDisplay from './FaceDisplay/FaceDisplay'
import  { importExternalFacePacks } from './FacePacksImporter'
import DefaultFacePack from './DefaultFacePacksImporter'
(async () => {
    const commentArea = document.getElementById('comment') as HTMLTextAreaElement
/*     const facePacks = await importExternalFacePacks('https://cdn.jsdelivr.net/gh/YukiCat-Dev/yukicat.facepacks/facepacks.json')
 */        const facePacks=DefaultFacePack
    
    new FaceSelectorDeployer(document.getElementById('show-fs'), document.getElementById('fs-c'), facePacks, (face) => {
        commentArea.value += `:${face.id}:`
    }).render()

    let display = new FaceDisplay(facePacks)
    document.getElementById('comment')
        .addEventListener('change', (e) => {
            document.getElementById('display').innerText = e.target.value
            display.render(document.getElementById('display'))

        })
    display.render(document.getElementById('display'))
})()