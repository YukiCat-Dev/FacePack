/**部署样板 */
import { importExternalFacePacks } from './FacePacksImporter'
import FaceDisplay from './FaceDisplay/FaceDisplay'
(async () => {
    let display=new FaceDisplay(await importExternalFacePacks('https://cdn.jsdelivr.net/gh/YukiCat-Dev/yukicat.facepack/facepacks.json'))
    document.querySelectorAll('article.hentry').forEach((v)=>{
        display.render(v)
    })
})()