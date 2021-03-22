import React from 'react'
import {View, Button, StyleSheet } from 'react-native'

export default props =>{
         return(
            <View style={style.DisplayButton}>
                <Button  title="+" onPress={props.inc}/>
                <Button  title="-" onPress={props.dec}/>
            </View>
        )
}


const style = StyleSheet.create({
    DisplayButton: {
        flexDirection: "row",
        padding: 10
    },

})


