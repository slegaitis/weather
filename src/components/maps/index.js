import React from 'react';
import GoogleMapReact from 'google-map-react';

const Maps = (props) => {
	console.log(props);
	return (
		<GoogleMapReact
			bootstrapURLKeys={{ key: 'AIzaSyCgVZ3NEfxZdIWaJ1vQf7UUcvo--pY949A' }}
			center={{ lat: props.coords.latitude, lng: props.coords.longitude }}
			defaultZoom={12}
		/>
	);
};

export default Maps;
