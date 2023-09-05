import { Drawer } from 'expo-router/drawer';
import { Routes } from '../../types/navigation';

export default function DrawerLayout() {
  return <Drawer screenOptions={{ headerShown: false, swipeEdgeWidth: 0 }} />;
}
