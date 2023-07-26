import { NativeStackScreenProps } from "@react-navigation/native-stack";

export enum Routes {
  Home = 'Home',
  Other = 'Other',
  Drawer = 'Drawer',
  DrawerOne = 'DrawerOne',
  DrawerTwo = 'DrawerTwo',
  Tab = 'Tab',
  TabOne = 'TabOne',
  TabTwo = 'TabTwo',
}

export type TabParams = {
  [Routes.TabOne]: undefined;
  [Routes.TabTwo]: undefined;
}

export type DrawerParams = {
  [Routes.DrawerOne]: undefined;
  [Routes.DrawerTwo]: undefined;
}

export type StackParams = {
  [Routes.Home]: undefined;
  [Routes.Other]: undefined;
  [Routes.Drawer]: undefined;
  [Routes.Tab]: undefined;
};

export type HomeScreenProps = NativeStackScreenProps<StackParams, Routes.Home>;
export type OtherScreenProps = NativeStackScreenProps<StackParams, Routes.Other>;
export type DrawerOneScreenProps = NativeStackScreenProps<DrawerParams, Routes.DrawerOne>;
export type DrawerTwoScreenProps = NativeStackScreenProps<DrawerParams, Routes.DrawerTwo>;
export type TabOneScreenProps = NativeStackScreenProps<TabParams, Routes.TabOne>;
export type TabTwoScreenProps = NativeStackScreenProps<TabParams, Routes.TabTwo>;