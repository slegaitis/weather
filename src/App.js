import React, { useReducer, useRef } from 'react';
import './scss/base.scss';
import { GetCoordsCtrl, SetupApplicationCtrl } from './controllers/common';
import Header from './components/header';
import Banner from './components/banner';
import Options from './components/options';
import AppReducer, { appInitialState } from './controllers/state/reducers/app.reducer';
import { AppContext } from './controllers/state/context';
import { setLoading } from './controllers/state/actions/app.actions';
import { ToastsContainer, ToastsStore } from 'react-toasts'; //TODO: this lib is too big (find better solution)

// make useEffect only fire once
function useEffectOnce(cb) {
	const didRun = useRef(false);

	if (!didRun.current) {
		cb();
		didRun.current = true;
	}
}

export default function App() {
	const [ state, dispatch ] = useReducer(AppReducer, appInitialState);

	useEffectOnce(() => {
		setLoading(dispatch, true);
		// prepare application
		SetupApplicationCtrl(dispatch);
		GetCoordsCtrl(dispatch);
	});

	return (
		<AppContext.Provider value={{ state, dispatch }}>
			<Header />
			<Banner />
			<Options />
			<ToastsContainer store={ToastsStore} />
		</AppContext.Provider>
	);
}
