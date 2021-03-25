
import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';

/* import Familia from './src/Components/relacao/Familia'
import Membro from  './src/Components/relacao/Membro' */

/* import ImpoarOuPar from './src/Components/ParIoumpar' */

/* import Diferenciar from './src/Components/Diferenciar' */

/* import ContadorV2 from './src/Components/contador/ContadorV2' */

/* import Original,{Comp2, Comp3} from './src/Components/Multi'
import Primeiro from './src/Components/Primeiro' */

/* import MinMax from './src/Components/MinMax'

import Aleatorio from './src/Components/aleatorio' */

/* import Titulo from './src/Components/Titulo' */
 
/* import Botao from './src/Components/Botao' */

/* import Contador from './src/Components/Contador' */

/* import Soma from './src/Components/Soma' */

/* import SomaV2 from './src/Components/Somav2' */


import UsuarioLogado from  './src/Components/UsuarioLogado'

export default function App() {
  return (
   <View style={style.App}>
       
       <UsuarioLogado usuario={ {nome: "Mateus", email: "mtsgreat@gmail.com"} }/>
       <UsuarioLogado usuario={ {nome: "Bia"} }/>
        
     
   </View>


/* 
<SomaV2 v1={5} v2={20}/>
      <Familia>
        <Membro nome="Duda" sobrenome="Silva"/>
        <Membro nome="Taci" sobrenome="Nascimento"/>
   </Familia>
   <Familia>
        <Membro nome="Mateus" sobrenome="Silva"/>
        <Membro nome="Severina" sobrenome="Nascimento"/>
   </Familia>
   <Familia>
        <Membro nome="Henrique" sobrenome="Bernardino"/>
        <Membro nome="Bruna" sobrenome="Karla"/>
   </Familia>

     <SafeAreaView  style={style.App}>{
    
   <Familia>
        <Membro nome="Duda" sobrenome="Silva"/>
        <Membro nome="Taci" sobrenome="Nascimento"/>
   </Familia>    
    /*
    <ImpoarOuPar numero={4}/>
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
      <Aleatorio max="20"/>*/
   // </SafeAreaView>
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



