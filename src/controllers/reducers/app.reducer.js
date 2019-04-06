import { UPDATE_GEOLOCATION } from '../../types/app.types';

const appInitialState = {
	currentLocation: {
		latitude: 0,
		longitude: 0
	}
};

export default function AppReducer(state = appInitialState, action) {
	switch (action.type) {
		case UPDATE_GEOLOCATION:
			console.log(action.payload);
			return { ...state, currentLocation: { ...action.payload } };
		default:
			console.log('Default', action);
	}
}
