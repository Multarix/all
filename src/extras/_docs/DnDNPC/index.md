# D&D NPC

## About
DnD-NPC is a [Node.js](https://nodejs.org) module allows you to easily create randomized D&D NPCs.
It generates pseudo-random npcs that include but are not limited to the following:

- Name
- Class
- Race
- Background
- Equipped Weapons & Armour

## Installation

```bash
npm install dnd-npc
```

## Usage
You can create a new npc in several ways.

```javascript
import NPC from 'dnd-npc';

const obj = {
	raceType: "warforged",
	subRace: "juggernaut",
	classType: "fighter"
}

const npc = new NPC(obj)

// Generates a Warforged-Juggernaut Fighter
const character = await npc.generate();
```

<br>

```javascript
import NPC from 'dnd-npc';
const npc = new NPC()
	.setRace("warforged", "juggernaut")
	.setClass("fighter");

// Generates a Warforged-Juggernaut Fighter
const character = await npc.generate();
```

<br>
You can overwrite settings that you have already input.

```javascript
import NPC from 'dnd-npc';

const obj = {
	raceType: "warforged",
	subRace: "juggernaut",
	classType: "fighter"
}

const npc = new NPC(obj)
	.setRace("human")
	.setClass("bard");
	
// Generates a Human Bard (why u make Bard tho?)
const character = await npc.generate();
```

<br>
You can also pass a sub-race as the classType and it will generate with the correct race and sub-race.

```javascript
import NPC from 'dnd-npc';
const npc = new NPC({ classType: "juggernaut" });

// Generates a Warforged-Juggernaut with a random class.
const character = await npc.generate();
```

<br>
Leaving the raceType or classType blank, or passing an invalid type to it, will result in that thing being randomly generated.

```javascript
import NPC from 'dnd-npc';
const npc = new NPC({ raceType: "warforged" });

// Generates a Warforged with a random sub-race and class.
const character = await npc.generate();
```

<br>

```javascript
import NPC from 'dnd-npc';
const npc = new NPC({ classType: "fighter" });

// Generates a fighter with a random race
const character = await npc.generate();
```

<br>

```javascript
import NPC from 'dnd-npc';
const npc = new NPC();

// Generates a completely random character.
const character = await npc.generate();
```

<br>

---

## Output
After using the `#generate()` method, you'll receive an object like this with all the details of the NPC.<br>
⚠️ You can only use `#generate()` once per npc instance. Additional uses will simply return the same character.

```javascript
{
	"character": CharacterData,
	"race": RaceData,
	"class": ClassData,
	"inventory": InventoryData
};
```

<br>
The Object type definitions can be found below:

```javascript
CharacterData = {
	name: String,
	gender: String,
	alignment: String,
	age: Number,
	background: String,
	level: Number
}

RaceData = {
	name: String,
	link: String,
	size: String,
	speed: Number
}

ClassData = {
	name: String,
	link: String,
	stats: {
		strength: StatData,
		dexterity: StatData,
		constitution: StatData,
		intelligence: StatData,
		wisdom: StatData,
		charisma: StatData
	}
}

StatData = {
	total: Number,
	prof: Number
}

InventoryData = {
	weapon: WeaponData,
	armor: ArmorData || undefined,
	shield: Boolean || String,
	tools: ToolData[]
}

WeaponData = {
	name: String,
	link: String,
	damageType: String,
	damage: String,
	versatileDamage: String || undefined,
	simple: Boolean,
	ranged: Boolean,
	allowsShield: Boolean,
	properties: String[]
}

ArmorData = {
	name: String,
	type: String,
	link: String,
	strengthReq: Number,
	armorClass: Number,
	scalesWithDex: Boolean,
	maxDexBonus: Number,
	isStealthy: Boolean
}

ToolData = {
	name: String,
	link: String
}
```

## Valid *raceType* & *subRace*
- Aarakocra
- Aasimar
	- Fallen
	- Protector
	- Scourge
- Bugbear
- Changeling
- Dragonborn
- Dwarf
	- Hill
	- Mountain
- Elf
	- Dark
	- Eladrin
	- High
	- Wood
- Firbolg
- Genasi
	- Air
	- Earth
	- Fire
	- Water
- Gnome
	- Deep
	- Forest
	- Rock
- Goblin
- Goliath
- Grung
- Halfelf
- Halfling
	- Lightfoot
	- Stout
- Halforc
- Hobgoblin
- Human
- Kalashtar
- Kenku
- Kobold
- Lizardfolk
- Orc
- Shifter
	- Beasthide
	- Longtooth
	- Swiftstride
	- Wildhunt
- Tabaxi
- Tiefling
- Triton
- Warforged
	- Envoy
	- Juggernaut
	- Skirmisher
- Yuanti

---

## Valid *classType*
- Artificer
- Barbarian
- Bard
- Cleric
- Druid
- Fighter
- Monk
- Paladin
- Ranger
- Rogue
- Sorcerer
- Warlock
- Wizard

## Need help?
If you've encountered a bug or would like to suggest a feature, feel free to create either a pull request or an issue on the [github](https://github.com/Multarix/DnD-NPC).
