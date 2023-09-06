import { useState } from 'react';
import { createPost } from './fixtures';

export const useFeed = () => {
  const DUMMY_POSTS = [
    createPost(),
    createPost(),
    createPost(),
    createPost(),
    createPost(),
  ];

  const [posts, setPosts] = useState(DUMMY_POSTS);

  const [modalVisible, setModalVisible] = useState(false);

  return [posts, modalVisible, setModalVisible] as const;
};
