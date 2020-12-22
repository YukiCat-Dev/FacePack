import React from 'react';
import { FacePackage } from '../../FacePackage';
import BaseComponentProps from './BaseComponentProps';
export interface TableViewProps extends BaseComponentProps {
    /**
     * 设定一行显示多少列
     *
     * @type {number}
     * @memberof TableViewProps
     */
    colCount: number;
    /**
     *
     * 要显示的表情包
     * @type {FacePackage}
     * @memberof TableViewProps
     */
    facePackage: FacePackage;
    onImageSelected: (face_pos: number) => void;
}
declare const TableView: React.ForwardRefExoticComponent<TableViewProps & React.RefAttributes<HTMLDivElement>>;
export default TableView;
//# sourceMappingURL=TableView.d.ts.map