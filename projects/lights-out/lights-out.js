// Times for each of the timers.
const allGameVars = {
	"game-1": {
		"timer": null,
		"interval": null,
		"locked": true,
		"bogoInterval": null,
		"clicks": 0,
		"memory": new Map(),
		"memLoaded": false
	},
	"game-2": {
		"timer": null,
		"interval": null,
		"locked": true,
		"bogoInterval": null,
		"clicks": 0,
		"memory": new Map(),
		"memLoaded": false
	},
	"game-3": {
		"timer": null,
		"interval": null,
		"locked": true,
		"bogoInterval": null,
		"clicks": 0,
		"memory": new Map(),
		"memLoaded": false
	},
	"game-4": {
		"timer": null,
		"interval": null,
		"locked": true,
		"bogoInterval": null,
		"clicks": 0,
		"memory": new Map(),
		"memLoaded": false
	}
};

const queue = [];

/** Gets the state of the board in a format compatible with the solver */
function getState(game) {
	const gameID = `game-${game}`;
	const allBoxes = document.querySelectorAll(`#${gameID} .light-box`);

	let state = "";
	for(const box of allBoxes){
		state += box.classList.contains('light-clicked') ? "T" : "F";
	}

	return state;
}


function setBoardToRandomState(game) {
	const gameID = `game-${game}`;
	const allBoxes = document.querySelectorAll(`#${gameID} .light-box`);

	if(gameID !== "game-4"){
		const randNumber = Math.floor(Math.random() * allGameVars[gameID]['memory'].size);
		const state = [...allGameVars[gameID]['memory'].keys()][randNumber];

		const splitState = state.split('');

		for(let i = 0; i < splitState.length; i++){
			if(splitState[i] === "T") allBoxes[i].classList.add('light-clicked');
		}

		return;
	}

	for(const box of allBoxes){
		const rand = Math.random();
		if(rand < 0.5) box.classList.add('light-clicked');
	}
}


function updateMinMoves(game) {
	const gameID = `game-${game}`;
	const minMovesElement = document.getElementById(`${gameID}-min-moves`);

	const state = getState(game);
	const stateInfo = allGameVars[gameID]['memory'].get(state);

	const moves = (stateInfo) ? stateInfo.movesToSolve : "Impossible";
	minMovesElement.innerText = moves;
}

function updateClicks(game, reset = false) {
	const gameID = `game-${game}`;

	const num = (reset) ? 0 : allGameVars[gameID]['clicks'] + 1;
	allGameVars[gameID]['clicks'] = num;

	document.getElementById(`${gameID}-clicks`).innerText = allGameVars[gameID]['clicks'];
}

/**
 * Formats a number into a time string
 * @param {number} seconds
 * @returns {string}
 */
function formatTime(seconds) {
	const minutes = Math.floor(seconds / 60);
	const secs = seconds % 60;

	return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}


/**
 * Starts the timer for a game.
 * @param {String | Number} game
 */
function startTime(game) {
	const gameID = `game-${game}`;
	const value = 0;

	const timeElement = document.getElementById(`${gameID}-time`);

	allGameVars[gameID]['timer'] = value;
	timeElement.innerText = formatTime(allGameVars[gameID]['timer']);

	allGameVars[gameID]['interval'] = setInterval(() => {
		allGameVars[gameID]['timer'] += 1;

		timeElement.innerText = formatTime(allGameVars[gameID]['timer']);
	}, 1000);
}

/**
 * Resets a board to its original state.
 * @param {String | Number} game
 */
async function reset(game) {
	const gameID = `game-${game}`;

	if(!allGameVars[gameID]['memLoaded']) await loadMemory(game);
	document.getElementById(`${gameID}-reset`).innerText = "Reset";

	stopBogo(game);
	const bogoButton = document.getElementById(`${gameID}-bogo`);
	bogoButton.disabled = false;

	const quickButton = document.getElementById(`${gameID}-quick`);
	if(gameID !== "game-4") quickButton.disabled = false;

	clearInterval(allGameVars[gameID]['interval']);
	allGameVars[gameID]['interval'] = null;
	allGameVars[gameID]['locked'] = false;
	allGameVars[gameID]['started'] = null;
	allGameVars[gameID]['timer'] = null;

	updateClicks(game, true);

	document.getElementById(gameID).classList.remove('light-win');
	document.getElementById(`${gameID}-time`).innerHTML = `00:00`;

	document.querySelectorAll(`#${gameID} .light-box`).forEach(element => element.classList.remove('light-clicked'));

	setBoardToRandomState(game);

	if(allGameVars[gameID]['memLoaded']) updateMinMoves(game);
}


