import { createUseStyles } from "react-jss";
const mainHeight=325
const useGenericStyle = createUseStyles({
    borderShadow: {
        boxShadow: '2px 2px 15px #888888',
        border: '0.5px #888888 solid',
        zIndex: 999,
    },
    bgWhiteBlur:{
        backgroundColor:'rgba(255,255,255,0.6)',
        backdropFilter:'blur(3px)'
    },main:{
        padding: '2px',width:200,height:mainHeight
    }
})
export default useGenericStyle
export {mainHeight}