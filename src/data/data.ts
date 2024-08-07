export interface ProjectData {
	name: string
	id: string
	activeGroup: string
	url: string
	img: string
	shortDesc: string
	longDesc: string
	project: boolean
}


export interface SocialData {
	username: string
	url: string
	title: string
	icon: string
	enable: boolean
}


export const projectsData: ProjectData[] = [
	{
		name: "all projects",
		id: "AllProjects",
		activeGroup: "all-projects",
		url: "/",
		img: "./img/project-icons.png",
		shortDesc: "",
		longDesc: "",
		project: false
	},
	{
		name: "base conversions",
		id: "BaseConversion",
		activeGroup: "base-conversion",
		url: "/base-conversion",
		img: "./img/icons/conversion.png",
		shortDesc: "Convert between Binary, Octal, Decimal and Hexadecimal.",
		longDesc: "Converts between the bases and gives all the 'magical' steps' that would make a Math teacher wet. Disgusting, but helpful right?",
		project: true
	},
	{
		name: "bdo: grind checklist",
		id: "BDOChecklist",
		activeGroup: "home",
		url: "/grind-checklist",
		img: "./img/icons/bdo.png",
		shortDesc: "An online checklist for starting your grind in Black Desert.",
		longDesc: "Black Desert has far too many things you need to remember before you start your grind. This simple checklist should help you remember them all.",
		project: true
	},
	{
		name: "bdo: hp gauge",
		id: "BDOHP",
		activeGroup: "boss-hp",
		url: "/boss-hp",
		img: "./img/icons/boss-hp.png",
		shortDesc: "A boss HP gauge for the game Black Desert Online.",
		longDesc: "Creates a transparent window that is overlayed on top of the game, allowing you to better see the percentage of boss HP left.",
		project: true
	},
	{
		name: "boid simulation",
		id: "BoidSimulation",
		activeGroup: "boids",
		url: "/boids",
		img: "./img/icons/boids.png",
		shortDesc: "A flocking algorithm.",
		longDesc: "A flocking algorithm that simulates the behaviour of birds, fish or other similar flocking creatures",
		project: true
	},
	{
		name: "character tracker",
		id: "CharacterTracker",
		activeGroup: "character-tracker",
		url: "/character-tracker",
		img: "./img/icons/character-tracker.png",
		shortDesc: "A program created in Python for tracking characters.",
		longDesc: "Can be used to keep track of characters in a story, game or even for a Dungeons and Dragons campaign.",
		project: true
	},
	{
		name: "discord: block messages",
		id: "DiscordBlockMessages",
		activeGroup: "discord-block",
		url: "/discord-block-messages",
		img: "./img/icons/discord.png",
		shortDesc: "A script written in Javascript to be used with Discord.",
		longDesc: "Removes the annoying element that says \"1 Blocked Message - Show Message\" when a user you've blocked sends a message.",
		project: true
	},
	{
		name: "discord: chat buttons",
		id: "DiscordChatButtons",
		activeGroup: "discord-chat",
		url: "/discord-chat-buttons",
		img: "./img/icons/discord.png",
		shortDesc: "A script written in Javascript to be used with Discord.",
		longDesc: "Removes various useless/ annoying buttons such as \"Gift Nitro\" from the chat bar. Various configurations are available.",
		project: true
	},
	{
		name: "dnd-dice",
		id: "DnDDice",
		activeGroup: "dice",
		url: "/dice",
		img: "./img/icons/dnd.png",
		shortDesc: "A Node.js module for rolling dice for Dungeons and Dragons.",
		longDesc: "Allows you to quickly roll dice or even flip a coin for any D&D related purpose.",
		project: true
	},
	{
		name: "dnd-loot",
		id: "DnDLoot",
		activeGroup: "loot",
		url: "/loot",
		img: "./img/icons/dnd.png",
		shortDesc: "A Node.js module for generating encounter loot for Dungeons and Dragons.",
		longDesc: "Allows you to quickly generate loot for a single encounter or hoard encounter.",
		project: true
	},
	{
		name: "dnd-npc",
		id: "DnDNPC",
		activeGroup: "npc",
		url: "/npc",
		img: "./img/icons/dnd.png",
		shortDesc: "A Node.js module for generating random NPCs for Dungeons and Dragons.",
		longDesc: "Allows you to quickly generate NPCs that come fully armed, armoured and with legal stats.",
		project: true
	},
	{
		name: "lights out",
		id: "LightsOut",
		activeGroup: "lights-out",
		url: "/lights-out",
		img: "./img/icons/lights-out.png",
		shortDesc: "An implimentation of the classic game 'Lights Out'",
		longDesc: "Created using Javascript, CSS and HTML, it supports a 3x3 and 5x5 board size, along with two different sets of rules",
		project: true
	},
	{
		name: "python to pseudo",
		id: "PyToPseudo",
		activeGroup: "pseudo-code",
		url: "/pseudo-code",
		img: "./img/icons/python.png",
		shortDesc: "A script that converts Python code into pseudo-code.",
		longDesc: "For those idiotic teachers who want you to write pseudo-code instead of actual code. Now you can do both at the same time!",
		project: true
	},
	{
		name: "tera guide",
		id: "TeraGuide",
		activeGroup: "tera-guide",
		url: "/tera-guide",
		img: "./img/icons/tera.png",
		shortDesc: "A module for Tera Toolbox.",
		longDesc: "Calls out dungeon/ boss mechanics, recommended skill usage (mainly for healers and tanks), telegraphs attack ranges and more.",
		project: true
	},
	{
		name: "truth table",
		id: "TruthTable",
		activeGroup: "truth-table",
		url: "/truth-table",
		img: "./img/icons/tables.png",
		shortDesc: "Creates a Truth Table from a javascript statement.",
		longDesc: "Remembering the math symbols for boolean logic and writing out a truth table by hand is a tedious and painful experience. This does it all for you.",
		project: true
	}
];

export const socialsData: SocialData[] = [
	{
		username: "multarix",
		url: "twitter.com/",
		title: "Twitter",
		icon: "fa brands fa-twitter",
		enable: true
	},
	{
		username: "",
		url: "facebook.com/",
		title: "Facebook",
		icon: "fa brands fa-facebook",
		enable: false
	},
	{
		username: "multarix_",
		url: "youtube.com/@",
		title: "Youtube",
		icon: "fa brands fa-youtube",
		enable: true
	},
	{
		username: "",
		url: "twitch.com/",
		title: "Twitch",
		icon: "fa brands fa-twitch",
		enable: false
	},
	{
		username: "",
		url: "reddit.com/u/",
		title: "Reddit",
		icon: "fa brands fa-reddit",
		enable: false
	},
	{
		username: "multarix",
		url: "steamcommunity.com/id/",
		title: "Steam",
		icon: "fa brands fa-steam",
		enable: true
	},
	{
		username: "multarix",
		url: "github.com/",
		title: "Github",
		icon: "fa brands fa-github",
		enable: true
	}

];