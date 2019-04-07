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
	let url = WEATHER_API + 'lat=' + latitude + '&lon=' + longitude + '&appid=1c345fafe0e4bd7b3c916afbc23d0507';
	return api.get(url);
}
