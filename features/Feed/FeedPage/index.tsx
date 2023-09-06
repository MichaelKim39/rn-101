import { StyleSheet, Text, View } from 'react-native';
import { useFeed } from '../useFeed';
import { FlashList } from '@shopify/flash-list';
import Post from '../components/Post';
import { textStyles } from '../../../styles/typography';
import PostModal from '../components/PostModal';

const FeedPage = () => {
  const [posts, modalVisible, setModalVisible] = useFeed();

  return (
    <View style={styles.container}>
      <View>
        <Text style={textStyles.head}>My Feed</Text>
      </View>
      <FlashList
        data={posts}
        renderItem={({ item: post }) => (
          <Post
            post={post}
            onPress={() => {
              setModalVisible(true);
            }}
          />
        )}
        estimatedItemSize={15}
      />
      <PostModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
});

export default FeedPage;
