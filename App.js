import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Checkbox from './components/Checkbox';

export default function App() {

  const optionsindividual = [{
    text: "Li e concordo", id: 1
  }]

  return (
    <View style={styles.container}>
     
     <Text style={styles.title}>Chechbox Individual</Text>

     <Checkbox options={optionsindividual} />

            <Text>Chechbox uma opção por vez</Text>
            <Text>Chechbox múltipla escolha</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
