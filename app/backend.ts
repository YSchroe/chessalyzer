const { ipcMain } = require('electron');
const { Chessalyzer, Tracker } = require('chessalyzer.js');

ipcMain.handle('perform-action', async (_, ...args: any) => {
	const tileTracker = new Tracker.Tile();
	await Chessalyzer.startBatchMultiCore(
		`C:\\Users\\yanni\\Documents\\GitHub\\chessalyzer.js\\test\\lichess_db_standard_rated_2013-01_min.pgn`,
		tileTracker
	);
	return tileTracker;
});
