import { Tabs } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { Routes } from '../../../types/navigation';

const TabOne = () => (
  <View style={styles.container}>
    <Tabs.Screen
      options={{
        title: Routes.TabOne,
      }}
    />
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

export default TabOne;
