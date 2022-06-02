import Reac, {useState} from 'react';
import Books from './components/books/Books';
import PicsPage from './components/pics/PicsPage';
import VideoPage from './components/videos/VideoPage';
import WikiPage from './components/wiki/WikiPage';
import Translator from './components/translate/TranslatorPage';
import './App.css';

export default function App() {
  const [navLink, setNavLink] = useState('books');

  const onClick = tab => setNavLink(tab);
  const isTabActive = tab => navLink === tab;
  const getActiveClass = tab => isTabActive(tab) ? 'active' : '';

  return (
    <div className='card'>
      <div className='card-header'>
        <ul className='nav nav-tabs card-header-tabs'>
          <li className='nav-item'>
            <a
              onClick={() => onClick('books')}
              className={`nav-link ${getActiveClass('books')}`}
            >
              Books
            </a>
          </li>
          <li className='nav-item'>
            <a
              onClick={() => onClick('pics')}
              className={`nav-link ${getActiveClass('pics')}`}
            >
              Pics
            </a>
          </li>
          <li className='nav-item'>
            <a
              onClick={() => onClick('videos')}
              className={`nav-link ${getActiveClass('videos')}`}
            >
              Videos
            </a>
          </li>
          <li className='nav-item'>
            <a
              onClick={() => onClick('wiki')}
              className={`nav-link ${getActiveClass('wiki')}`}
            >
              Wiki
            </a>
          </li>
          <li className='nav-item'>
            <a
              onClick={() => onClick('translator')}
              className={`nav-link ${getActiveClass('translator')}`}
            >
              Translator
            </a>
          </li>
        </ul>
      </div>
      <div className='card-body'>
        {isTabActive('books') && <Books />}
        {isTabActive('pics') && <PicsPage />}
        {isTabActive('videos') && <VideoPage />}
        {isTabActive('wiki') && <WikiPage />}
        {isTabActive('translator') && <Translator />}
      </div>
    </div>
  );
}
