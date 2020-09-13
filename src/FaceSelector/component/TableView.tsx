import React, { useMemo } from 'react';
import { FacePackage } from '../../FacePackage';
import FaceView from './FaceView'
import BaseComponentProps from './BaseComponentProps';
import { createUseStyles } from 'react-jss';
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

const useStyles = createUseStyles({
    td: {
        textAlign: "center", border: "1pt solid #888"
    },
    pic: { width: "40px", height: "40px" },
    wrap: {
        overflowY: "auto",overflowX:'hidden',height:"90%"
    }
})
export default function TableView({ facePackage, onImageSelected, colCount }: TableViewProps) {
    const classes = useStyles()
    const facePackId = facePackage.id
    const handleImageClick = (e, pos: number) => {
        onImageSelected(pos)
    }
    const faces = useMemo(() => facePackage.faces.map((value, index) => {
        return (<td key={facePackId + '_' + index} className={classes.td}>
            <FaceView src={value.url} alt={value.id} face_pos={index} className={classes.pic} onClick={handleImageClick} />
        </td>)
    }), [facePackage])
    const rows: Array<JSX.Element> = useMemo(() => {
        const rowCount = Math.ceil((faces.length / colCount))
        const array = new Array(rowCount)
        for (let i = 0; i < rowCount; i++) {
            const start = i * colCount
            array[i] = ((<tr key={i}>{faces.slice(start, start + colCount)}</tr>))
        }
        return array
    }, [faces, colCount])
    return (<div className={classes.wrap}>
        <table >
            <tbody>
                {rows}
            </tbody>
        </table>
    </div>);
}
