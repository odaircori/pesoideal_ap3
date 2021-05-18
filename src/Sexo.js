import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';


const SexoRadio = ({getSexo}) => {
    const [value, setValue] = React.useState('');
  
    const handleChange = (event) => {
      setValue(event);
      getSexo(event);
    };
  
    return (
       
            
            <View style={styles.radio}>
              <View>
                <Text style={styles.texto}>Masculino</Text>
                <Text style={styles.texto}>Feminino</Text>
              </View>              
              <RadioButton.Group 
              onValueChange={handleChange} value={value}>
                  <RadioButton value="0"/>
                  <RadioButton value="1"/>
              </RadioButton.Group>
            </View>
       
    );
  };
  
const styles = StyleSheet.create({
    radio: {
      flexDirection:'row',
      marginTop:10

    },
    texto: {
        color:'#fff',
        fontSize:15,
        marginTop:10,
        marginRight:5,
        fontWeight:'bold'
    }
})

export default SexoRadio;