import React from 'react';

export default function ReadCount(props) {
   return (
      <div id="read-count">
         <h5>Read Count</h5>
         <p>{props.readCount}</p>
      </div>
   );
}