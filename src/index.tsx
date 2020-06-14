
import React from 'react'
import ReactDom from 'react-dom'

import { Indicator, IndicateLevel } from './Indicator'
import Tab from './Tab'
/**部署FaceSelector的方法 */
export function deployFaceSelector(ele:HTMLElement){
/* ReactDom.render(<FaceSelector/>,ele) */
ReactDom.render(<Tab></Tab>,ele)
}
deployFaceSelector(document.getElementById('c'))