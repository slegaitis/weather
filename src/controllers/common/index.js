import { updateGeolocation } from '../actions/app.actions';
import { appInitialState } from '../../App';
import { APP_STATE, SETUP_APP_STATE } from '../../constants';
import { getCountryList } from '../api';

export function GetCoordsCtrl(dispatch) {
	if ('geolocation' in navigator) {
		// check if geolocation is supported/enabled on current browser
		navigator.geolocation.getCurrentPosition(function(position) {
			updateGeolocation(dispatch, position.coords);
		});
	} else {
		// geolocation is not supported get your location some other way
		console.log('geolocation is not enabled on this browser');
		// TODO: we could potentially make a call to an api as secondary option
	}
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
			localStorage.setItem(APP_STATE, JSON.stringify(initialState));
		});
	} else {
		dispatch({ type: SETUP_APP_STATE, payload: JSON.parse(storage) });
	}
}
