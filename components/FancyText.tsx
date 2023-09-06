import { StyleSheet, Text, TextStyle } from 'react-native';
import { Colors } from '../styles/colors';

type FancyTextProps = {
  children: React.ReactNode;
  color?: Colors;
  fontSize?: number;
  style?: TextStyle;
};

const FancyText = ({
  children,
  fontSize = 70,
  color = Colors.Primary,
  style,
}: FancyTextProps) => {
  return (
    <Text style={[style, styles.text, { fontSize, color }]}>{children}</Text>
  );
};

export default FancyText;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Averia-Serif-Libre',
  },
});
