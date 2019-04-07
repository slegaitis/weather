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
	return api.get(WEATHER_API + latitude + ',' + longitude);
}

export function getWeatherByName(name) {
	return api.get(WEATHER_API + name);
}
