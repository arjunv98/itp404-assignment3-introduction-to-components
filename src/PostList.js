import React from 'react';
import Post from './Post';

export default function PostList(props) {
   if (props.posts.data !== undefined) {
      let posts = props.posts.data.children;
      return (
         posts.map((post) => {
            return <Post post={post} onLinkClick={props.incrementCount} key={post.data.id} />
         })
      );
   }
   return ( <div></div> );
}