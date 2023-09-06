import { StyleSheet, Dimensions } from "react-native";

export const getHeightStyle = (percentage: number) => {
  return Dimensions.get('screen').height * percentage/100
}

export const layoutStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});