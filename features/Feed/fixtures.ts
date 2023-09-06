import { PostType } from "./types"

export const createPost = (partialData?: Partial<PostType>): PostType => { 
  return {
    title: 'Very Nice Post Title',
    description: 'This description for this nice post is here',
    image: `https://source.unsplash.com/random/${Math.random() * 100}`,
    ...partialData
  }
}