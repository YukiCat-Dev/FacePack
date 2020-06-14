

import ReactDom from 'react-dom'
import {FaceSelector} from './FaceSelector'
/**部署FaceSelector的方法 */
export function deployFaceSelector(ele:HTMLElement){
ReactDom.render(<FaceSelector/>,ele)
}
deployFaceSelector(document.getElementById('c'))