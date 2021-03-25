import React, {useState} from 'react'
import { Button, Text } from 'react-native'
import Estilo from './estilo'

export default props =>{

    const [total, setTotal] = useState(0)
   /*  const dois = props.v1 + props.v2 */

    function somar(){
        setTotal(total + props.v1 + props.v2)
    }
         return(
             <>
                <Text style={Estilo.sizeTexto} >A soma dos valors {props.v1} e {props.v2} é: {total}</Text>

                <Button title="Somar" onPress={somar}/>
            </>
        )
}