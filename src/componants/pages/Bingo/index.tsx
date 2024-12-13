import React from "react";
import "./style.css";

const changeColor = (id: string) => {
	const btn = document.getElementById("bingo-play") as HTMLButtonElement;
	if(btn.style.visibility !== "hidden" || id === "c3") return;

	const element = document.getElementById(id) as HTMLTableCellElement;
	const rgbItem = element.style.backgroundColor;
	const rgb = `${rgbItem.substr(4, rgbItem.indexOf(')') - 4).split(',').map((color) => parseInt(color).toString(16).padStart(2, '0')).join('')}`;
	element.style.backgroundColor = (rgb === "NaN" || rgb === "999999") ? "#07a218" : "gray";

	return null;
};

const numberGenerator = (min: number, max: number): number => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

const playBingo = () => {
	const btn = document.getElementById("bingo-play") as HTMLButtonElement;
	btn.style.visibility = "hidden";

	const bingoCellText = [
		"New Treasure Item",		"PvP Changes",		"New Furiture Items",		"Coupon Code",			"DEC Armor",
		"Lifeskill Changes",		"New Dehkia Spot",	"New Party Shrine Boss",	"'Coming Soon'",		"Hardcore server",
		"Quality of Life",			"New Outfit",		"Sovereign Offhand",		"Free Handouts",		"Guild Manor stuff",
		"Demon Realm Mentioned",	"Gunner Class",		"Eternal Winter Pt 2",		"Recycled Content",		"Class rebalancing",
		"KR Gets Something First",	"Jae Apology",		"New Type of Mount",		"C8-10 Shrine Bosses",	"'Listening to your Feedback'"
	];

	const letters = ["a", "b", "c", "d", "e"];
	const numbers = [1, 2, 3, 4, 5];
	for(const letter of letters){
		for(const number of numbers){
			const id = letter + number;
			if(id === "c3") continue;
			const element = document.getElementById(id) as HTMLTableCellElement;

			const randomInt = numberGenerator(0, bingoCellText.length - 1);
			element.innerText = bingoCellText[randomInt];

			bingoCellText.splice(randomInt, 1);
		}
	}

	const centerElem = document.getElementById("c3") as HTMLTableCellElement;
	centerElem.innerText = "FREE PARKING (Bugatti)";
	centerElem.style.backgroundColor = "#07a218";

	return null;
};



function TableData(props: { rowNumber: number, columnLetter: string}): JSX.Element {
	return (
		<td id={props.columnLetter + props.rowNumber} onClick={changeColor.bind(null, props.columnLetter + props.rowNumber)}>
			{props.columnLetter.toUpperCase() + props.rowNumber}
		</td>
	);
}


function TableRow(props: { rowNumber: number }): JSX.Element {
	return (
		<tr id={"row" + props.rowNumber}>
			<TableData rowNumber={props.rowNumber} columnLetter="a" />
			<TableData rowNumber={props.rowNumber} columnLetter="b" />
			<TableData rowNumber={props.rowNumber} columnLetter="c" />
			<TableData rowNumber={props.rowNumber} columnLetter="d" />
			<TableData rowNumber={props.rowNumber} columnLetter="e" />
		</tr>
	);
}

export default function Bingo() {
	return (
		<div className="content bingo">
			<div className="bingo-play-area">
				<table className="bingo-board">
					<tbody>
						<TableRow rowNumber={1}/>
						<TableRow rowNumber={2}/>
						<TableRow rowNumber={3}/>
						<TableRow rowNumber={4}/>
						<TableRow rowNumber={5}/>
					</tbody>
				</table>
				<button type="button" id="bingo-play" className="checklist-button bingo-button" autoFocus={true} onClick={playBingo}>Play Bingo</button>
			</div>
			<div className="bingo-rules">
				<h1>Rules</h1>
				<ul>
					<li>Don&#39;t use inspect element to change the items around</li>
					<li>Click on each cell to mark it off when it occurs on stream</li>
					<li>Don&#39;t mark off things that haven&#39;t happened</li>
				</ul>
			</div>
		</div>
	);
}
