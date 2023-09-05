import { Platform, StyleSheet, View } from 'react-native';
import AndroidText from '../../../components/AndroidText';
import AppleText from '../../../components/AppleText';
import { Link } from 'expo-router';

const Home = () => (
  <View style={styles.container}>
    {Platform.OS === 'android' ? <AndroidText /> : <AppleText />}
    <Link href="/(drawer)/DrawerOne/">Navigate to Drawer One Page</Link>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe7d9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
