import Axios from 'axios';
import { WEATHER_API } from '../../constants';

const api = Axios.create({
	headers: {
		'Content-type': 'application/json',
		Accept: 'application/json'
	}
});

export function getCountryList() {
	return api.get('https://restcountries.eu/rest/v1/all');
}

export function getWeatherByCoords(latitude, longitude) {
	console.log(latitude, longitude);
	let url = WEATHER_API + latitude + ',' + longitude;
	return api.get(url);
}
