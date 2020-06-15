import React from 'react';
import { FacePackage } from './base/FacePackage';
import Image from './Image'
export interface TableViewProps {

    /**
     * 设定一行显示多少列
     *
     * @type {number}
     * @memberof TableViewProps
     */
    colCount: number,

    /**
     *
     * 要显示的表情包
     * @type {FacePackage}
     * @memberof TableViewProps
     */
    facePackage: FacePackage
}

export interface TableViewState {

}

export default class TableView extends React.Component<TableViewProps, TableViewState> {
    state = {}
    render() {
        let faces = this.props.facePackage.faces.map((value, index) => {
            return (<td key={index} style={{ textAlign: "center", border: "solid"}}><Image src={value.url} id={value.id} imgInlineStyle={{width:"100px",height:"100px"}} /></td>)
        })
        let colCount = this.props.colCount
        let rowCount = Math.ceil((faces.length / colCount))
        let rows: Array<JSX.Element> = []
        for (let i = 0; i < rowCount; i++) {
            rows.push((<tr key={i}>{faces.slice(i * colCount, i * colCount + colCount)}</tr>))
        }
        return (<table style={{ overflow: "scroll" }}>
            <tbody>
                {rows}
            </tbody>
        </table>);
    }
}

