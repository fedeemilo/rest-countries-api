import React from 'react';

import { Search, FilterDropdown } from './utils';

const items = [
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
        value: 'Europe'
    },
    {
        id: 5,
        value: 'Oceania'
    }
];

const Home = () => {
	return (
		<div className='home'>
			<div className='home__row'>
				<Search />

				<FilterDropdown title='Filter by Region' items={items} />
			</div>
		</div>
	);
};

export default Home;
