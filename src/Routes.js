import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import { CountryDetail, Main } from './components';

const Routes = () => {
	return (
		<Switch>
			<Route exact path='/' component={Main} />
			<Route exact path='/country/:name' component={CountryDetail} />
		
		</Switch>
	);
};

export default Routes;