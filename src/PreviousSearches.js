import React from 'react';

export default function PreviousSearches(props) {
   return (
      props.previousSearches.map((searchValue) => {
         return (
            <button type="button" className="prev-search-button" key={searchValue} onClick={props.handleClick.bind(this, searchValue)}>
               {searchValue}
            </button>
         )
      })
   );
}