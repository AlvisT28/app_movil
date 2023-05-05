
import React, {useState} from 'react';

import {
  Modal,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  Pressable

} from 'react-native';

import './src/components/estilos';
import Formulario from './src/components/formulario'

function App(): JSX.Element {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <SafeAreaView style={styles.contenedor}>

      <ScrollView>
        
        <Text style={styles.titulo}>Administracion de <Text style={styles.blue_txt}>Citas</Text></Text>
        <Text style={styles.subtitulo}>Vet_med</Text>
        <Pressable style={styles.boton}>
          <Text style={styles.btn_txt}>Nueva Cita</Text>

        </Pressable>
        
        <Formulario modalVisible = {modalVisible}/>

      </ScrollView>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  contenedor:{
    backgroundColor:'#222222',
    flex: 1
  },
  titulo:{
    color:'#FFFFFF',
    marginTop: 280,
    textAlign:'center',
    fontSize:30,
    fontWeight:'800',
    marginBottom:5,
  },
  subtitulo:{

    fontSize:25,
    textAlign:'center',
    fontWeight:'400',
    fontStyle:'italic'
  },
  boton:{
    
    marginTop:35,
    paddingTop:14,
    paddingBottom:16,
    padding:9,
    backgroundColor:'#0093FF',
    borderRadius:40,
    marginLeft:70,
    marginRight:70,
    borderWidth:2,
    borderColor:'#F7F7F7',
    
  },

  btn_txt:{

    color:'#F7F7F7',
    fontSize:15,
    textAlign:'center',
    fontWeight:'400',
    fontStyle:'italic'
  },

  blue_txt:{
    color:'#0093FF'
  }


});

export default App;
