import { CSSProperties } from "react";
import { FaceSelectorGlobal } from "./FaceSelector";

export default interface BaseComponentProps{
    style?:CSSProperties
    className?:string
    global?:FaceSelectorGlobal
}