/// <reference types="react" />
import BaseComponentProps from './BaseComponentProps';
export declare enum IndicateLevel {
    PRELOAD = 0,
    ERROR = 1
}
export interface IndicatorProps extends BaseComponentProps {
    level: IndicateLevel;
    description?: string;
}
/**
 *一个指示错误的组件
 *
 * @author KotoriK
 * @export
 * @param {IndicatorProps} props
 * @returns
 */
declare const Indicator: (props: IndicatorProps) => JSX.Element;
export default Indicator;
//# sourceMappingURL=Indicator.d.ts.map