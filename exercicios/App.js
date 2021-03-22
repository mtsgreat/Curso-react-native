
import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import ImpoarOuPar from './src/Components/ParIoumpar'

/* import Diferenciar from './src/Components/Diferenciar' */

/* import ContadorV2 from './src/Components/contador/ContadorV2' */

/* import Original,{Comp2, Comp3} from './src/Components/Multi'
import Primeiro from './src/Components/Primeiro' */

/* import MinMax from './src/Components/MinMax'

import Aleatorio from './src/Components/aleatorio' */

/* import Titulo from './src/Components/Titulo' */
 
/* import Botao from './src/Components/Botao' */

/* import Contador from './src/Components/Contador' */




export default function App() {
  return (
    
   <SafeAreaView  style={style.App}>{
    
   <ImpoarOuPar numero={4}/>
    
    /*
     <Diferenciar/>
     <ContadorV2/>
      <Contador inicial={100}/> <MinMax min="3" max="20"/>
     <Botao/>
     <Titulo principal="Cadastro" secundario="Tela de cadastro do produto"/>
      <MinMax min="100" max="150"/>
       <Original/>
      <Comp2></Comp2>
      <Comp3/>
      <Primeiro/> 
      <Aleatorio max="20"/>*/}
    </SafeAreaView>
  );
}


const style = StyleSheet.create({
  App: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    padding: 20
  }
})



