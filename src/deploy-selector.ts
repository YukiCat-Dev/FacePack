/**部署样板 */
import { importExternalFacePacks } from './FacePacksImporter'
import PopcornFaceSelectorDeployer from './FaceSelector/deployer/PopcornFaceSelectorDeployer'
(async () => {
    const commentArea = document.getElementById('comment') as HTMLTextAreaElement
/*     const facePacks = DefaultFacePack
 */   new PopcornFaceSelectorDeployer({
        popcorn: document.getElementById('show-fs'),
        facePackages: await importExternalFacePacks('https://cdn.jsdelivr.net/gh/YukiCat-Dev/yukicat.facepack/facepacks.json'),
        onFaceSelected:
            (pack, face) => {
                commentArea.value += `:${pack.id}.${face.id}:`
            }, popperOptions: { placement: 'top' },peakPopperOptions:{
                placement: "right", modifiers: [
                    {
                        name: 'offset',
                        options: {
                            offset: [0, 20],
                        },
                    },
                ],
            }
    }).render().switchHide()
})()