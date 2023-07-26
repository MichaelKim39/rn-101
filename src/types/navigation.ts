import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { CompositeScreenProps, NavigatorScreenParams } from "@react-navigation/native";
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
  [Routes.Drawer]: NavigatorScreenParams<DrawerParams>;
  [Routes.Tab]: NavigatorScreenParams<TabParams>;
}

export type HomeScreenProps = NativeStackScreenProps<StackParams, Routes.Home>;
export type OtherScreenProps = NativeStackScreenProps<StackParams, Routes.Other>;
export type DrawerOneScreenProps = CompositeScreenProps<DrawerScreenProps<DrawerParams, Routes.DrawerOne>, NativeStackScreenProps<StackParams>>;
export type DrawerTwoScreenProps = DrawerScreenProps<DrawerParams, Routes.DrawerTwo>;
export type TabOneScreenProps = BottomTabScreenProps<TabParams, Routes.TabOne>;
export type TabTwoScreenProps = BottomTabScreenProps<TabParams, Routes.TabTwo>;