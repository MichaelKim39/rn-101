import { StyleSheet, Text, View } from 'react-native';
import { TabOneScreenProps } from 'types/navigation';

export const TabOneScreen = ({ navigation }: TabOneScreenProps) => (
  <View style={styles.container}>
    <Text>Tab 1 Screen</Text>
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
