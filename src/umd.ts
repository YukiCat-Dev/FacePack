//在Window注入全局对象
import {FaceSelectorDeployer,PopcornFaceSelectorDeployer} from './selector'
import {FaceDisplay} from './display'
import {importExternalFacePacks} from './FacePacksImporter'
window['StickPack']={
    PopcornFaceSelectorDeployer,FaceSelectorDeployer,
    FaceDisplay,importExternalFacePacks
}