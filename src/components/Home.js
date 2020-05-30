import React, { useState, useEffect } from 'react';

import { FilterDropdown } from './utils';
import { Country } from './';
import axios from 'axios';

const regions = [
	{
		id: 1,
		value: 'Africa',
	},
	{
		id: 2,
		value: 'America',
	},
	{
		id: 3,
		value: 'Asia',
	},
	{
		id: 4,
		value: 'Europe',
	},
	{
		id: 5,
		value: 'Oceania',
	},
];

const Home = () => {
	const [countries, setCountries] = useState([]);
	const [input, setInput] = useState('');
	const [region, setRegion] = useState('');
	const [title, setTitle] = useState('Filter by Region');

	useEffect(async () => {
		let axiosCountries = await axios.get(
			'https://restcountries.eu/rest/v2/all'
		);
		let filterData = axiosCountries.data.filter((country) => {
			return country.name !== 'United States Minor Outlying Islands';
		});

		filterData.sort((a, b) => {
			return a - b;
		});
		setCountries((countries) => countries.concat(filterData));
	}, []);

	const handleInput = (e) => {
		setInput(e.target.value);
	};

	const handleRegion = (region) => {
		setInput(region);
	};

	const handleTitle = (title) => {
		setTitle(title);
	};

	return (
		<div className='home'>
			<div className='home__row'>
				<div className='home__search'>
					<ion-icon name='search-outline'></ion-icon>
					<input
						type='text'
						onInput={handleInput}
						placeholder='Search for a country...'
					/>
				</div>

				<FilterDropdown
					title={title}
					items={regions}
					onSelectRegion={handleRegion}
					onSelectTitle={handleTitle}
				/>
			</div>
			<div className='countries'>
				{countries
					.filter(
						(country) =>
							input === '' ||
							country.name.toLowerCase().includes(input.toLowerCase()) ||
							country.region.toLowerCase().includes(input.toLowerCase())
					)
					.map((country) => (
						<Country
							flag={country.flag}
							name={country.name}
							population={country.population}
							region={
								country.region === 'Americas'
									? country.region.slice(0, -1)
									: country.region
							}
							capital={country.capital}
						/>
					))}
			</div>
		</div>
	);
};

export default Home;
