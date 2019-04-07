import React, { useContext } from 'react';
import { AppContext } from '../../controllers/state/context';

const Select = (props) => {
	const { dispatch } = useContext(AppContext);

	return <select>{props.list.map((country) => <option value={country}>{country}</option>)}</select>;
};
export default Select;
