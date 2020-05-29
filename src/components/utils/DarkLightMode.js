import React, { useState, useEffect } from 'react';
import Luna from '../../assets/img/luna.svg';

const DarkLightMode = (props) => {

    if (JSON.parse(localStorage.getItem('DARK_MODE')) === true) {
		document.body.classList.add('dark-mode');
	}

	const mode = Boolean(localStorage.getItem('DARK_MODE'));
    const [darkMode, setDarkMode] = useState(mode);
    const [textMode, setTextMode] = useState('');
    
    let darkText = 'Light Mode';
    let lightText = 'Dark Mode';

    useEffect(() => {
        if (document.body.classList.contains('dark-mode')) {
            setTextMode(darkText);
        } else {
            setTextMode(lightText);
        }
    })

    const handleModeChange = (e) => {
        e.preventDefault();
		if (!darkMode) {
			document.body.classList.add('dark-mode');
		} else {	
			document.body.classList.remove('dark-mode');
		}

		setDarkMode(!darkMode);
		localStorage.setItem('DARK_MODE', !darkMode);
	};

	return (
		<div>
			<a href='' className='header__mode flex-jc-sb' onClick={handleModeChange}><img src={Luna} />{textMode}</a>
		</div>
	);
};

export default DarkLightMode;