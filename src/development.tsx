import PopcornFaceSelectorDeployer from './FaceSelector/deployer/PopcornFaceSelectorDeployer'
import FaceDisplay from './FaceDisplay/FaceDisplay'
import DefaultFacePack from './DefaultFacePacksImporter'
(async () => {
    const commentArea = document.getElementById('comment') as HTMLTextAreaElement
    const facePacks = DefaultFacePack as any
    new PopcornFaceSelectorDeployer({
        popcorn: document.getElementById('show-fs'),
        tooltip: document.getElementById('fs-c'),
        facePackages: facePacks,
        onFaceSelected:
            (pack, face) => {
                commentArea.value += `:${pack.id}.${face.id}:`
            }, popperOptions: { placement: 'top' },peakPopperOptions:{
                placement: "right-start", modifiers: [
                    {
                        name: 'offset',
                        options: {
                            offset: [0, 20],
                        },
                    },
                ],
            }
    }).render().switchHide()

    let display = new FaceDisplay(facePacks)
    document.getElementById('comment')
        .addEventListener('change', (e) => {
            const {target} =e 
            if(target instanceof HTMLInputElement) document.getElementById('display').innerText = target.value
            display.render(document.getElementById('display'))

        })
    display.render(document.getElementById('display'))
})()