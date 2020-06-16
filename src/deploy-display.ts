/**部署样板 */
import { importExternalFacePacks } from './FacePacksImporter'
(async () => {
    const FaceDisplay = (await import('./FaceDisplay/FaceDisplay')).default
    const facePacks = await importExternalFacePacks('https://cdn.jsdelivr.net/gh/YukiCat-Dev/yukicat.facepack/facepacks.json')
    /*     const facePacks = DefaultFacePack
     */
    let display=new FaceDisplay(facePacks)
    document.querySelectorAll('.ct-comment-content.entry-content').forEach((v)=>{
        display.render(v)
    })
})()