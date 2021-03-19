import React from 'react'
import {Text} from 'react-native'

import EstiloFonte from './estilo'

export default (props) => {
    
    return (
        <Text style={EstiloFonte.sizeTexto}> 
            O valor {props.max} é maior que o valor {props.min}! 
        </Text>
    )
}