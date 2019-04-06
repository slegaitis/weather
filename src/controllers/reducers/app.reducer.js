import { UPDATE_GEOLOCATION, UPDATE_SEARCHED_LOCATIONS, SETUP_APP_STATE } from '../../constants';

export const appInitialState = {
	currentLocation: {
		latitude: 0,
		longitude: 0
	},
	searchedLocations: [],
	countries: []
};

export default function AppReducer(state = appInitialState, action) {
	switch (action.type) {
		case UPDATE_SEARCHED_LOCATIONS:
			let locations = [ action.payload, ...state.searchedLocations ];
			// copy old state and store only unique values within searchedLocations (no duplicates)
			return { ...state, searchedLocations: [ ...new Set(locations) ] };
		case UPDATE_GEOLOCATION:
			return {
				...state,
				currentLocation: { latitude: action.payload.latitude, longitude: action.payload.longitude }
			};

		case SETUP_APP_STATE:
			return {
				...state,
				...action.payload
			};
		default:
			console.log('Default', action);
	}
}
