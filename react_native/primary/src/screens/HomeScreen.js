import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('TelaSecundaria')}>
        <Text style={styles.Title}>Tela navigation</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  Title: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
});
