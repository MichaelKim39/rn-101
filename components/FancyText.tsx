import { StyleSheet, Text } from 'react-native';

type FancyTextProps = {
  children: React.ReactNode;
};

const FancyText = ({ children }: FancyTextProps) => {
  return <Text style={styles.text}>{children}</Text>;
};

export default FancyText;

const styles = StyleSheet.create({
  text: {
    color: 'red',
    fontFamily: 'Averia-Serif-Libre',
    fontSize: 70,
  },
});
