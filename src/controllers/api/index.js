import Axios from 'axios';

export function getCountryList() {
	return Axios.get('https://restcountries.eu/rest/v1/all');
}
