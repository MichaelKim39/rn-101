import { Platform, StyleSheet, View, Text } from 'react-native';
import AndroidText from './src/components/AndroidText';
import AppleText from './src/components/AppleText';
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded, error] = useFonts({
    'Averia-Serif-Libre': require('./assets/fonts/AveriaSerifLibre-Regular.ttf'),
  });

  return loaded ? (
    <View style={styles.container}>
      {Platform.OS === 'android' ? <AndroidText /> : <AppleText />}
    </View>
  ) : (
    <Text>Loading...</Text>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe7d9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
