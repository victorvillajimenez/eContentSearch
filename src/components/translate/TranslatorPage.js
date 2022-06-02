import React, {useState, useEffect} from 'react';
import Dropdown from './Dropdown';
import OutputText from './OutputText';
import translator from '../../api/translator';

const languages = [
  {
    label: 'English',
    value: 'en'
  },
  {
    label: 'Spanish',
    value: 'es'
  },
  {
    label: 'French',
    value: 'fr'
  }
];

const TranslatorPage = () => {
  const [selected, setSelected] = useState(languages[0]);
  const [text, setText] = useState('');

  const onTextChange = e => setText(e.target.value);

  return (
    <div className='container'>
      <div className='card-body'>
        <label
          htmlFor='textToConvert'
          className='form-label'
        >
          Enter a text
        </label>
        <input
          id='textToConvert'
          type='text'
          className='form-control'
          value={text}
          onChange={onTextChange}
        />
        <hr />
        <Dropdown
          data={languages}
          label='Select a language'
          selected={selected}
          setSelected={setSelected}
        />
        <hr />
        <OutputText language={selected} text={text} />
      </div>
    </div>
  );
};

export default TranslatorPage;
