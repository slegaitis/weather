import React from 'react';
import GoogleMapReact from 'google-map-react';

const Maps = (props) => {
	return (
		<GoogleMapReact
			bootstrapURLKeys={{ key: 'AIzaSyCgVZ3NEfxZdIWaJ1vQf7UUcvo--pY949A' }}
			defaultCenter={{ lat: props.coords.latitude, lng: props.coords.longitude }}
			defaultZoom={15}
		/>
	);
};

export default Maps;
