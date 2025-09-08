// Localstorage keys
export const NIBBLES_KEY = 'nibbles-key'
export const HISTORY_KEY = 'history-key'
export const CURRENT_NIBBLE_KEY = 'current-nibble-key'

// Popup content types
export const POPUP_CONTENT = {
	ADD_NIBBLE: 'addNibble',
	RESET_DATA: 'resetData',
}

// Premade Nibbles
export const PREMADE_NIBBLES = [
	{
		id: '607b43c9-5416-4a09-82da-694078fea308',
		text: 'Drink a glass of water',
		premade: true,
	},
	{
		id: '04dfd96f-5337-437c-bef5-12f0034c7bf8',
		text: 'Listen and dance to one of your favorite songs',
		premade: true,
	},
	{
		id: 'ce5d0c3c-f2c5-4dfb-8f90-24972e5af292',
		text: 'Do a puzzle (like crossword or sudoku)',
		premade: true,
	}
]

// Nibble actions
export const NIBBLE_ACTIONS = {
	DONE: 'done',
	SKIPPED: 'skipped',
}