import React from 'react'
import {Text} from 'react-native'

import estiloFonte from './estilo'


export default function Comp(){
    return <Text style={estiloFonte.sizeTexto}>Compo #Oficial</Text>
}

export function Comp2(){
    return <Text style={estiloFonte.sizeTexto}>Comp #02</Text>
}

export function Comp3(){
    return <Text style={estiloFonte.sizeTexto}>Comp #03</Text>
}



