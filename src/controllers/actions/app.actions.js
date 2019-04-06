import { UPDATE_GEOLOCATION, UPDATE_SEARCHED_LOCATIONS } from '../../constants';

export function updateSearchedLocations(dispatch, cityname) {
	const action = {
		payload: cityname,
		type: UPDATE_SEARCHED_LOCATIONS
	};

	dispatch(action);
}

export function updateGeolocation(dispatch, position) {
	const action = {
		payload: {
			latitude: position.latitude,
			longitude: position.longitude
		},
		type: UPDATE_GEOLOCATION
	};

	dispatch(action);
}
