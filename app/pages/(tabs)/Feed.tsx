import { Tabs } from 'expo-router';
import { Routes } from '../../../types/navigation';
import FeedPage from '../../../features/Feed/FeedPage';

const Feed = () => (
  <>
    <Tabs.Screen
      options={{
        title: Routes.Feed,
      }}
    />
    <FeedPage />
  </>
);

export default Feed;
