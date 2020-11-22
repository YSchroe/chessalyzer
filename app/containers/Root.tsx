import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { hot } from 'react-hot-loader/root';
import { History } from 'history';
import { Store } from '../store';
import Routes from '../Routes';
import Sidebar from '../components/sidebar/Sidebar';
import Topbar from '../components/topbar/Topbar';

import styles from './Root.css';

type Props = {
	store: Store;
	history: History;
};

const Root = ({ store, history }: Props) => (
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Topbar />
			<div className={styles.container}>
				<Sidebar />
				<Routes />
			</div>
		</ConnectedRouter>
	</Provider>
);

export default hot(Root);
