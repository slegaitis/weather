import { UPDATE_GEOLOCATION } from '../../types/app.types';

export function updateGeolocation(dispatch, position) {
	const action = {
		payload: {
			latitude: position.latitude,
			longtitude: position.longitude
		},
		type: UPDATE_GEOLOCATION
	};

	console.log(action);
	dispatch(action);
}
