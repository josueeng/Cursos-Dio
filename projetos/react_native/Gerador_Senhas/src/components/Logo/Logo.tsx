import React from 'react';
import { View, Image } from 'react-native';
import style  from './Logo.styles';
const logo = require('../../Imagens/senha.png');

export function Components() {
return (
    <>
            <Image source={logo} style={style.container} />
    </>
);
}
export default Components;