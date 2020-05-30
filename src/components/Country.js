import React from 'react';

const Country = ({ flag, name, population, region, capital }) => {
	return (
		<a href='#' className='country'>
			<div className='country__box'>
				<div class='country__flag'>
					<img className='country__img' src={flag} />
				</div>

				<div className='country__data'>
					<h3>{name}</h3>
					<ul>
						<li><span>Population: </span>{population}</li>
						<li><span>Region: </span>{region}</li>
						<li><span>Capital: </span>{capital}</li>
					</ul>
				</div>
			</div>
		</a>
	);
};

export default Country;
