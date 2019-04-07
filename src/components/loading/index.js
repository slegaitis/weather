import React from 'react';
import styles from '../../scss/partials/loading.module.scss';
import spinner from '../../images/spinner.gif';

const Loading = (props) => {
	return (
		<div className={styles.loading}>
			<img src={spinner} alt="Spinner" />
		</div>
	);
};

export default Loading;
