import React, { useRef, useReducer } from 'react';
import styles from '../../scss/partials/banner.module.scss';
import AppReducer from '../../controllers/state/reducers/app.reducer';
import { updateSearchedLocations } from '../../controllers/actions/app.actions';
import { appInitialState } from '../../App';

export default function Banner() {
	const cityNameRef = useRef();
	const [ state, dispatch ] = useReducer(AppReducer, appInitialState);

	const handleSubmit = (event) => {
		event.preventDefault();
		let cityName = cityNameRef.current.value;

		updateSearchedLocations(dispatch, cityName);
	};

	return (
		<section className={styles.banner}>
			<form onSubmit={handleSubmit}>
				<input type="text" placeholder="Enter city name..." ref={cityNameRef} />
				<button type="submit">Search</button>
			</form>
		</section>
	);
}
