import React, {useState} from 'react'
import { Button, Text, StyleSheet, View } from 'react-native'
import Estilo from './estilo'

export default props =>{

    const [valor, setValor] = useState(0)
    const juntos = props.v1 + props.v2
    
    function Somar(){
        setValor(valor + juntos)
        
    }

    function Limpar(){
        setValor(0)
    }

   

         return(
             <>
             <Text style={Estilo.sizeTexto} >A soma de {props.v1} e {props.v2} é: {valor}</Text>
             <View style={style.DisplayButtom}>
                <Button title="Somar" onPress={Somar}/>
                <Button title="Limpar" onPress={Limpar}/>
            </View>
            </>
        )
}



const style = StyleSheet.create({
    DisplayButtom:{
        flexDirection: "row"
    }
})