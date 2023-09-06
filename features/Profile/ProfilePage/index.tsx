import { View } from 'react-native';
import { layoutStyles } from '../../../styles/layout';
import FancyText from '../../../components/FancyText';

const ProfilePage = () => {
  return (
    <View style={layoutStyles.container}>
      <FancyText>Profile</FancyText>
    </View>
  );
};

export default ProfilePage;
