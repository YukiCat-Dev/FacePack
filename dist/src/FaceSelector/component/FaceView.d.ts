import BaseComponentProps from './BaseComponentProps';
import React from 'react';
export interface FaceViewProps extends BaseComponentProps {
    face_pos: number;
    src: string;
    alt?: string;
    onClick?: (e: React.MouseEvent<HTMLImageElement, MouseEvent>, pos?: number) => void;
    refererPolicy?: ReferrerPolicy;
}
/**
 * 处理表情显示
 *
 * @author KotoriK
 * @param {FaceViewProps} props
 * @returns
 */
export default function FaceView(props: FaceViewProps): JSX.Element;
//# sourceMappingURL=FaceView.d.ts.map