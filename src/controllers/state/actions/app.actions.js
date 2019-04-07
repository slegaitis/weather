import { UPDATE_WEATHER_FROM_COORDS, UPDATE_WEATHER_FROM_STRING, UPDATE_SEARCHED_LOCATIONS } from '../../../constants';

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

export function updateWeatherBasedOnName(dispatch, weatherData, locationName) {
	const weatherUpdateAction = {
		payload: {
			locationName: locationName,
			weather: weatherData.current,
			location: weatherData.location
		},
		type: UPDATE_WEATHER_FROM_STRING
	};

	const searchedLocations = {
		payload: locationName,
		type: UPDATE_SEARCHED_LOCATIONS
	};

	dispatch(weatherUpdateAction);
	dispatch(searchedLocations);
}
