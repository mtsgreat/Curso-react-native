import React from 'react'
import {Text} from 'react-native'

import EstiloFonte from './estilo'

//Forma padrão
/* function Primeiro(){
    return <Text>Primeiro Componente</Text>
} */


/* Função anônima */

/* const Primeiro = function(){
    return <Text>Primeiro</Text>
} */


// função da sendo exportada, sem precisar exportar por fora

/* export default function(){
    return <Text>Primeiro</Text>
} */

/* função arrow */

/* export default () => {
     return <Text>Primeiro \o</Text>
} */



/* outra forma de simplificar */

export default () =>   <Text style={EstiloFonte.sizeTexto}>Primeiro \o/</Text>
   
    










