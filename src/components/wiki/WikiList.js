import React from 'react';
import WikiItem from './WikiItem';

const WikiList = ({pages}) => {
  return (
    <ul className='list-group'>
      {pages.map(page =>
        <WikiItem key={page.pageid} page={page} />
      )}
    </ul>
  );
}

export default WikiList;
