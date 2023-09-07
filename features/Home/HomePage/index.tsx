import { View, Text, Image, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { Routes } from '../../../types/navigation';
import { layoutStyles } from '../../../styles/layout';
import { Colors } from '../../../styles/colors';
import { textStyles } from '../../../styles/typography';
import Basketball from '../../../components/Basketball';

const HomePage = () => (
  <View style={styles.root}>
    <View style={styles.basketballContainer}>
      <Basketball />
    </View>
    <View style={styles.textContainer}>
      <Text style={[textStyles.head, { color: 'white' }]}>Welcome</Text>
      <Link href={`/pages/${Routes.Profile}`}>
        <Text style={[textStyles.body, { color: 'white' }]}>Enter App</Text>
      </Link>
    </View>
  </View>
);

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  textContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  basketballContainer: {
    flex: 1,
  },
});

export default HomePage;
