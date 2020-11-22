import React from 'react';
import styles from './HomePage.css';

export default function Home(): JSX.Element {
	return (
		<div className={`container ${styles.home}`}>
			<h1 className="title">Chessalyzer</h1>
			<h2 className="subtitle">Analyze your chess games</h2>
		</div>
	);
}
