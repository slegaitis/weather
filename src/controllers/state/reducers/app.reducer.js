import { UPDATE_WEATHER_FROM_COORDS, UPDATE_SEARCHED_LOCATIONS, SETUP_APP_STATE } from '../../../constants';

export const appInitialState = {
	locationCoords: {
		latitude: 0,
		longitude: 0
	},
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

		case UPDATE_WEATHER_FROM_COORDS:
			return {
				...state,
				locationCoords: {
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
