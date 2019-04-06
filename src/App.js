import React, { useReducer, useRef } from 'react';
import './scss/base.scss';
import { Geolocation, SetupApplication } from './controllers/common';
import Header from './components/header';
import Banner from './components/banner';
import Selectors from './components/selectors';
import AppReducer from './controllers/reducers/app.reducer';

// make useEffect only fire once
function useEffectOnce(cb) {
	const didRun = useRef(false);

	if (!didRun.current) {
		cb();
		didRun.current = true;
	}
}

export default function App() {
	const [ state, dispatch ] = useReducer(AppReducer);

	useEffectOnce(() => {
		// prepare application
		SetupApplication(dispatch);
		Geolocation(dispatch);
	});

	return (
		<div>
			<Header />
			<Banner />
			<Selectors />
		</div>
	);
}
