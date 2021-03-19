import React from 'react'
import {Text} from 'react-native'
import Estilo from './estilo'
import { Fragment } from 'react'


export default props => {

    return (
        <Fragment>
            <Text style={Estilo.sizeTexto}>{props.principal}</Text>
            <Text>{props.secundario}</Text>
        </Fragment>

    )
}

