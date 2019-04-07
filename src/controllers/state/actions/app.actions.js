import { UPDATE_WEATHER_FROM_COORDS } from '../../../constants';

export function updateGeolocationAction(dispatch, coords, weatherData) {
	const action = {
		payload: {
			coords: {
				latitude: coords.latitude,
				longitude: coords.longitude
			},
			weather: weatherData.current,
			location: weatherData.location
		},
		type: UPDATE_WEATHER_FROM_COORDS
	};

	dispatch(action);
}
