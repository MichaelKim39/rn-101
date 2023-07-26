import { Text } from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './src/screens/HomeScreen';
import { OtherScreen } from './src/screens/OtherScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  DrawerParams,
  Routes,
  StackParams,
  TabParams,
} from './src/types/navigation';
import { DrawerOneScreen } from './src/screens/DrawerOneScreen';
import { DrawerTwoScreen } from './src/screens/DrawerTwoScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabOneScreen } from './src/screens/TabOneScreen';
import { TabTwoScreen } from './src/screens/TabTwoScreen';

function Tabs() {
  const Tab = createBottomTabNavigator<TabParams>();

  return (
    <Tab.Navigator>
      <Tab.Screen name={Routes.TabOne} component={TabOneScreen} />
      <Tab.Screen name={Routes.TabTwo} component={TabTwoScreen} />
    </Tab.Navigator>
  );
}

function Drawer() {
  const Drawer = createDrawerNavigator<DrawerParams>();

  return (
    <Drawer.Navigator initialRouteName={Routes.DrawerOne}>
      <Drawer.Screen name={Routes.DrawerOne} component={DrawerOneScreen} />
      <Drawer.Screen name={Routes.DrawerTwo} component={DrawerTwoScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  const [loaded, error] = useFonts({
    'Averia-Serif-Libre': require('./assets/fonts/AveriaSerifLibre-Regular.ttf'),
  });

  const Stack = createNativeStackNavigator<StackParams>();

  return loaded ? (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={Routes.Home} component={HomeScreen} />
        <Stack.Screen name={Routes.Other} component={OtherScreen} />
        <Stack.Screen name={Routes.Drawer} component={Drawer} />
        <Stack.Screen name={Routes.Tab} component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  ) : (
    <Text>Loading...</Text>
  );
}