/**
 * Disable the timer & resets moves taken for a given board
 * @param {String | Number} game
 */
function softReset(game) {

	const gameID = `game-${game}`;
	clearInterval(allGameVars[gameID]['interval']);

	updateClicks(game, true);

	allGameVars[gameID]['interval'] = null;
	allGameVars[gameID]['started'] = null;
	allGameVars[gameID]['timer'] = null;

	document.getElementById(`${gameID}-time`).innerHTML = `00:00`;
}


function stopBogo(game) {
	const gameID = `game-${game}`;
	clearInterval(allGameVars[gameID]['bogoInterval']);

	const gameElement = document.getElementById(gameID);
	gameElement.classList.remove('light-bot');

	if(gameID !== 'game-4') document.getElementById(`${gameID}-quick`).disabled = false;
	const bogoButton = document.getElementById(`${gameID}-bogo`);

	bogoButton.innerText = "Bogo Solve";
	bogoButton.onclick = bogoSolve.bind(null, game);
}


function bogoSolve(game) {
	const gameID = `game-${game}`;
	const gameElement = document.getElementById(gameID);
	gameElement.classList.add('light-bot');

	document.getElementById(`${gameID}-quick`).disabled = true;

	const allBoxes = [...document.querySelectorAll(`#${gameID} .light-box`)];

	const bogoButton = document.getElementById(`${gameID}-bogo`);
	bogoButton.innerText = "Stop";
	bogoButton.onclick = stopBogo.bind(null, game);

	allGameVars[gameID]['bogoInterval'] = setInterval(() => {

		if(allGameVars[gameID]['locked']) clearInterval(allGameVars[gameID]['bogoInterval']);

		const randomBox = allBoxes[Math.floor(Math.random() * allBoxes.length)];
		const modified = (game === "3" || game === "4");

		clickedTile(randomBox, game, modified, false);

	}, 10);

}


/**
 * Checks if a game has been won.
 * @param {String | Number} game
 */
function checkWin(game) {

	const gameID = `game-${game}`;
	const allBoxes = document.querySelectorAll(`#${gameID} .light-box`);
	let allClicked = true;

	for(const box of allBoxes){
		if(!box.classList.contains('light-clicked')){
			allClicked = false;
			break;
		}
	}

	if(allClicked){
		allGameVars[gameID]['locked'] = true;

		stopBogo(game);
		clearInterval(allGameVars[gameID]['interval']);

		const bogoButton = document.getElementById(`${gameID}-bogo`);
		bogoButton.disabled = true;

		const quickButton = document.getElementById(`${gameID}-quick`);
		quickButton.disabled = true;

		document.getElementById(gameID).classList.add('light-win');
	}

}

/**
 * Toggles an element's class.
 * @param {HTMLBaseElement} element
 */
function toggle(element) {
	if(element.classList.contains('light-clicked')){
		element.classList.remove('light-clicked');
	} else {
		element.classList.add('light-clicked');
	}
}

/**
 * Toggles the elements for lights out
 * @param {HTMLDivElement[]} elements
 * @param {String | Number} game
 * @param {boolean} modified
 */
function toggleElements(element, game, modified) {
	const clickedIDArray = element.id.split('-');

	const clickedRow = clickedIDArray[0];
	const clickedCol = clickedIDArray[1];
	const clickedGame = clickedIDArray[2];

	const topID = `${parseInt(clickedRow) - 1}-${clickedCol}-${clickedGame}`;
	const top = document.getElementById(topID);

	const botID = `${parseInt(clickedRow) + 1}-${clickedCol}-${clickedGame}`;
	const bot = document.getElementById(botID);

	const leftID = `${clickedRow}-${parseInt(clickedCol) - 1}-${clickedGame}`;
	const left = document.getElementById(leftID);

	const rightID = `${clickedRow}-${parseInt(clickedCol) + 1}-${clickedGame}`;
	const right = document.getElementById(rightID);

	const validElements = [element];

	if(top) validElements.push(top);
	if(bot) validElements.push(bot);
	if(left) validElements.push(left);
	if(right) validElements.push(right);

	if(modified){
		const topLeftID = `${parseInt(clickedRow) - 1}-${parseInt(clickedCol) - 1}-${clickedGame}`;
		const topLeft = document.getElementById(topLeftID);

		const topRightID = `${parseInt(clickedRow) - 1}-${parseInt(clickedCol) + 1}-${clickedGame}`;
		const topRight = document.getElementById(topRightID);

		const botLeftID = `${parseInt(clickedRow) + 1}-${parseInt(clickedCol) - 1}-${clickedGame}`;
		const botLeft = document.getElementById(botLeftID);

		const botRightID = `${parseInt(clickedRow) + 1}-${parseInt(clickedCol) + 1}-${clickedGame}`;
		const botRight = document.getElementById(botRightID);

		if(topLeft) validElements.push(topLeft);
		if(topRight) validElements.push(topRight);
		if(botLeft) validElements.push(botLeft);
		if(botRight) validElements.push(botRight);
	}

	for(const element of validElements){
		toggle(element);
	}

	checkWin(game);
}

