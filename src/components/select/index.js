import React, { useContext, useRef } from 'react';
import { AppContext } from '../../controllers/state/context';
import { GetWeatherByStringCtrl } from '../../controllers/common';

const Select = (props) => {
	const { dispatch } = useContext(AppContext);
	const randomID = Math.random().toString(36).substr(2, 5);

	const locationName = useRef();

	const handleOnChange = (event) => {
		const location = locationName.current.value;
		GetWeatherByStringCtrl(dispatch, location);
	};

	return (
		<React.Fragment>
			<label htmlFor={randomID}>{props.label}</label>
			<select
				id={randomID}
				ref={locationName}
				onChange={() => {
					handleOnChange();
				}}
			>
				{props.list.map((country, index) => (
					<option key={index} value={country}>
						{country}
					</option>
				))}
			</select>
		</React.Fragment>
	);
};
export default Select;
