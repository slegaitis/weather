import { APP_STATE } from '../../constants';
import { getCountryList, getWeatherByCoords, getWeatherByName } from '../api';
import { appInitialState } from '../state/reducers/app.reducer';
import {
	updateGeolocationAction,
	updateWeatherBasedOnName,
	setupAppState,
	setLoading,
	currentLocationEnabled
} from '../state/actions/app.actions';
import { ToastsStore } from 'react-toasts'; // TODO: this lib is too big (find better solution)

export function GetCoordsCtrl(dispatch) {
	// check if geolocation is supported/enabled on current browser
	if ('geolocation' in navigator) {
		navigator.geolocation.getCurrentPosition(
			function(position) {
				GetWeatherForCoordsCtrl(dispatch, position.coords);
			},
			function(error) {
				console.log(error);
				currentLocationEnabled(dispatch, false);
			}
		);
	} else {
		console.log('geolocation is not enabled on this browser');
		// TODO: we could potentially make a call to an api as secondary option if geolocation is not supported
	}
}

export function GetWeatherForCoordsCtrl(dispatch, position) {
	setLoading(dispatch, true);

	getWeatherByCoords(position.latitude, position.longitude)
		.then((res) => {
			updateGeolocationAction(dispatch, position, res.data);
		})
		.catch((e) => ToastsStore.error('Error unable to find weather for this location now'));
}

export function GetWeatherByStringCtrl(dispatch, name) {
	setLoading(dispatch, true);
	getWeatherByName(name)
		.then((res) => {
			console.log(res.data.current);
			updateWeatherBasedOnName(dispatch, res.data, name);
		})
		.catch((e) => ToastsStore.error('Error unable to find weather for this location now'));
}

export function SetupApplicationCtrl(dispatch) {
	let storage = localStorage.getItem(APP_STATE);
	if (!storage) {
		getCountryList().then((response) => {
			const countryNames = response.data.map((item) => item.name.toLowerCase());
			const initialState = {
				...appInitialState,
				countries: [ ...countryNames ]
			};
			localStorage.setItem(APP_STATE, JSON.stringify(initialState));
			setupAppState(dispatch, initialState);
		});
	} else {
		setupAppState(dispatch, JSON.parse(storage));
	}
}
