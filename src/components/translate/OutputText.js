import React, {useState, useEffect} from 'react';
import translator from '../../api/translator';

const OutputText = ({language, text}) => {
  const [translated, setTranslated] = useState('');
  const [debouncedText, setDebouncedText] = useState(text);
  
  useEffect(() => {
    const timeId = setTimeout(() => {
      setDebouncedText(text);
    }, 1000);

    return () => {
      clearTimeout(timeId);
    };
  }, [text]);

  useEffect(() => {
    const translate = async () => {
      const response = await translator.post(
        '/language/translate/v2',
        {}, // empty body
        {
          params: {
            q: debouncedText,
            target: language.value
          }
        }
      );
      setTranslated(response.data.data.translations[0].translatedText);
    };
    if (text) {
      translate();
    }
  }, [language, debouncedText]);

  return (
    <div>
      <h3>Output :</h3>
      <p>{translated}</p>
    </div>
  );
};

export default OutputText;
