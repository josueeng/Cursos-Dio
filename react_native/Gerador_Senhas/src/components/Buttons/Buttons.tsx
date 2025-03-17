import React, { useState } from 'react';
import { View, Pressable, Alert, Text } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { styles } from './Buttons.styles';
import Input from '../Input/Input';
import generatePass from '../../Services/PasswordService';

export function Buttons() {
  const [pass, setPass] = useState('');

  function HandleCopy() {
    Clipboard.setStringAsync(pass);
    Alert.alert('Senha copiada com sucesso');
  }

  function HandleGenerator() {
    let generateToken = generatePass();
    setPass(generateToken);
  }

  return (
    <View style={styles.container}>
      <Input pass={pass} />
      <View style={styles.ButtonsContainer}>
        <Pressable onPress={HandleCopy}>
          <Text style={styles.Button}>📋 Copiar senha 📋</Text>
        </Pressable>
        <Pressable style={styles.Button} onPress={HandleGenerator}>
          <Text>🔘 Gerar uma senha 🔘</Text>
        </Pressable>
      </View>
    </View>
  );
}


