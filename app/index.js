import { Text } from 'react-native';
import { useFonts } from 'expo-font';
import Home from './pages/Home';
import { FontFamily } from '../styles/typography';

export default function App() {
  const [loaded, error] = useFonts({
    [FontFamily.Fancy]: require('assets/fonts/AveriaSerifLibre-Regular.ttf'),
    [FontFamily.Normal]: require('assets/fonts/AlteHaasGroteskBold.ttf'),
  });

  return loaded ? <Home /> : <Text>Loading...</Text>;
}
