import { Button, StyleSheet, Text, View } from 'react-native';
import { OtherScreenProps, Routes } from '../../types/navigation';

export const OtherScreen = ({ navigation }: OtherScreenProps) => (
  <View style={styles.container}>
    <Text>Other Screen</Text>
    <Button
      title="Navigate to Drawer"
      onPress={() =>
        navigation.navigate(Routes.Drawer, { screen: Routes.DrawerOne })
      }
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
