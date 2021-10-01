import { css } from "@emotion/css";
import { forwardRef, useCallback } from "react";
import { FacePackage } from "../../FacePackage";
import FaceView from './FaceView'

const styleCol = css({
    flex: 1, width: "45px", height: "45px", padding: "1px 1px 1px 1px"
})
const styleRow = css({
    flexWrap: "wrap", overflow: "auto"
})

export interface FlexboxViewProp {
    /**
     *
     * 要显示的表情包
     * @type {FacePackage}
     * @memberof TableViewProps
     */
    facePackage: FacePackage
    onImageSelected: (face_pos: number) => void
}
const FlexboxView = forwardRef<HTMLDivElement, FlexboxViewProp>(
    function FlexboxView({ facePackage, onImageSelected }, ref) {
        const handleImageClick = useCallback((e, pos: number) => {
            onImageSelected(pos)
        }, [onImageSelected])
        const faces = facePackage.faces.map((face, index) =>
            <FaceView key={facePackage.id + face.id} src={face.url} alt={face.id} face_pos={index}
                className={styleCol} onClick={handleImageClick} />)
        return <div ref={ref} className={styleRow}>
            {faces}
        </div>

    })
export default FlexboxView