import { useMemo, forwardRef, useCallback } from 'react';
import { FacePackage } from '../../FacePackage';
import FaceView from './FaceView'
import BaseComponentProps from './BaseComponentProps';
import { css } from '@emotion/css';
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

const styleTd = css({ textAlign: "center", border: "1pt solid #888", padding: "1.5px" })
const stylePic = css({ width: "40px", height: "40px" })
const styleWrap = css({
    overflowY: "auto", overflowX: 'hidden'
})
const TableView = forwardRef<HTMLDivElement, TableViewProps>(
    function TableView({ facePackage, onImageSelected, colCount }, ref) {
        const facePackId = facePackage.id
        const handleImageClick = useCallback((e, pos: number) => {
            onImageSelected(pos)
        }, [onImageSelected])
        const faces = useMemo(() => facePackage.faces.map((value, index) =>
            <td key={facePackId + index} className={styleTd}>
                <FaceView src={value.url} alt={value.id} face_pos={index} className={stylePic} onClick={handleImageClick} />
            </td>), [facePackage])
        const rows: Array<JSX.Element> = useMemo(() => {
            const rowCount = Math.ceil((faces.length / colCount))
            const array = []
            for (let i = 0; i < rowCount; i++) {
                const start = i * colCount
                array.push(<tr key={facePackId + 'r' + i}>{faces.slice(start, start + colCount)}</tr>)
            }
            return array
        }, [faces, colCount])
        return <div className={styleWrap} ref={ref}>
            <table >
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>;
    }
)
export default TableView