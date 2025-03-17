import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

// Importação de imagens
const symbolOn = require('./assets/pictures/symbol-on.png');
const symbolOff = require('./assets/pictures/symbol-off.png');
export default function App() {
  const [isActive, setIsActive] = useState(false);

  function handleSymbol() {
    setIsActive((oldvalue:boolean) => !oldvalue);
  }

  return (
    <View style={isActive ? styles.containerOn : styles.containerOff}>
     <TouchableOpacity onPress={handleSymbol}>
     <Image source={isActive ? symbolOn : symbolOff}></Image>

      </TouchableOpacity>      

    </View>
  );
}

{/* <View style={styles.container}>
      <Text>Olá Mundo</Text>
      <Text style={styles.textColor}>My name is Josué</Text>
      <StatusBar style="auto" />
    </View>
  );
} */}
const styles = StyleSheet.create({
  containerOn: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerOff: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textColor: {
    color: 'yellow',
    fontSize: 40,
  }
});
