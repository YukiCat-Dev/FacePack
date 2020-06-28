/**部署样板 */
import { importExternalFacePacks } from './FacePacksImporter'
import FaceDisplay from './FaceDisplay/FaceDisplay'
(async () => {
    const display = new FaceDisplay(await importExternalFacePacks('https://cdn.jsdelivr.net/gh/YukiCat-Dev/yukicat.facepack/facepacks.json'))
    document.querySelectorAll('article.hentry p').forEach((v) => {
        display.render(v)
    })
})()