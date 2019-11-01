import { useEffect } from 'react';
import UseLocalStorage from './UseLocalStorage';

const UseDarkMode = () => {
  const [storedValue, setstoredValue] = UseLocalStorage('darkMode');

  useEffect(() => {
    if (storedValue) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [storedValue]);
  return [storedValue, setstoredValue];
};

export default UseDarkMode;
