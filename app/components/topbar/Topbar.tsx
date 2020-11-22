import React from 'react';
import styles from './Topbar.css';
import logo from './logo_w.svg';

export default function Home(): JSX.Element {
	return (
		<div className={styles.container} data-tid="container">
			<img src={logo} alt="Logo" className={styles.logo} />

			<h2>Chessalyzer</h2>
		</div>
	);
}
