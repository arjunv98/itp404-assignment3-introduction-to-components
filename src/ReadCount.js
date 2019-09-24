import React from 'react';

export default class ReadCount extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         readCount: 0
      };
   }
   incrementCount = async (event) => {
      this.props.onClick(this.state.readCount);
   }
   render() {
      return (
         <div id="read-count">
            <h5>Read Count</h5>
            <p>{this.state.readCount}</p>
         </div>
      );
   }
}