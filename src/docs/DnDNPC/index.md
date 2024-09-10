# D&D NPC

## **About**
DnD-NPC is a [Node.js](https://nodejs.org) module allows you to easily create randomized D&D NPCs.
It generates pseudo-random npcs that include but are not limited to the following:

- Name
- Class
- Background
- Equipped Weapons & Armour

## Installation

```bash
npm install dnd-npc
```

<br>

## Usage

You can create a new npc in several ways.

```js
import NPC from 'dnd-npc';

const obj = {
	raceType: "warforged",
	subRace: "juggernaut",
	classType: "fighter"
}

const npc = new NPC(obj);

// Generates a Warforged-Juggernaut Fighter
const character = await npc.generate();
```

<br>

```js
import NPC from 'dnd-npc';
const npc = new NPC()
	.setRace("warforged", "juggernaut")
	.setClass("fighter");

// Generates a Warforged-Juggernaut Fighter
const character = await npc.generate();
```

<br>

## **Need help?**
If you've encountered a bug or would like to suggest a feature, feel free to create either a pull request or an issue on the [github](https://github.com/Multarix/DnD-NPC).
