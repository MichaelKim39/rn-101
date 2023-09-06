import { Pressable, StyleSheet, Text, View } from 'react-native';
import { PostType } from '../types';
import { ImageBackground } from 'expo-image';
import { getHeightStyle } from '../../../styles/layout';
import { textStyles } from '../../../styles/typography';

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

type PostProps = {
  post: PostType;
  onPress: () => void;
};

const Post = ({ post, onPress }: PostProps) => {
  return (
    <Pressable onPress={onPress}>
      <ImageBackground
        style={styles.container}
        imageStyle={styles.image}
        source={post.image}
        placeholder={blurhash}
        contentFit="cover"
        transition={1000}
      >
        <View style={styles.textContainer}>
          <Text style={textStyles.body}>{post.title}</Text>
          <Text>{post.description}</Text>
        </View>
      </ImageBackground>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    backgroundColor: 'rgba( 255, 255, 255, 0.4)',
    borderRadius: 5,
    padding: 5,
  },
  container: {
    height: getHeightStyle(70),
    flex: 1,
    marginVertical: 7,
    padding: 10,
  },
  image: {
    borderRadius: 10,
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default Post;
