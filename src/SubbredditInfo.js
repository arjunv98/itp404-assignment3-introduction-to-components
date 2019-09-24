import React from 'react';
import FormatNum from './FormatNum';

export default function SubbredditInfo(props) {
   if (props.posts.data !== undefined) {
      let posts = props.posts.data.children;
      let firstPost = posts[0];
      return (
         <div id="subbreddit-info">
            <h3>r/{firstPost.data.subreddit} - <FormatNum num = {firstPost.data.subreddit_subscribers} /> subscribers</h3>
         </div>
      );
   }
   return ( <div></div> );
}