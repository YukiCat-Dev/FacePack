import React from 'react';
import { FacePackage } from '../../FacePackage';
import FaceView from './FaceView'
import BaseComponentProps from './BaseComponentProps';
export interface TableViewProps extends BaseComponentProps {

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
    onImageSelected: (face_pos: number) => void
}

export interface TableViewState {

}

export default class TableView extends React.Component<TableViewProps, TableViewState> {
    state = {}
    handleImageClick(e, pos: number) {
        this.props.onImageSelected(pos)
    }
    render() {
        const facePackId = this.props.facePackage.id
        const faces = this.props.facePackage.faces.map((value, index) => {
            return (<td key={facePackId + '_' + index} style={{ textAlign: "center", border: "1pt solid" }}><FaceView src={value.url} face_pos={index} style={{ width: "30px", height: "30px" }} onClick={this.handleImageClick.bind(this)} global={this.props.global} /></td>)
        })
        const colCount = this.props.colCount
        const rowCount = Math.ceil((faces.length / colCount))
        const rows: Array<JSX.Element> = []
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

