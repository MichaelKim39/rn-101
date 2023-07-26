import { StyleSheet, Text, View } from 'react-native';
import { DrawerOneScreenProps } from 'types/navigation';

export const DrawerOneScreen = ({ navigation }: DrawerOneScreenProps) => (
  <View style={styles.container}>
    <Text>Drawer 1 Screen</Text>
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
