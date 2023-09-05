import { Tabs } from 'expo-router/tabs';
import { Routes } from '../../types/navigation';

export default function DrawerLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name={Routes.TabOne}
        options={{
          tabBarLabel: Routes.TabOne,
          title: Routes.TabOne,
        }}
      />
      <Tabs.Screen
        name={Routes.TabTwo}
        options={{
          tabBarLabel: Routes.TabTwo,
          title: Routes.TabTwo,
        }}
      />
    </Tabs>
  );
}
