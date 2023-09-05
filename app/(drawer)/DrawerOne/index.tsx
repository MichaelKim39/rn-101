import { DrawerToggleButton } from '@react-navigation/drawer';
import { StyleSheet, Text, View } from 'react-native';
import { Routes } from '../../../types/navigation';
import { Drawer } from 'expo-router/drawer';

const DrawerOne = () => (
  <View style={styles.container}>
    <Drawer.Screen
      options={{
        title: Routes.DrawerOne,
        drawerLabel: Routes.DrawerOne,
        headerShown: true,
        headerLeft: () => <DrawerToggleButton />,
      }}
    />
    <Text>Drawer 1 Screen</Text>
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

export default DrawerOne;
