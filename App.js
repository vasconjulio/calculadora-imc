import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Title from './src/componets/title';
import Main from './src/componets/Main';

export default function App() {
  return (
    <View style={styles.container}>
      <Title/> 
      <Main/>     
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
