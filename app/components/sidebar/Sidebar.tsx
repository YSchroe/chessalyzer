import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes.json';
import styles from './Sidebar.css';

export default function Home(): JSX.Element {
	return (
		<div className={styles.container} data-tid="container">
			<h2>THE SIDEBAR</h2>
			<Link to={routes.COUNTER}>to Counter</Link>
		</div>
	);
}
