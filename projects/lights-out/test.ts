"use strict";


/*
Brute force 'Solver'
1x1, 2x2, 3x3 and 4x4 are all possible to find a solution for, no matter what the initial state is "quickly".

HOWEVER:
I cannot recommend trying to solve a 5x5 or higher board.
Technically, there are 33.5million possible states for a 5x5 board
Even if you take into account certain states are just rotations of others (which this does), it doesn't help much.
A 5x5 board would still only be brought down to around 2.1million states.

However, one thing that I can say with reasonable confidence, is that because I'm using a breadth first search
when a solution does get found, it will be a solution with the least amount of moves possible.
*/

type Binary = number;
interface QueueEntry {
	state: Binary;
	parent: Binary;
	moves: number;
	optimal: number;
}



type Memory = Map<Binary, QueueEntry>;
type Queue = Set<QueueEntry>;



// Board Dimensions
const boardSize = 3;
const modded = true;



// Initial setup
const totalTiles = boardSize * boardSize;
const solvedState = Math.pow(2, Math.pow(boardSize, 2)) >>> 0;


const splitRegex = new RegExp(`.{${boardSize},${boardSize}}`, "g");

const memory = new Map();
const queue = new Map();

const nextInQueue = () => {
	const next = queue.entries().next().value;
	queue.delete(next[0]);

	return next[1];
};



// Functions
/** Rotates a 2D matrix 90 degrees clockwise
 * @remarks Code transpiled to JS from a comment on stackoverflow - https://stackoverflow.com/a/35438327 */
function invertBinary() {

}


/** Produces a list of all possible rotations of a given state */
function getRotations() {

}


/** Toggles the tile and appropriate adjacent tiles in a state */
function toggleTiles() {

}


/** Produces a single permutation of a given state */
function permutate() {


}


/** Lists all the possible permutations of a state */
function getPermutations() {

}


function doQueue(_state = solvedState) {

	queue.set(solvedState, { state: solvedState, parent: null, moves: 0, optimal: null });

	const keepGoing = () => solvedState > memory.size && queue.size > 0; // Use in CPP
	while(keepGoing()){
		const { state, moves, parent, optimal } = nextInQueue(); // Use in CPP

		if(memory.has(state)) continue; // This shouldn't happen, but just in case
		memory.set(state, { movesToSolve: moves, optimalMove: optimal, parentState: parent });

		// console.log(`${state} | States: ${memory.size}, Queue: ${queue.size}`);

		const permutations = getPermutations(state);
		for(const perm of permutations){

			const { permutation, tile } = perm;
			if(memory.has(permutation) || queue.has(permutation)) continue;
			// const rotations = getRotations(expandState(permutation));
			// let rotatedPerm = false;
			// for(const rotation of rotations){
			// 	if(memory.has(rotation) || queue.has(rotation)){
			// 		rotatedPerm = true;
			// 		break;
			// 	}
			// }
			// if(rotatedPerm) continue;



			queue.set(permutation, { state: permutation, parent: state, optimal: tile, moves: moves + 1 });
		}
	}

	console.log("Done!");
}
console.log("Finding solution...");

console.time("find");
doQueue();
console.timeEnd("find");

console.log(`Memory Size: ${memory.size} | Max Memory: ${solvedState}`);

/*

3x3 Time: 35.524ms
3x3 Modded Time: 35.278ms

4x4 Time: 219.007ms | Note: Many combinations are impossible to solve
4x4 Modded Time: 3.152s

5x5 Time: 18:57.458 (mm:ss.mmm)
5x5 Modded Time: 4.414s | Note: Many combinations are impossible to solve

*/