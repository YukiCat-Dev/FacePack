
import React from 'react'
import ReactDom from 'react-dom'

import { Indicator, IndicateLevel } from './Indicator'
/**部署FaceSelector的方法 */
export function deployFaceSelector(ele:HTMLElement){
/* ReactDom.render(<FaceSelector/>,ele) */
ReactDom.render(<Indicator level={IndicateLevel.PRELOAD}></Indicator>,ele)
}
deployFaceSelector(document.getElementById('c'))