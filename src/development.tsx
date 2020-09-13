import FaceSelectorDeployer from './FaceSelector/FaceSelectorDeployer'
import FaceDisplay from './FaceDisplay/FaceDisplay'
import DefaultFacePack from './DefaultFacePacksImporter'
(async () => {
    const commentArea = document.getElementById('comment') as HTMLTextAreaElement
    const facePacks = DefaultFacePack
    new FaceSelectorDeployer({
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
    }).render().hide()

    let display = new FaceDisplay(facePacks)
    document.getElementById('comment')
        .addEventListener('change', (e) => {
            document.getElementById('display').innerText = e.target.value
            display.render(document.getElementById('display'))

        })
    display.render(document.getElementById('display'))
})()