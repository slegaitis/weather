import { APP_STATE, SETUP_APP_STATE } from '../../constants';
import { getCountryList, getWeatherByCoords, getWeatherByName } from '../api';
import { appInitialState } from '../state/reducers/app.reducer';
import { updateGeolocationAction, updateWeatherBasedOnName } from '../state/actions/app.actions';

export function GetCoordsCtrl(dispatch) {
	// check if geolocation is supported/enabled on current browser
	if ('geolocation' in navigator) {
		navigator.geolocation.getCurrentPosition(function(position) {
			GetWeatherForCoordsCtrl(dispatch, position.coords);
		});
	} else {
		console.log('geolocation is not enabled on this browser');
		// TODO: we could potentially make a call to an api as secondary option if geolocation is not supported
	}
}

export function GetWeatherForCoordsCtrl(dispatch, position) {
	getWeatherByCoords(position.latitude, position.longitude)
		.then((res) => {
			updateGeolocationAction(dispatch, position, res.data);
		})
		.catch((e) => console.error(e));
}

export function GetWeatherByString(dispatch, name) {
	getWeatherByName(name)
		.then((res) => {
			updateWeatherBasedOnName(dispatch, res.data, name);
		})
		.catch((e) => {
			console.error(e);
		});
}

export function SetupApplicationCtrl(dispatch) {
	let storage = localStorage.getItem(APP_STATE);
	if (!storage) {
		getCountryList().then((response) => {
			const countryNames = response.data.map((item) => item.name.toLowerCase());
			const initialState = {
				...appInitialState,
				countries: countryNames
			};
			dispatch({ type: SETUP_APP_STATE, payload: initialState });
			localStorage.setItem(APP_STATE, JSON.stringify(initialState));
		});
	} else {
		dispatch({ type: SETUP_APP_STATE, payload: JSON.parse(storage) });
	}
}
