import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import mapStyle from './map.styles';

export const Maps = (props) => {
	return (
		<Map
			google={props.google}
			styles={mapStyle}
			zoom={14}
			initialCenter={{
				lat: 54.6872,
				lng: 25.2797
			}}
			center={{
				lat: props.coords.latitude,
				lng: props.coords.longitude
			}}
		/>
	);
};

export default GoogleApiWrapper({
	apiKey: 'AIzaSyCgVZ3NEfxZdIWaJ1vQf7UUcvo--pY949A'
})(Maps);
