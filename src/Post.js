import React from 'react';
import FormatNum from './FormatNum';

export default function Post(props) {
   let post = props.post.data;
   return (
      <div className="post">
         <a href={post.url} target="_blank" rel="noopener noreferrer" onClick={props.onLinkClick}>
            {post.title}
         </a>
         <p>{post.score} upvotes</p>
         <p>{(post.num_comments > 0) ? <FormatNum num={post.num_comments} /> : "No"} comments</p>
      </div>
   );
}