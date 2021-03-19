import React from 'react'
import  { Button }  from 'react-native'


export default props => {

    function executar(){
        console.warn('Botão selecionado #1')
    }

    return (
        <>
        <Button 
        title="Executar #01"
        onPress={executar}
        />
        <Button 
        title="Executar #02"
        onPress={function(){
            console.warn('Botão selecionado #2')
        }}
        />
        </>
    )
}