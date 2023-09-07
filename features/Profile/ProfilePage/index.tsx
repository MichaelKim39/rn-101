import { View, Text } from 'react-native';
import { layoutStyles } from '../../../styles/layout';
import { textStyles } from '../../../styles/typography';

const ProfilePage = () => {
  return (
    <View style={layoutStyles.container}>
      <Text style={textStyles.body}>Profile</Text>
    </View>
  );
};

export default ProfilePage;
