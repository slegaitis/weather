import React, { useContext } from 'react';
import { AppContext } from '../../controllers/state/context';

const Select = (props) => {
	const { dispatch } = useContext(AppContext);

	return (
		<select>
			{props.list.map((country, index) => (
				<option key={index} value={country}>
					{country}
				</option>
			))}
		</select>
	);
};
export default Select;
