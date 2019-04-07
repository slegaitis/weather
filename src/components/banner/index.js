import React, { useRef, useContext } from 'react';
import styles from '../../scss/partials/banner.module.scss';
import { AppContext } from '../../controllers/state/context';
import GoogleMapReact from 'google-map-react';
import { GetWeatherByString } from '../../controllers/common';
import Maps from '../maps';

export default function Banner() {
	const { state, dispatch } = useContext(AppContext);
	const cityNameRef = useRef();

	const handleSubmit = (event) => {
		event.preventDefault();
		let cityName = cityNameRef.current.value;
		GetWeatherByString(dispatch, cityName);
	};

	return (
		<section className={styles.banner}>
			<Maps coords={state.coords} />
			<div className={styles.weatherOverlay}>
				<form onSubmit={handleSubmit}>
					<input type="text" placeholder="Enter city name..." ref={cityNameRef} />
					<button type="submit">Search</button>
				</form>

				{state.weather.condition && (
					<div className={styles.weather}>
						<div className={styles.weatherDesc}>
							<h2>
								{state.location.name}, {state.location.region}
							</h2>
							<p>{state.weather.condition.text}</p>
							<p>Feels like {state.weather.feelslike_c}&deg;</p>
						</div>
						<div className={styles.weatherInfo}>
							<h3>{state.weather.temp_c}&deg;</h3>
							<img src={state.weather.condition.icon} alt={state.weather.condition.text} />
						</div>
					</div>
				)}
			</div>
		</section>
	);
}
