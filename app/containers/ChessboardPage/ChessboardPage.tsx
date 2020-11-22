import React from 'react';
import { ipcRenderer } from 'electron';

export default function ChessboadPage(): JSX.Element {
	let moves = 0; // doesn't work, must be stateful

	return (
		<div>
			Chessboard
			<button
				onClick={() =>
					ipcRenderer
						.invoke('perform-action', 'Test')
						.then((result) => {
							console.log(result);
							moves = result.cntMovesTotal;
						})
				}
				data-tclass="btn"
				type="button"
			>
				<i className="fa fa-plus" />
			</button>
			{moves}
		</div>
	);
}
