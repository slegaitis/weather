import React, { useRef, useContext } from 'react';
import styles from '../../scss/partials/banner.module.scss';
import { AppContext } from '../../controllers/state/context';

export default function Banner() {
	const { state, dispatch } = useContext(AppContext);
	const cityNameRef = useRef();

	const handleSubmit = (event) => {
		event.preventDefault();
		let cityName = cityNameRef.current.value;
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
