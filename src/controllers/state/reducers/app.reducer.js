import {
	UPDATE_WEATHER_FROM_COORDS,
	UPDATE_SEARCHED_LOCATIONS,
	SETUP_APP_STATE,
	UPDATE_WEATHER_FROM_STRING,
	SET_LOADING,
	DISABLE_CURRENT_LOCATION
} from '../../../constants';

export const appInitialState = {
	coords: {
		latitude: 54.6872,
		longitude: 25.2797
	},
	locationName: '',
	weather: {},
	location: {},
	searchedLocations: [],
	countries: [],
	currentLocationEnabled: true,
	loading: true
};

export default function AppReducer(state, action) {
	switch (action.type) {
		case SET_LOADING:
			return { ...state, loading: action.payload };

		case UPDATE_SEARCHED_LOCATIONS:
			let locations = [ action.payload, ...state.searchedLocations ];
			// copy old state and store only unique values within searchedLocations (no duplicates)
			return { ...state, searchedLocations: [ ...new Set(locations) ], loading: false };

		case UPDATE_WEATHER_FROM_STRING:
			return {
				...state,
				coords: {
					latitude: action.payload.location.lat,
					longitude: action.payload.location.lon
				},
				locationName: action.payload.locationName,
				weather: action.payload.weather,
				location: action.payload.location,
				loading: false
			};

		case UPDATE_WEATHER_FROM_COORDS:
			return {
				...state,
				coords: {
					latitude: action.payload.coords.latitude,
					longitude: action.payload.coords.longitude
				},
				weather: action.payload.weather,
				location: action.payload.location,
				loading: false
			};

		case SETUP_APP_STATE:
			return {
				...state,
				...action.payload,
				loading: false
			};

		case DISABLE_CURRENT_LOCATION:
			return {
				...state,
				currentLocationEnabled: action.payload
			};

		default:
			console.log(action);
			throw new Error('Invalid action passed');
	}
}
