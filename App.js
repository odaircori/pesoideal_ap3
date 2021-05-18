import React, {Component} from 'react';
import { Alert, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import SexoRadio from './src/Sexo';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faWeight } from '@fortawesome/free-solid-svg-icons';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      altura: '',
      sexo: '0'
    };
  }
  
  calcular() {
    var pesoIdeal = 0;

    if(this.state.sexo === "0"){
      pesoIdeal = (72.7*this.state.altura) -58;
    }else{
      pesoIdeal = (62.1*this.state.altura) - 44.7;
    }

    return Alert.alert("Seu peso ideal é:", pesoIdeal.toString());
  }

  getSexo = (childValue) => {
    this.setState({sexo: childValue});
  }

  render() {

    return (      
      <View style={styles.container}>

        <FontAwesomeIcon icon={ faWeight } size={80} />

        <TextInput 
          keyboardType="numeric" 
          style={styles.input} 
          placeholder="Digite sua altura"
          value={this.state.altura}
          onChangeText={value => this.setState({altura: value})} />

          <SexoRadio getSexo={this.getSexo}/>

        <TouchableOpacity 
          style={styles.botao} 
          onPress={() => {this.calcular()}}>

          <Text style={styles.textoBotao}>Calcular</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#546E7A',
      color:'#000',
      alignItems: 'center',
      justifyContent: 'center'
  },
    input: {
      width:250,
      backgroundColor:'#fff',
      marginTop:50,
      borderRadius:5
    },
    botao: {
      width:250,
      backgroundColor:'#222',
      justifyContent:'center',
      marginTop:20,
      borderRadius:5,
      padding:10
    },
    textoBotao: {
      color:'#fff',
      textAlign:'center',
      fontWeight:'bold'
    },

});