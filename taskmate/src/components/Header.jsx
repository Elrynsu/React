import { useEffect, useState } from 'react';
import Logo from '../assets/logo.png';


export default function Header() {
    const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('theme')) || 'light');


    useEffect(() => {
        document.documentElement.classList.remove("light", "medium", "dark", "gOne", "gTwo", "gThree");
        document.documentElement.classList.add(theme);
        localStorage.setItem('theme', JSON.stringify(theme))
    }, [theme])

return (
    <header>
        <div className="logo">
            <img src={Logo} alt="Taskmate Logo" />
            <span>Taskmate</span>
        </div>
        <div className='themeSelector'>
            <span onClick={() => setTheme('light')} className='light'></span>
            <span onClick={() => setTheme('medium')} className='medium'></span>
            <span onClick={() => setTheme('dark')} className='dark'></span>
            <span onClick={() => setTheme('gOne')} className='gOne'></span>
            <span onClick={() => setTheme('gTwo')} className='gTwo'></span>
            <span onClick={() => setTheme('gThree')} className='gThree'></span>
        </div>
    </header>
  )
}
