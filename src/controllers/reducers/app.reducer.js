import { UPDATE_GEOLOCATION, UPDATE_SEARCHED_LOCATIONS } from '../../constants';

const appInitialState = {
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
			console.log(action);
			let newState = {
				...state,
				currentLocation: { latitude: action.payload.latitude, longitude: action.payload.longitude }
			};
			return newState;
		default:
			console.log('Default', action);
	}
}
