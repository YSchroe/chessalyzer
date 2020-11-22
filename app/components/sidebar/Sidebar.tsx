import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes.json';
import styles from './Sidebar.css';

export default function Home(): JSX.Element {
	return (
		<div className={styles.container} data-tid="container">
			<Link to={routes.HOME}>
				<div className={styles.link}>Home</div>
			</Link>
			<Link to={routes.CHESSBOARD}>
				<div className={styles.link}>Chessboard</div>
			</Link>
			<Link to={routes.COUNTER}>
				<div className={styles.link}>Counter</div>
			</Link>
		</div>
	);
}
