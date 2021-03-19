import React, { useState }from 'react'
import { Text, Button, StyleSheet, View } from 'react-native'
import Estilo from './estilo'




export default props => {
   

    const [numero, setNumero] = useState(props.inicial)

    function inc(){
        setNumero(numero + 1)
       
    }

    function dec(){
        setNumero(numero -1)
    }

    return (
        <>
        <Text style={Estilo.sizeTexto}>{numero}</Text>
        <View style={style.botao}>
            <Button  title="+" onPress={inc}/>
            <Button  title="-" onPress={dec}/>
        </View>
        </>
        
    )
}



const style = StyleSheet.create({
    botao:{
        flexDirection: "row"
    }

    
})

