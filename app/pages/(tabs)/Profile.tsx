import { Tabs } from 'expo-router';
import { Routes } from '../../../types/navigation';
import ProfilePage from '../../../features/Profile/ProfilePage';

const Profile = () => (
  <>
    <Tabs.Screen
      options={{
        title: Routes.Profile,
      }}
    />
    <ProfilePage />
  </>
);

export default Profile;
