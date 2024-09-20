import React from 'react'
import useLocalStorage from './useLocalStorage';
import './style.css';

export default function LightDarkMode() {

    //le hook personnalise useLocalStorage est utilise pour conserver entre 2 sessions de navigation le theme enregistre
    
    const [theme, setTheme] = useLocalStorage('theme', 'dark');

    function handleToggleTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

  return (
    <div className='light-dark-mode' data-theme={theme}>
        <div className='container'>
            <p>Hello Worl !</p>
            <button onClick={handleToggleTheme}>Change Theme</button>
        </div>
    </div>
  )
}
