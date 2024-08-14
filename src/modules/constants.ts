export interface ProjectData {
	name: string
	id: string
	activeGroup: string
	url: string
	img: string
	shortDesc: string
	longDesc: string
	isProject: boolean
}


export interface SocialData {
	username: string
	url: string
	title: string
	icon: string
	enable: boolean
}

export const DESKTOP_WIDTH = 1280;
export const TABLET_WIDTH = 768;
export const MOBILE_WIDTH = 360;

export const projects: ProjectData[] = [
	{
		name: "all projects",
		id: "AllProjects",
		activeGroup: "all-projects",
		url: "/",
		img: "conversion.png",
		shortDesc: "",
		longDesc: "",
		isProject: false
	},
	{
		name: "base conversions",
		id: "BaseConversion",
		activeGroup: "base-conversion",
		url: "/base-conversion",
		img: "conversion.png",
		shortDesc: "Convert between Binary, Octal, Decimal and Hexadecimal.",
		longDesc: "Converts between the bases and gives all the 'magical' steps' that would make a Math teacher wet. Disgusting, but helpful right?",
		isProject: true
	},
	{
		name: "bdo: grind checklist",
		id: "BDOChecklist",
		activeGroup: "home",
		url: "/grind-checklist",
		img: "bdo.png",
		shortDesc: "An online checklist for starting your grind in Black Desert.",
		longDesc: "Black Desert has far too many things you need to remember before you start your grind. This simple checklist should help you remember them all.",
		isProject: true
	},
	{
		name: "bdo: hp gauge",
		id: "BDOHP",
		activeGroup: "boss-hp",
		url: "/boss-hp",
		img: "boss-hp.png",
		shortDesc: "A boss HP gauge for the game Black Desert Online.",
		longDesc: "Creates a transparent window that is overlayed on top of the game, allowing you to better see the percentage of boss HP left.",
		isProject: true
	},
	{
		name: "boid simulation",
		id: "BoidSimulation",
		activeGroup: "boids",
		url: "/boids",
		img: "boids.png",
		shortDesc: "A flocking algorithm.",
		longDesc: "A flocking algorithm that simulates the behaviour of birds, fish or other similar flocking creatures",
		isProject: true
	},
	{
		name: "character tracker",
		id: "CharacterTracker",
		activeGroup: "character-tracker",
		url: "/character-tracker",
		img: "character-tracker.png",
		shortDesc: "A program created in Python for tracking characters.",
		longDesc: "Can be used to keep track of characters in a story, game or even for a Dungeons and Dragons campaign.",
		isProject: true
	},
	{
		name: "discord: block messages",
		id: "DiscordBlockMessages",
		activeGroup: "discord-block",
		url: "/discord-block-messages",
		img: "discord.png",
		shortDesc: "A script written in Javascript to be used with Discord.",
		longDesc: "Removes the annoying element that says \"1 Blocked Message - Show Message\" when a user you've blocked sends a message.",
		isProject: true
	},
	{
		name: "dnd-npc",
		id: "DnDNPC",
		activeGroup: "npc",
		url: "/npc",
		img: "dnd.png",
		shortDesc: "A Node.js module for generating random NPCs for Dungeons and Dragons.",
		longDesc: "Allows you to quickly generate NPCs that come fully armed, armoured and with legal stats.",
		isProject: true
	},
	{
		name: "lights out",
		id: "LightsOut",
		activeGroup: "lights-out",
		url: "/lights-out",
		img: "lights-out.png",
		shortDesc: "An implimentation of the classic game 'Lights Out'",
		longDesc: "Created using Javascript, CSS and HTML, it supports a 3x3 and 5x5 board size, along with two different sets of rules",
		isProject: true
	},
	{
		name: "tera guide",
		id: "TeraGuide",
		activeGroup: "tera-guide",
		url: "/tera-guide",
		img: "tera.png",
		shortDesc: "A module for Tera Toolbox.",
		longDesc: "Calls out dungeon/ boss mechanics, recommended skill usage (mainly for healers and tanks), telegraphs attack ranges and more.",
		isProject: true
	},
	{
		name: "truth table",
		id: "TruthTable",
		activeGroup: "truth-table",
		url: "/truth-table",
		img: "tables.png",
		shortDesc: "Creates a Truth Table from a javascript statement.",
		longDesc: "Remembering the math symbols for boolean logic and writing out a truth table by hand is a tedious and painful experience. This does it all for you.",
		isProject: true
	}
];

const images = require.context("../img/icons/", false);
const imageList: { [key: string]: string } = {};
images.keys().forEach(image => {
	imageList[image] = images(image);
});

export const projectsData = projects.map(project => {
	return {
		name: project.name,
		id: project.id,
		activeGroup: project.activeGroup,
		url: project.url,
		img: imageList[`./${project.img}`],
		shortDesc: project.shortDesc,
		longDesc: project.longDesc,
		isProject: project.isProject
	};
});

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