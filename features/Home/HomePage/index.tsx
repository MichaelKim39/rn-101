import { View, Text, Image } from 'react-native';
import { Link } from 'expo-router';
import { Routes } from '../../../types/navigation';
import { layoutStyles } from '../../../styles/layout';
import { Colors } from '../../../styles/colors';
import { textStyles } from '../../../styles/typography';

const HomePage = () => (
  <View style={layoutStyles.container}>
    <Image></Image>
    <Text style={textStyles.head}>Welcome</Text>
    <Link href={`/pages/${Routes.Profile}`}>
      <Text style={textStyles.body}>Enter App</Text>
    </Link>
  </View>
);

export default HomePage;
