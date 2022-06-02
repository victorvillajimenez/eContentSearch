import React, {useState, useEffect, useRef} from 'react';

const Dropdown = ({data, label, selected, setSelected}) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const closeOutsideDropdown = e => {
      if (ref.current.contains(e.target)) {
        return;
      }
      setIsOpen(false);
    };

    window.document.addEventListener(
      'click',
      closeOutsideDropdown,
      {capture: true}
    );

    return () => {
      window.document.removeEventListener(
        'click',
        closeOutsideDropdown,
        {capture: true}
      );
    };
  }, []);

  return (
    <div className='dropdown'>
      <button
        ref={ref} 
        className='btn btn-primary dropdown-toggle'
        type='button'
        id='dropdownToggle'
        data-bs-toggle='dropdown'
        aria-expanded='true'
        data-bs-auto-close='true'
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected.label}
      </button>
      <ul
        className={`dropdown-menu ${isOpen ? 'show' : ''}`}
        aria-labelledby='dropdownToggle'
      >
        {data.map(item => {
          if (item.value === selected.value) {
            return null;
          }
          return (
            <li key={item.value}>
              <button
                className='dropdown-item'
                onClick={() => {
                  setSelected(item);
                  setIsOpen(false);
                }}
              >
                {item.label}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dropdown;
