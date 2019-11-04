import React from 'react';
import UseDarkMode from '../components/hooks/UseDarkMode.js';

const Navbar = () => {
  const [darkMode, setDarkMode] = UseDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className='navbar'>
      <div className='dark-mode__toggle'>
        <div onClick={toggleMode} className={darkMode ? 'toggle toggled' : 'toggle'} />
      </div>
    </nav>
  );
};

export default Navbar;