function clickedTile(element, game, modified, human = false) {
	const gameID = `game-${game}`;

	if(human){
		if(allGameVars[gameID]['locked']) return;

		if(!allGameVars[gameID]['interval']) startTime(game);
		updateClicks(game);
	} else {
		softReset(game);
	}

	toggleElements(element, game, modified);
	if(allGameVars[gameID]['memLoaded']) updateMinMoves(game);
}


document.querySelectorAll('.light-box').forEach(element => {
	const game = element.id.split("-")[2];
	if(["1", "2"].includes(game)) element.addEventListener('click', clickedTile.bind(this, element, game, false, true));
	if(["3", "4"].includes(game)) element.addEventListener('click', clickedTile.bind(this, element, game, true, true));
});


document.querySelectorAll('.light-all').forEach(element => {
	const gameID = element.id;
	const game = gameID.split("-")[1];

	let startNum = 1;

	const kids = element.children;
	for(const kid of kids){
		kid.innerText = startNum;
		startNum += 1;
	}
});


// Automatic Solver


// Functions
const getTotalTiles = (game) => document.getElementById(`game-${game}`).children.length;
const getSolvedState = (game) => "T".repeat(getTotalTiles(game));
const getRegex = (_game) => {
	const game = _game.toString();

	if(game === "1" || game === "3") return new RegExp(`.{3,3}`, "g");
	if(game === "2" || game === "4") return new RegExp(`.{4,4}`, "g");

	throw new Error("Invalid game");
};
const getGameSize = (_game) => {
	const game = _game.toString();
	let size;

	if(game === "1" || game === "3") size = 3;
	if(game === "2" || game === "4") size = 4;

	return size;
};



/** Rotates a 2D matrix 90 degrees clockwise
 * @remarks Code transpiled to JS from a comment on stackoverflow - https://stackoverflow.com/a/35438327 */
function rotate(matrix) {
	const size = matrix.length;
	const layerCount = Math.floor(size / 2);
	for(let layer = 0; layer < layerCount; layer++){
		const first = layer;
		const last = size - first - 1;
		for(let element = first; element < last; element++){
			const offset = element - first;
			const top = matrix[first][element];
			const rightSide = matrix[element][last];
			const bottom = matrix[last][last - offset];
			const leftSide = matrix[last - offset][first];
			matrix[first][element] = leftSide;
			matrix[element][last] = top;
			matrix[last][last - offset] = rightSide;
			matrix[last - offset][first] = bottom;
		}
	}
}


/** Produces a list of all possible rotations of a given state */
function getRotations(_matrix) {
	const matrix = _matrix;
	const rotations = [];
	const base = shrinkState(matrix);
	rotations.push(base);
	for(let i = 0; i < 3; i++){
		rotate(matrix);
		rotations.push(shrinkState(matrix));
	}
	return rotations;
}


/** Expands a state into a 2D array of booleans */
function expandState(_state, _game) {
	const state = _state;
	const game = _game;

	const regex = getRegex(game);
	const rows = state.match(regex);

	const expandedState = [];
	for(const row of rows){
		const expandedRow = [];
		for(const char of row){
			const bool = (char === "T");
			expandedRow.push(!!bool);
		}
		expandedState.push(expandedRow);
	}
	return expandedState;
}


/** Shrinks an expanded state back down to a string */
function shrinkState(_expandedState) {
	const expandedState = _expandedState;
	const state = [];

	for(const row of expandedState){
		for(const bool of row){
			state.push(bool ? "T" : "F");
		}
	}

	return state.join("");
}


