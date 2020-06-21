/**部署样板 */
import { importExternalFacePacks } from './FacePacksImporter'
(async () => {
    const FaceSelectorDeployer = (await import('./FaceSelector/FaceSelectorDeployer')).default
    const commentArea = document.getElementById('comment') as HTMLTextAreaElement
    const facePacks = await importExternalFacePacks('https://cdn.jsdelivr.net/gh/YukiCat-Dev/yukicat.facepack/facepacks.json')
/*     const facePacks = DefaultFacePack
 */    new FaceSelectorDeployer({
        popcorn: document.getElementById('show-fs'), tooltip: document.getElementById('fs-c'), facePackages: facePacks, onFaceSelected: (face) => {
            commentArea.value += `:${face.id}:`
        }, popperOptions: { placement: 'top' }
    }).render().hide()
})()