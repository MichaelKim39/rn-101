import { DrawerToggleButton } from '@react-navigation/drawer';
import Drawer from 'expo-router/drawer';
import { StyleSheet, Text, View } from 'react-native';
import { Routes } from '../../../types/navigation';
import { Link } from 'expo-router';

const DrawerTwo = () => (
  <View style={styles.container}>
    <Drawer.Screen
      options={{
        title: Routes.DrawerTwo,
        drawerLabel: Routes.DrawerTwo,
        headerShown: true,
        headerLeft: () => <DrawerToggleButton />,
      }}
    />
    <Text>Drawer 2 Screen</Text>
    <Link href="/(tabs)/TabTwo/">Navigate to Tab One</Link>
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

export default DrawerTwo;
