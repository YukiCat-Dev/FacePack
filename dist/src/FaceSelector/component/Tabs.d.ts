import React from 'react';
import { FacePackage } from '../../FacePackage';
export interface TabsProps {
    facePackages: Array<FacePackage>;
    onSelected: (newPos: number) => void;
    selectedPos: number;
}
/**
 * 选项卡的一行标签（一行Tab
 *
 * @author KotoriK
 */
declare const Tabs: React.MemoExoticComponent<(props: TabsProps) => JSX.Element>;
export default Tabs;
//# sourceMappingURL=Tabs.d.ts.map