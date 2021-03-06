import { importExternalFacePacks } from '../src/FacePacksImporter'
import FaceDisplay from '../src/display/FaceDisplay'
import PopcornFaceSelectorDeployer from '../src/selector/deployer/PopcornFaceSelectorDeployer'
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
     */    new PopcornFaceSelectorDeployer({
        popcorn: document.getElementById('show-fs'),
        tooltip: document.getElementById('fs-c'),
        facePackages: facepacks,
        onFaceSelected:
            (pack, face) => {
                commentArea.value += `:${pack.id}.${face.id}:`
            }, popperOptions: { placement: 'top' }
    }).render().switchHide()
})()
