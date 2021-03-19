import React from 'react'
import {Text} from 'react-native'
import EstiloFonte from './estilo'



export default(props) => {
    const ale = Math.floor(Math.random() * props.max)
    return (
        <Text style={EstiloFonte.sizeTexto}>Numero Aleatorio até {props.max} - resultado {ale}</Text>
        )
}