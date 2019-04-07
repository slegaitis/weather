import {
	UPDATE_WEATHER_FROM_COORDS,
	UPDATE_SEARCHED_LOCATIONS,
	SETUP_APP_STATE,
	UPDATE_LOCATION_NAME,
	UPDATE_WEATHER_FROM_STRING
} from '../../../constants';

export const appInitialState = {
	coords: {
		latitude: 0,
		longitude: 0
	},
	locationName: '',
	weather: {},
	location: {},
	searchedLocations: [],
	countries: []
};

export default function AppReducer(state, action) {
	switch (action.type) {
		case UPDATE_SEARCHED_LOCATIONS:
			let locations = [ action.payload, ...state.searchedLocations ];
			// copy old state and store only unique values within searchedLocations (no duplicates)
			return { ...state, searchedLocations: [ ...new Set(locations) ] };

		case UPDATE_WEATHER_FROM_STRING:
			return {
				...state,
				locationName: action.payload.locationName,
				weather: action.payload.weather,
				location: action.payload.location
			};

		case UPDATE_WEATHER_FROM_COORDS:
			return {
				...state,
				coords: {
					latitude: action.payload.coords.latitude,
					longitude: action.payload.coords.longitude
				},
				weather: action.payload.weather,
				location: action.payload.location
			};

		case SETUP_APP_STATE:
			return {
				...state,
				...action.payload
			};

		default:
			console.log(action);
			throw new Error('Invalid action passed');
	}
}
