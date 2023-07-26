import { StyleSheet, Text } from "react-native";

const AndroidText = () => {
  return <Text style={styles.text}>Android</Text>;
};

export default AndroidText;

const styles = StyleSheet.create({
  text: {
    color: "blue",
    fontFamily: "Averia-Serif-Libre",
    fontSize: 90,
  },
});
