import { StyleSheet, Text } from "react-native";

const AppleText = () => {
  return <Text style={styles.text}>Apple</Text>;
};

export default AppleText;

const styles = StyleSheet.create({
  text: {
    color: "red",
    fontFamily: "Averia-Serif-Libre",
    fontSize: 90,
  },
});
