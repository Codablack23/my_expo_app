import React from "react";
import { SvgXml } from 'react-native-svg'


export default function SvgComponent({svg,height,width}){

    const SvgImage=()=><SvgXml xml={svg} width={width} height={height}/>
    
    return <SvgImage/>
}