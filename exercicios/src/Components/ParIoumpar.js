import React from 'react'
import { Text, View } from 'react-native'
import Estilo from './estilo'

export default props =>{
         return (
         <View>
             <Text style={Estilo.sizeTexto} >O resultado é:</Text>
             {props.numero % 2 === 0
                    ? <Text style={Estilo.sizeTexto} >Par</Text>
                    : <Text style={Estilo.sizeTexto} >Impar</Text>
             
             }
              
             
        </View>
         )
}