import { UPDATE_GEOLOCATION } from '../../types/app.types';

const appInitialState = {
	currentLocation: {
		latitude: 0,
		longtitude: 0
	}
};

export default function AppReducer(state = appInitialState, action) {
	switch (action.type) {
		case UPDATE_GEOLOCATION:
			return [ ...state ];
		default:
			console.log('Default', action);
	}
}
