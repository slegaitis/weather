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

			<div className={styles.weather}>
				<div className={styles.weatherDesc}>
					<h2>Zverynas, Vilnius</h2>
					<p>Sunday 3:00 PM</p>
					<p>Mostly Sunny</p>
				</div>
				<div className={styles.weatherInfo}>
					<h3>15&deg;</h3>
					<img src="//cdn.apixu.com/weather/64x64/day/113.png" />
				</div>
			</div>
		</section>
	);
}
