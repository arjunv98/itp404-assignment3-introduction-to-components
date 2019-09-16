import React from 'react';
import Post from './Post';

export default function PostList(props) {
   let posts = props.posts.data.children;
   return (
      posts.map((post) => {
         return <Post post={post} key={post.data.id} />
      })
   );
}