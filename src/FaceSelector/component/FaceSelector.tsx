import React,{ useState, useCallback, useMemo }  from 'react';
import TableView from './TableView';
import { FacePackage, Face } from '../../FacePackage';
import Tabs from './Tabs';
import Peak from './Peak';
import {OptionsGeneric, Modifier } from '@popperjs/core'
import BaseComponentProps from './BaseComponentProps';
import useGenericStyle from '../style';
import clsx from 'clsx';
import { usePopper } from 'react-popper'
export type TModifier = Partial<Modifier<any, any>>
export interface FaceSelectorProps extends BaseComponentProps {
    /**
     *  指示选项卡标签条停靠的位置
     */
    tabsDockOn?: "bottom" | "top",
    /**
    *  加载的表情包集
    */
    facePacks: Array<FacePackage>,
    /**
    *  每行表情数
    */
    colCount: number,
    /**
    *  实现隐藏FaceSelector的方法
    */
    handleHide: Function
    /**
    *  当用户选中一个表情时触发
    */
    onFaceSelected: (parentPack: FacePackage, face: Face) => void
    peakPopperOptions?: Partial<OptionsGeneric<TModifier>>
}
export interface FaceSelectorState {
    /**
     * 使用数字，方便在数组中快速检索
     *
     * @type {number}
     * @memberof FaceSelectorState
     */
    nowPackagePos: number
}
const Global: React.Context<FaceSelectorGlobal> = React.createContext({} as FaceSelectorGlobal)
export { Global };
/**
 * 表情包选择器的完整主体
 *
 * @author KotoriK
 * @export
 * @class FaceSelector
 * @extends {React.Component}
 */
export function GenericStyle({ children }: { children: (classes: Record<"borderShadow" | "bgWhiteBlur" | "main", string>) => React.ReactElement }) {
    return children(useGenericStyle())
}
export default function FaceSelector({peakPopperOptions, facePacks, style, className, colCount, onFaceSelected, handleHide }: FaceSelectorProps) {
    const [_nowPackagePos, setPos] = useState(0)
    const [isShowPeak, setShowPeak] = useState(false)
    const [peak_url, set_url] = useState<string>()
    const [peak_caption, set_caption] = useState<string>()
    const [main, setMain] = useState<HTMLDivElement>()
    const [peak, setPeak] = useState<HTMLDivElement>()
    const { styles, update } = usePopper(main, peak,peakPopperOptions)
    const handleFaceSelected = useCallback((face_pos: number) => {
        const nowPackage = facePacks[_nowPackagePos]
        onFaceSelected(nowPackage, nowPackage.faces[face_pos])
        handleHide()
    }, [handleHide, onFaceSelected, facePacks, _nowPackagePos])
    let nowPackagePos = _nowPackagePos
    const maxPos = facePacks.length - 1
    if (nowPackagePos > maxPos) nowPackagePos = maxPos //防止prop发生改动带来越界
    return (<>
        <GenericStyle>
            {classes => (
                <div ref={setMain} style={{ ...style }} className={clsx(classes.borderShadow, className, classes.bgWhiteBlur, classes.main)}>
                    <Tabs facePackages={facePacks}
                        onSelected={(pos) => setPos(pos)} selectedPos={nowPackagePos} />
                    <Global.Provider value={useMemo(() => {
                        return {
                            showPeak: (imgUrl: string, imgCaption: string) => {
                                set_url(imgUrl)
                                set_caption(imgCaption)
                                setShowPeak(true)
                                if(update)update()
                            },
                            hidePeak: () => setShowPeak(false)
                        } as FaceSelectorGlobal
                    }, [set_url, set_caption, setShowPeak,update])}>
                        <TableView facePackage={facePacks[nowPackagePos]} colCount={colCount}
                            onImageSelected={handleFaceSelected} />
                    </Global.Provider>
                </div>)}
        </GenericStyle>
        <Peak imgCaption={peak_caption} imgUrl={peak_url} ref={setPeak} show={isShowPeak} style={styles.popper} />
    </>)
}
export interface FaceSelectorGlobal {
    showPeak: (imgUrl: string, imgCaption: string) => void
    hidePeak: Function
}