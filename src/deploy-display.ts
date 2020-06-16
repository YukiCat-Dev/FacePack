import { importExternalFacePacks } from './FacePacksImporter'
(async () => {
    const FaceDisplay = (await import('./FaceDisplay/FaceDisplay')).default
    const facePacks = await importExternalFacePacks('https://cdn.jsdelivr.net/gh/YukiCat-Dev/yukicat.facepack/facepacks.json')
    /*     const facePacks = DefaultFacePack
     */
    new FaceDisplay(facePacks).render(document.getElementById('comment-display'))
})()