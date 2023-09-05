import { View } from 'react-native';
import FancyText from '../../../components/FancyText';
import { Link } from 'expo-router';
import { Routes } from '../../../types/navigation';
import { layoutStyles } from '../../../styles/layout';

const HomePage = () => (
  <View style={layoutStyles.container}>
    <FancyText>Welcome</FancyText>
    <Link href={`/pages/${Routes.Profile}`}>Enter App</Link>
  </View>
);

export default HomePage;
