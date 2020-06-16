import { importExternalFacePacks } from './FacePacksImporter'
(async () => {
    const FaceSelectorDeployer = (await import('./FaceSelector/FaceSelectorDeployer')).default
    const commentArea = document.getElementById('comment') as HTMLTextAreaElement
    const facePacks = await importExternalFacePacks('https://cdn.jsdelivr.net/gh/YukiCat-Dev/yukicat.facepack/facepacks.json')
/*     const facePacks = DefaultFacePack
 */    new FaceSelectorDeployer(document.getElementById('show-fs'), document.getElementById('fs-c'), facePacks, (face) => {
        commentArea.value += `:${face.id}:`
    }).render()
})()