import { Button, StyleSheet, Text, View } from 'react-native';
import { DrawerTwoScreenProps, Routes } from '../../types/navigation';

export const DrawerTwoScreen = ({ navigation }: DrawerTwoScreenProps) => (
  <View style={styles.container}>
    <Text>Drawer 2 Screen</Text>
    <Button
      title="Navigate to Bottom Tabs Screen"
      onPress={() => {
        navigation.navigate(Routes.Tab, { screen: Routes.TabOne });
      }}
    />
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
