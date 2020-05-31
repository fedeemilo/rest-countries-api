import React, { useEffect, useState } from 'react';
import { NavBar } from './';
import { BackHome } from './utils';
import axios from 'axios';

const CountryDetail = (props) => {
	const [country, setCountry] = useState({});
	const [borderCountries, setBorderCountries] = useState([]);
	const [currencies, setCurrencies] = useState('');
	const [languages, setLanguages] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			let countryData = await axios.get(
				`https://restcountries.eu/rest/v2/name/${props.match.params.name}`
			);

			countryData.data[0].borders.forEach(async (border) => {
				let borderCountry = await axios.get(
					`https://restcountries.eu/rest/v2/alpha/${border}`
                );
                
                console.log(borderCountry);

				setBorderCountries((borderCountries) =>
					borderCountries.concat(borderCountry.data.name)
				);
			});

            setCountry(countryData.data[0]);
			setCurrencies(countryData.data[0].currencies[0].name);
			setLanguages(countryData.data[0].languages);
		};

		fetchData();
	}, [props.match.params.name]);

	let languageArray = [];

	languages.forEach((language) => {
		languageArray.push(language.name);
    });
    
    console.log(country);

	return (
		<div>
			<NavBar />
			<BackHome history={props.history} />

			<div className='country-detail container-fluid'>
				<div className='row'>
					<div className='col-md-6 col-xs-12 country-detail__flag'>
						<img alt='country-flag' src={country.flag} />
					</div>

					<div className='col-md-6 col-xs-12 country-detail__details'>
						<h2>{country.name}</h2>
						<div className='row country-detail__data'>
							<div className='col'>
								<ul>
									<li>
										<strong>Native Name:</strong> {country.nativeName}
									</li>
									<li>
										<strong>Population:</strong> {country.population}
									</li>
									<li>
										<strong>Region:</strong> {country.region}
									</li>
									<li>
										<strong>Sub Region:</strong> {country.subregion}
									</li>
									<li>
										<strong>Capital:</strong> {country.capital}
									</li>
								</ul>
							</div>
							<div className='col two'>
								<ul>
									<li>
										<strong>Top Level Domain:</strong> {country.topLevelDomain}
									</li>
									<li>
										<strong>Currencies:</strong> {currencies}
									</li>
									<li>
										<strong>Languages:</strong> {languageArray.join(', ')}
									</li>
								</ul>
							</div>
						</div>
						<div className='row'>
							<div className='col'>
								<h3>Border Countries</h3>
                                <ul className='border-countries'>
                                    {borderCountries.length > 0 ? borderCountries.map((border) =>(
                                        <li><a href={'/country/'+border}>{border}</a></li> 
                                    )) : 'No border countries found'}
                                </ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CountryDetail;
