import React, { useContext } from 'react';
import Select from '../select';
import styles from '../../scss/partials/selectors.module.scss';
import { AppContext } from '../../controllers/state/context';

export default function Options() {
	const { state, dispatch } = useContext(AppContext);

	const getCurrentLocation = () => {
		console.log(state);
	};

	return (
		<ul className={styles.selectors}>
			<li>
				<Select list={state.countries} />
			</li>
			<li>
				<Select list={state.searchedLocations} />
			</li>
			<li>
				<button onClick={() => getCurrentLocation()}>Current location</button>
			</li>
		</ul>
	);
}
