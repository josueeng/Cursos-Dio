import React from "react";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

import Logo from "../../components/Logo/Logo";
import Input from "../../components/Input/Input";
import styles  from "./styles";
import { Buttons } from "../../components/Buttons/Buttons";

export default function Home(){
    return (
        <View style={styles.container}>
        <View style={styles.LogoContainer}><Logo /></View>
        <View style={styles.InputContainer}>
            
            <StatusBar style="dark"/>
            <Buttons/>
        </View>
        
        </View>
    );
}