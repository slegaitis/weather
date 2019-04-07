import { UPDATE_GEOLOCATION, UPDATE_SEARCHED_LOCATIONS, SETUP_APP_STATE } from '../../../constants';

export default function AppReducer(state, action) {
	console.log(state);
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
			console.log(action);
			throw new Error('Invalid action passed');
	}
}
