import { updateGeolocation } from '../actions/app.actions';

export function Geolocation(dispatch) {
	if ('geolocation' in navigator) {
		// check if geolocation is supported/enabled on current browser
		navigator.geolocation.getCurrentPosition(function(position) {
			console.log(position);
			updateGeolocation(dispatch, position.coords);
		});
	} else {
		// geolocation is not supported get your location some other way
		console.log('geolocation is not enabled on this browser');
	}
}
