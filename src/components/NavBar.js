import React from 'react';
import Luna from '../assets/img/luna.svg';
import { DarkLightMode } from './utils';

function NavBar() {
	return (
		<div className='header'>
			<nav>
				<div className='header__links'>
					<a href='#' className='header__text flex-jc-sb'>
						<p>Where in the world?</p>
					</a>

					<DarkLightMode />

				</div>
			</nav>
		</div>
	);
}

export default NavBar;
