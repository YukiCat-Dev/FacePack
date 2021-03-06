import PopcornFaceSelectorDeployer from '../src/selector/deployer/PopcornFaceSelectorDeployer'
import FaceDisplay from '../src/display/FaceDisplay'
import DefaultFacePack from './dev_importer'
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
            },style:{width:200}
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