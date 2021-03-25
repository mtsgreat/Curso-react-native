import React from 'react'
import {Text, StyleSheet} from 'react-native'
import Estilo from '../estilo'


export default props =>{
         return(
            <>
                <Text style={[Estilo.sizeTexto, style.smallText]}>Membros da Família:</Text>
               {props.children}
            </>
        )
}


const style = StyleSheet.create({
    smallText: {
        fontSize: 15,
        fontWeight: 'bold'
    }
})