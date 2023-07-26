import { StyleSheet, Text, View } from 'react-native';
import { TabTwoScreenProps } from 'types/navigation';

export const TabTwoScreen = ({ navigation }: TabTwoScreenProps) => (
  <View style={styles.container}>
    <Text>Tab 2 Screen</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe7d9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
