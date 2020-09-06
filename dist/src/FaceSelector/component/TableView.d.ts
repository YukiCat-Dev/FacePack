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
export default class TableView extends React.Component<TableViewProps> {
    handleImageClick(e: any, pos: number): void;
    render(): JSX.Element;
}
//# sourceMappingURL=TableView.d.ts.map