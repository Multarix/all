import React from "react";

import "./style.css";

interface CheckData {
	id: string
	labelName: string
}

interface ChecklistData {
	id: string
	title: string
	checkers: CheckData[]
}

const checklist: ChecklistData[] = [
	{
		id: "premium",
		title: "Premium Buffs",
		checkers: [
			{ id: "value", labelName: "Value Pack" },
			{ id: "kama", labelName: "Blessing of Kamasylve" },
			{ id: "oldmoon", labelName: "Old Moon Scroll" },
			{ id: "loml", labelName: "LOML Buffs" },
			{ id: "node", labelName: "Node War Buff" }
		]
	},
	{
		id: "character",
		title: "Character Gear & Skills",
		checkers: [
			{ id: "skilll", labelName: "Skill Preset" },
			{ id: "addon", labelName: "Skill Addons" },
			{ id: "artifact", labelName: "Artifact Set" },
			{ id: "crystal", labelName: "Crystal Preset" },
			{ id: "bsr", labelName: "Lock/ Unlock BSR Skills" }
		]
	},
	{
		id: "consumables",
		title: "Consumables",
		checkers: [
			{ id: "cron", labelName: "Simple/ Exquisite Cron Meal" },
			{ id: "alchemy", labelName: "Alchemy Stone" },
			{ id: "elixir", labelName: "Elixirs & Perfumes" },
			{ id: "experience", labelName: "EXP Increase Scrolls" },
			{ id: "house", labelName: "House Buff" }
		]
	},
	{
		id: "droprate",
		title: "Drop Buffs",
		checkers: [
			{ id: "agris", labelName: "Agris" },
			{ id: "lootscroll", labelName: "Loot Scroll" },
			{ id: "tent", labelName: "Tent" },
			{ id: "guild", labelName: "Guild Buffs" }
		]
	},
	{
		id: "special",
		title: "Special Buffs",
		checkers: [
			{ id: "church", labelName: "Church Buffs" },
			{ id: "villa", labelName: "Villa Buff" },
			{ id: "krogdolo", labelName: "Krogdolo Horse Buff" },
			{ id: "carolin", labelName: "Carolin Buff" }
		]
	},
	{
		id: "misc",
		title: "Miscellaneous",
		checkers: [
			{ id: "arsha", labelName: "Arsha? Enable PvP" },
			{ id: "fairy", labelName: "Fairy Auto-Potion" },
			{ id: "weight", labelName: "Empty Inventory" },
			{ id: "pets", labelName: "Pet Looting" }
		]
	}
];



function ChecklistInput(props: { id: string, labelName: string }) {
	return (
		<div className="checkbox-wrapper">
			<input id={props.id} type="checkbox" />
			<label htmlFor={props.id}>{props.labelName}</label>
		</div>
	);
}



function ChecklistTile(props: { checkers: CheckData[], title: string}) {
	const checklistForTile: string[] = [];

	const checklists = props.checkers.map(check => {
		checklistForTile.push(check.id);
		return <ChecklistInput key={check.id} id={check.id} labelName={check.labelName} />;
	});

	const selector = (checklist: string[], checked: boolean) => {
		for(const check of checklist){
			const element = document.getElementById(check) as HTMLInputElement;
			element.checked = checked;
		}
	};

	return (
		<div className="checklist-tile">
			<h3 className="checklist-title">{props.title}</h3>
			<div className="checklist-checks">
				{checklists}
			</div>
			<div className="button-container">
				<button onClick={selector.bind(null, checklistForTile, true)} className="checklist-button" id="select-all">Check All</button>
				<button onClick={selector.bind(null, checklistForTile, false)} className="checklist-button" id="deselect-all">Uncheck All</button>
			</div>
		</div>
	);
}



export default function GrindChecklist() {
	const checklistTiles = checklist.map(tileData => {
		return <ChecklistTile key={tileData.id} checkers={tileData.checkers} title={tileData.title} />;
	});

	return (
		<div className="content checklist">
			<h1 className="centered project-title">
				Grind Checklist
			</h1>
			<div className="checklist-container">
				{checklistTiles}
			</div>
		</div>
	);
}