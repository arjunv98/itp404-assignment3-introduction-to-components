import React from 'react';
import FormatNum from './FormatNum';

export default function Post(props) {
   let post = props.post.data;
   if (post.num_comments > 0) {

   }
   return (
      <div className="post">
         <a href={post.url} target="_blank" rel="noopener noreferrer">
            {post.title}
         </a>
         <p>{post.score} upvotes</p>
         <p>{post.num_comments > 0 ? "No" : <FormatNum num = {post.num_comments} />} comments</p>
      </div>
   );
}