import { StyleSheet } from "react-native";

export const FontFamily = {
  Fancy: 'Averia-Serif-Libre',
  Normal: 'Alte-Haas-Grotesk'
}

export const textStyles = StyleSheet.create({
  head: {
    fontFamily: FontFamily.Fancy,
    fontSize: 40,
  },
  body: {
    fontFamily: FontFamily.Normal,
    fontSize: 16
  }
});