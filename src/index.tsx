
import React from 'react'
import ReactDom from 'react-dom'

import { Indicator, IndicateLevel } from './Indicator'
import Tabs from './Tabs'
/**部署FaceSelector的方法 */
export function deployFaceSelector(ele:HTMLElement){
/* ReactDom.render(<FaceSelector/>,ele) */
ReactDom.render(<Tabs facePackages={[{id:"114514",name:"1919",faces:[]}]}></Tabs>,ele)
}
deployFaceSelector(document.getElementById('c'))