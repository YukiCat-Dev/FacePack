/**部署样板 */
import { importExternalFacePacks } from './FacePacksImporter'
import FaceSelectorDeployer from './FaceSelector/FaceSelectorDeployer'
(async () => {
    const commentArea = document.getElementById('comment') as HTMLTextAreaElement
/*     const facePacks = DefaultFacePack
 */    new FaceSelectorDeployer({
        popcorn: document.getElementById('show-fs'), 
        tooltip: document.getElementById('fs-c'), 
        facePackages: await importExternalFacePacks('https://cdn.jsdelivr.net/gh/YukiCat-Dev/yukicat.facepack/facepacks.json'), 
        onFaceSelected: 
        (pack,face) => {
            commentArea.value += `:${pack.id}.${face.id}:`
        }, popperOptions: { placement: 'top' }
    }).render().hide()
})()