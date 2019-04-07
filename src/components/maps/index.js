import React from 'react';
import GoogleMapReact from 'google-map-react';

const Maps = () => {
	return (
		<GoogleMapReact
			bootstrapURLKeys={{ key: 'AIzaSyCgVZ3NEfxZdIWaJ1vQf7UUcvo--pY949A' }}
			defaultCenter={{ lat: 54.6872, lng: 25.2797 }}
			defaultZoom={12}
		/>
	);
};

export default Maps;
