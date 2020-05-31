import React from 'react';

const Country = ({ flag, name, population, region, capital }) => {
	return (
		<a href={'/country/' + name} className='country'>
			<div className='country__box'>
				<div className='country__flag'>
					<img className='country__img' alt='flag' src={flag} />
				</div>

				<div className='country__data'>
					<h3>{name}</h3>
					<ul>
						<li><span>Population: </span>{population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</li>
						<li><span>Region: </span>{region}</li>
						<li><span>Capital: </span>{capital}</li>
					</ul>
				</div>
			</div>
		</a>
	);
};

export default Country;
