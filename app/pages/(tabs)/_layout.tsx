import { Tabs } from 'expo-router/tabs';
import { Routes } from '../../../types/navigation';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name={Routes.Profile}
        options={{
          tabBarLabel: Routes.Profile,
          title: Routes.Profile,
        }}
      />
      <Tabs.Screen
        name={Routes.Feed}
        options={{
          tabBarLabel: Routes.Feed,
          title: Routes.Feed,
        }}
      />
    </Tabs>
  );
}
