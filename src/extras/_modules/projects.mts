export interface BaseProjectData {
	name: string
	displayName: string,
	id: string
	activeGroup: string
	url: string
	img: string
	shortDesc: string
	longDesc: string
	isProject: boolean
	fullDesc: string
	github: string
	docs: boolean
	blog: boolean
	npm?: string
	exampleCode?: string
	codeLang?: string
}

const BaseProjects: { [key: string]: BaseProjectData } = {
	"Home": {
		"name": "Home",
		"displayName": "Home",
		"id": "Home",
		"activeGroup": "Home",
		"url": "/",
		"img": "conversion.png",
		"shortDesc": "",
		"longDesc": "",
		"isProject": false,
		"fullDesc": "",
		"github": "",
		"docs": false,
		"blog": false
	},
	"BaseConversion": {
		"name": "base conversions",
		"displayName": "Base Conversions",
		"id": "BaseConversion",
		"activeGroup": "base-conversion",
		"url": "/conversions",
		"img": "conversion.png",
		"shortDesc": "Convert between Binary, Octal, Decimal and Hexadecimal.",
		"longDesc": "Converts between the bases and gives all the 'magical' steps' that would make a Math teacher wet. Disgusting, but helpful right?",
		"isProject": true,
		"fullDesc": "Convert between different number bases, as well as to and from Binary Encoded Decimal, while also supplying valid working instructions.",
		"github": "https://github.com/Multarix/baseConversions",
		"docs": false,
		"blog": false
	},
	"BDOChecklist":{
		"name": "bdo: grind checklist",
		"displayName": "Grind Checklist",
		"id": "BDOChecklist",
		"activeGroup": "home",
		"url": "/grind-checklist",
		"img": "bdo.png",
		"shortDesc": "An online checklist for starting your grind in Black Desert.",
		"longDesc": "Black Desert has far too many things you need to remember before you start your grind. This simple checklist should help you remember them all.",
		"isProject": true,
		"fullDesc": "",
		"github": "",
		"docs": false,
		"blog": false
	},
	"BDOHP": {
		"name": "bdo: hp gauge",
		"displayName": "Black Desert:\nBoss HP Gauge",
		"id": "BDOHP",
		"activeGroup": "boss-hp",
		"url": "/boss-hp",
		"img": "boss-hp.png",
		"shortDesc": "A boss HP gauge for the game Black Desert Online.",
		"longDesc": "Creates a transparent window that is overlayed on top of the game, allowing you to better see the percentage of boss HP left.",
		"isProject": true,
		"fullDesc": "A semi-transparent, always-on-top boss HP gauge for the game Black Desert Online.",
		"github": "https://github.com/Multarix/BDO-Boss-HP-Gauge",
		"docs": false,
		"blog": false
	},
	"BoidSimulation": {
		"name": "boid simulation",
		"displayName": "Boid Simulation",
		"id": "BoidSimulation",
		"activeGroup": "boids",
		"url": "/boids",
		"img": "boids.png",
		"shortDesc": "A flocking algorithm.",
		"longDesc": "A flocking algorithm that simulates the behaviour of birds, fish or other similar flocking creatures",
		"isProject": true,
		"fullDesc": "A bird/ fish or other related flocking simulation.",
		"github": "https://github.com/Multarix/Boids-Compute-Shader",
		"docs": false,
		"blog": true
	},
	"CharacterTracker": {
		"name": "character tracker",
		"displayName": "Character Tracker",
		"id": "CharacterTracker",
		"activeGroup": "character-tracker",
		"url": "/character-tracker",
		"img": "character-tracker.png",
		"shortDesc": "A program created in Python for tracking characters.",
		"longDesc": "Can be used to keep track of characters in a story, game or even for a Dungeons and Dragons campaign.",
		"isProject": true,
		"fullDesc": "Track characters, world building or more with this program. Can be used to keep track of characters in a story, game or even for a Dungeons and Dragons campaign.",
		"github": "https://github.com/Multarix/CharacterTracker",
		"docs": false,
		"blog": false
	},
	"DiscordBlockMessages": {
		"name": "discord: block messages",
		"displayName": "Discord:\nHide Blocked Messages",
		"id": "DiscordBlockMessages",
		"activeGroup": "discord-block",
		"url": "/discord-blocked",
		"img": "discord.png",
		"shortDesc": "A script written in Javascript to be used with Discord.",
		"longDesc": "Removes the annoying element that says \"1 Blocked Message - Show Message\" when a user you've blocked sends a message.",
		"isProject": true,
		"fullDesc": "Remove that annoying \"1 Blocked Message - Show Message\" element when a user you blocked sends a message.",
		"github": "https://github.com/Multarix/Discord-Hide-Blocked-Messages",
		"docs": false,
		"blog": false
	},
	"DnDNPC": {
		"name": "dnd-npc",
		"displayName": "D&D-NPC",
		"id": "DnDNPC",
		"activeGroup": "npc",
		"url": "/dnd-npc",
		"img": "dnd.png",
		"shortDesc": "A Node.js module for generating random NPCs for Dungeons and Dragons.",
		"longDesc": "Allows you to quickly generate NPCs that come fully armed, armoured and with legal stats.",
		"isProject": true,
		"fullDesc": "A NodeJS module for generating random NPCs in Dungeons and Dragons.",
		"github": "https://github.com/Multarix/dnd-npc",
		"docs": true,
		"blog": false,
		"npm": "dnd-npc",
		"exampleCode": "import NPC from 'dnd-npc';\nconst npc = new NPC()\n    .setRace('warforged', 'juggernaut')\n    .setClass('fighter');\n\nconst char = await npc.generate();",
		"codeLang": "javascript"
	},
	"LightsOut": {
		"name": "lights out",
		"displayName": "Lights Out",
		"id": "LightsOut",
		"activeGroup": "lights-out",
		"url": "/lights-out",
		"img": "lights-out.png",
		"shortDesc": "An implimentation of the classic game 'Lights Out'",
		"longDesc": "Created using Javascript, CSS and HTML, it supports a 3x3 and 5x5 board size, along with two different sets of rules",
		"isProject": true,
		"fullDesc": "A simple implimentation of the classic game 'Lights Out'. Supports 3x3 and 4x4 boards.",
		"github": "https://github.com/Multarix/lights-out",
		"docs": false,
		"blog": false
	},
	"TeraGuide": {
		"name": "tera guide",
		"displayName": "Tera Guide",
		"id": "TeraGuide",
		"activeGroup": "tera-guide",
		"url": "/tera-guide",
		"img": "tera.png",
		"shortDesc": "A module for Tera Toolbox.",
		"longDesc": "Calls out dungeon/ boss mechanics, recommended skill usage (mainly for healers and tanks), telegraphs attack ranges and more.",
		"isProject": true,
		"fullDesc": "A TERA Toolbox module that telegraphs boss attacks, calls out mechanics, recommended skill usage and more!",
		"github": "https://github.com/Multarix/tera-guide-revised",
		"docs": false,
		"blog": false
	},
	"TruthTable": {
		"name": "truth table",
		"displayName": "Truth Table",
		"id": "TruthTable",
		"activeGroup": "truth-table",
		"url": "/truth-table",
		"img": "tables.png",
		"shortDesc": "Creates a Truth Table from a javascript statement.",
		"longDesc": "Remembering the math symbols for boolean logic and writing out a truth table by hand is a tedious and painful experience. This does it all for you.",
		"isProject": true,
		"fullDesc": "Creates a truth table from a Javascript boolean statement. Also converts relevant JS symbols into their mathematical counterparts.",
		"github": "https://github.com/Multarix/TruthTable",
		"docs": false,
		"blog": false
	}
};

export default BaseProjects;