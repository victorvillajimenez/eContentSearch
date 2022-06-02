import React from 'react';

const WikiItem = ({page}) => {
  return (
    <li className='list-group-item'>
      <h5>{page.title}</h5>
      <p dangerouslySetInnerHTML={{__html: page.snippet}}></p>
      <a
        className='float-end btn btn-primary'
        href={`https://en.wikipedia.org?curid=${page.pageid}`}
        target='_blank'
      >
        GO
      </a>
    </li>
  );
};

export default WikiItem;
