import { importExternalFacePacks } from './FacePacksImporter'
import FaceDisplay from './FaceDisplay/FaceDisplay'
import FaceSelectorDeployer from './FaceSelector/FaceSelectorDeployer'
(async () => {
    const facepacks = await importExternalFacePacks('https://cdn.jsdelivr.net/gh/YukiCat-Dev/yukicat.facepack/facepacks.json')
    const display = new FaceDisplay(facepacks)
    document.querySelectorAll('article.hentry').forEach((v) => {
        v.addEventListener('load', () => {
            display.render(v)
        })
    })
    const commentArea = document.getElementById('comment') as HTMLTextAreaElement
    /*     const facePacks = DefaultFacePack
     */    new FaceSelectorDeployer({
        popcorn: document.getElementById('show-fs'),
        tooltip: document.getElementById('fs-c'),
        facePackages: facepacks,
        onFaceSelected:
            (pack, face) => {
                commentArea.value += `:${pack.id}.${face.id}:`
            }, popperOptions: { placement: 'top' }
    }).render().hide()
})()