/** Toggles the tile and appropriate adjacent tiles in a state */
function toggleTiles(_state, _row, _col, _game) {
	const state = _state;
	const row = _row;
	const col = _col;
	const game = _game;

	const expanded = expandState(state, game);
	expanded[row][col] = !expanded[row][col];

	const size = getGameSize(game);

	const top = row - 1;
	const bottom = row + 1;
	const left = col - 1;
	const right = col + 1;

	if(top >= 0) expanded[top][col] = !expanded[top][col];
	if(bottom < size) expanded[bottom][col] = !expanded[bottom][col];
	if(left >= 0) expanded[row][left] = !expanded[row][left];
	if(right < size) expanded[row][right] = !expanded[row][right];


	if(game === 3 || game === 4){
		const topLeft = top >= 0 && left >= 0;
		const topRight = top >= 0 && right < size;
		const botLeft = bottom < size && left >= 0;
		const botRight = bottom < size && right < size;

		if(topLeft) expanded[top][left] = !expanded[top][left];
		if(topRight) expanded[top][right] = !expanded[top][right];
		if(botLeft) expanded[bottom][left] = !expanded[bottom][left];
		if(botRight) expanded[bottom][right] = !expanded[bottom][right];
	}

	return shrinkState(expanded);
}


/** Produces a single permutation of a given state */
function permutate(state, tile, game) {
	const size = getGameSize(game);

	const col = tile % size;
	const row = Math.floor(tile / size);
	return toggleTiles(state, row, col, game);
}


/** Lists all the possible permutations of a state */
function getPermutations(_state, _game) {
	const state = _state;
	const game = _game;

	const permutations = [];
	for(let i = 0; i < getTotalTiles(game); i++){
		const permutation = permutate(state, i, game);
		permutations.push({ permutation, tile: i });
	}

	return permutations;
}

const nextInQueue = () => queue.shift();

/**
 * Works through the queue
 * @param {number} game
 */
function doQueue(_game) {
	const game = _game;
	const memory = allGameVars[`game-${game}`]['memory'];

	while(queue.length > 0){
		const item = nextInQueue();
		if(!item) break;

		const { state, moves, parent, optimal } = item;
		if(memory.has(state)) continue;

		memory.set(state, { movesToSolve: moves, optimalMove: optimal, parentState: parent });
		const permutations = getPermutations(state, game);

		for(const perm of permutations){
			const { permutation, tile } = perm;
			queue.push({ state: permutation, parent: state, optimal: tile, moves: moves + 1 });
		}
	}
}


async function loadMemory(game) {
	const gameID = `game-${game}`;
	if(gameID === "game-4") return; // Game 4 takes too long to load
	const gameElement = document.getElementById(gameID);

	gameElement.classList.add("light-loading");

	queue.push({ state: getSolvedState(game), parent: null, moves: 0, optimal: null });
	doQueue(game);
	allGameVars[gameID]['memLoaded'] = true;

	gameElement.classList.remove("light-loading");
	gameElement.classList.remove("light-bot");

	document.getElementById(`${gameID}-bogo`).disabled = false;
	document.getElementById(`${gameID}-quick`).disabled = false;

	document.getElementById(`${gameID}-to-complete`).classList.remove('hidden');

	console.log(`[Game ${game}] Loaded states into memory!`);
}


async function solveGame(_game, moves) {
	const game = _game.toString();
	const gameID = `game-${game}`;

	const modified = (game === "3" || game === "4");

	const tiles = document.querySelectorAll(`#${gameID} .light-box`);

	for(const move of moves){
		await new Promise(resolve => setTimeout(resolve, 200));
		clickedTile(tiles[move], game, modified, false);
	}
}


async function quickSolve(game) {
	const gameID = `game-${game}`;
	const gameElement = document.getElementById(gameID);

	const bogoButton = document.getElementById(`${gameID}-bogo`);
	bogoButton.disabled = true;

	const quickButton = document.getElementById(`${gameID}-quick`);
	quickButton.disabled = true;

	const resetButton = document.getElementById(`${gameID}-reset`);
	resetButton.disabled = true;

	gameElement.classList.add("light-bot");
	allGameVars[gameID]['locked'] = true;

	if(!allGameVars[gameID]['memLoaded']) await loadMemory(game);

	/** @name memory
	 * @type {Map<String, { movesToSolve: number, optimalMove: number, parentState: String }>} */
	const memory = allGameVars[gameID]['memory'];
	const state = getState(game);

	const optimalMoves = [];

	let latestState = state;
	while(true){ // eslint-disable-line no-constant-condition
		const stateInfo = memory.get(latestState);
		if(!stateInfo) break;
		if(!stateInfo.parentState) break;

		optimalMoves.push(stateInfo.optimalMove);
		latestState = stateInfo.parentState;
	}

	await solveGame(game, optimalMoves);

	resetButton.disabled = false;
	gameElement.classList.remove("light-bot");
}