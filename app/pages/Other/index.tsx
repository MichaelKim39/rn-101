import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

const Other = () => (
  <View style={styles.container}>
    <Text>Other Screen</Text>
    <Link href="/pages/DrawerOne/">Navigate to Drawer One Page</Link>
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

export default Other;
