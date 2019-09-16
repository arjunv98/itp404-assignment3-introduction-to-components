import React from 'react';
import FormatNum from './FormatNum';

export default function Header(props) {
   let posts = props.posts.data.children;
   let firstPost = posts[0];
   return (
      <div>
         <h3>r/{firstPost.data.subreddit} - <FormatNum num = {firstPost.data.subreddit_subscribers} /> subscribers</h3>
      </div>
   );
}