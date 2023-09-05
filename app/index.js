import { Text } from 'react-native';
import { useFonts } from 'expo-font';
import Home from './pages/Home';

export default function App() {
  const [loaded, error] = useFonts({
    'Averia-Serif-Libre': require('assets/fonts/AveriaSerifLibre-Regular.ttf'),
  });

  return loaded ? <Home /> : <Text>Loading...</Text>;
}
