import { Button, Platform, StyleSheet, View } from 'react-native';
import { HomeScreenProps } from 'types/navigation';
import AndroidText from '../../components/AndroidText';
import AppleText from '../../components/AppleText';

export const HomeScreen = ({ navigation }: HomeScreenProps) => (
  <View style={styles.container}>
    {Platform.OS === 'android' ? <AndroidText /> : <AppleText />}
    <Button
      title="Navigate to Other Screen"
      onPress={() => navigation.navigate('Other')}
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
