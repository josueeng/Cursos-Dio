import React from 'react';
import { TextInput } from 'react-native';

import styles  from './Input.styles';

interface InputProps {
  pass: string
}

export function Input(props: InputProps) {
  return (
    <TextInput style={ styles.Input} placeholder='Senha' value={props.pass}></TextInput>
  );
}
export default Input;