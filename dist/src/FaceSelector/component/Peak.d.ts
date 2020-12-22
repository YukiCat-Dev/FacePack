import React from 'react';
import BaseComponentProps from './BaseComponentProps';
export interface PeakProps extends BaseComponentProps {
    imgUrl: string;
    imgCaption: string;
    show: boolean;
}
declare const Peak: React.ForwardRefExoticComponent<PeakProps & React.RefAttributes<HTMLDivElement>>;
export default Peak;
//# sourceMappingURL=Peak.d.ts.map