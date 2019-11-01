import { UseLocalStorage } from './UseLocalStorage.js';
import { useEffect } from 'react';

const UseDarkMode = (key, initialValue) => {
  const [value, setValue] = UseLocalStorage(key, initialValue);

  const handleChanges = updatedValue => {
    setValue(updatedValue);
  };

  useEffect(() => {
    if (value === true) {
      document.querySelector('body').classList.add('dark-mode');
    } else {
      document.querySelector('body').classList.remove('dark-mode');
    }
  }, [value]);

  return [value, setValue, handleChanges];
};

export default UseDarkMode;
