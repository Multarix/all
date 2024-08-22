import React, { useState, useEffect } from 'react';
import {
	TwitterIcon,
	FacebookIcon,
	RedditIcon,
	YoutubeIcon,
	TwitchIcon,
	SteamIcon,
	GithubIcon
} from '../componants/svgs';



export function toProperCase(text: string): string {
	const words = text.split(/\s+/);
	const modifiedWords: string[] = [];

	for(const word of words){
		const firstLetter = Array.from(word)[0].toUpperCase();
		modifiedWords.push(firstLetter + word.substring(1));
	}

	return modifiedWords.join(" ");
}



function getWindowDimensions(): { width: number, height: number } {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height
	};
}



export function useWindowDimensions(): { width: number, height: number } {
	const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions());
		}

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return windowDimensions;
}



export const useContainerDimensions = (reference: React.RefObject<HTMLElement>) => {
	const [dimensions, setDimensions] = useState({ width: 0, height: 0 });


	useEffect(() => {
		const getDimensions = () => {
			if(!reference) return ({ width: 0, height: 0 });
			if(!reference.current) return ({ width: 0, height: 0 });
			return ({
				width: reference.current.offsetWidth,
				height: reference.current.offsetHeight
			});
		};

		const handleResize = () => {
			setDimensions(getDimensions());
		};

		if(reference.current){
			setDimensions(getDimensions());
		}

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [reference]);

	return dimensions;
};



export interface ProjectData {
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
	why: JSX.Element
	about: JSX.Element
	github: string
	docs: boolean
	blog: boolean
	npm?: string
	exampleCode?: string
}



export interface SocialData {
	username: string
	url: string
	title: string
	icon: JSX.Element
	enable: boolean
}



export const DESKTOP_WIDTH = 1280;
export const TABLET_WIDTH = 768;
export const MOBILE_WIDTH = 360;



export const projects: ProjectData[] = [
	{
		name: "Home",
		displayName: "Home",
		id: "Home",
		activeGroup: "Home",
		url: "/",
		img: "conversion.png",
		shortDesc: "",
		longDesc: "",
		isProject: false,
		fullDesc: "",
		why: <></>,
		about: <></>,
		github: "",
		docs: false,
		blog: false
	},
	{
		name: "base conversions",
		displayName: "Base Conversions",
		id: "BaseConversion",
		activeGroup: "base-conversion",
		url: "/conversions",
		img: "conversion.png",
		shortDesc: "Convert between Binary, Octal, Decimal and Hexadecimal.",
		longDesc: "Converts between the bases and gives all the 'magical' steps' that would make a Math teacher wet. Disgusting, but helpful right?",
		isProject: true,
		fullDesc: "Convert between different number bases, as well as to and from Binary Encoded Decimal, while also supplying valid working instructions.",
		why: (
			<p>
				This script was created to spite a university professor who insisted that signed 12 bit binary was commonly used.<br></br>
				<br></br>
				The reality is that he likely based his questions on 12 bit due to the fact that there are little to no online 12 bit binary converters out there.<br></br>
				<br></br>
				Rather than spend the time converting things by hand, I decided to instead spend 10x as long making a script that does it for me, while also providing valid &quot;working&quot; instructions.
			</p>
		),
		about: (
			<>
				<p>
					Using 8, 12, 16 & 32 bit numbers, this script is able to convert between any of the following signed or unsigned bases:
				</p>
				<ul>
					<li>Binary</li>
					<li>Octal</li>
					<li>Decimal</li>
					<li>Hexadecimal</li>
				</ul>
				<p>
					The script is also able to convert to and from Binary Encoded Decimal.
				</p>
			</>
		),
		github: "https://github.com/Multarix/baseConversions",
		docs: false,
		blog: false
	},
	{
		name: "bdo: grind checklist",
		displayName: "Grind Checklist",
		id: "BDOChecklist",
		activeGroup: "home",
		url: "/grind-checklist",
		img: "bdo.png",
		shortDesc: "An online checklist for starting your grind in Black Desert.",
		longDesc: "Black Desert has far too many things you need to remember before you start your grind. This simple checklist should help you remember them all.",
		isProject: true,
		fullDesc: "",
		why: <></>,
		about: <></>,
		github: "",
		docs: false,
		blog: false
	},
	{
		name: "bdo: hp gauge",
		displayName: "Black Desert:\nBoss HP Gauge",
		id: "BDOHP",
		activeGroup: "boss-hp",
		url: "/boss-hp",
		img: "boss-hp.png",
		shortDesc: "A boss HP gauge for the game Black Desert Online.",
		longDesc: "Creates a transparent window that is overlayed on top of the game, allowing you to better see the percentage of boss HP left.",
		isProject: true,
		fullDesc: "A semi-transparent, always-on-top boss HP gauge for the game Black Desert Online.",
		why: (
			<p>
				The reasoning for making this was quite simple really. I couldn&apos;t tell what HP a boss was at. I had to guess based on the HP bar, and could reasonably tell 25, 50 and 75% HP, but anything else was a guess.<br></br>
				<br></br>
				As such I decided to make this to help out. By default, it should open in the exact place that a boss HP bar would appear, and is somewhat transparent. This should allow for you to see the HP underneath it, granting you a more accurate idea of the boss&apos;s HP.
			</p>
		),
		about: (
			<>
				<p>
					Allows for accurate boss HP readings and supports 1080p, 1440p and 4k resolutions. It does not intefere with the game in any way, and is simply a semi-transparent window.
				</p>
				<ul>
					<li>Adjustable position</li>
					<li>Adjustable opacity level</li>
					<li>&apos;Always on top&apos; display</li>
					<li>Markings for every 10% of hp</li>
				</ul>
				<p>
					UI scale must be set to 100% for the ui to be in the correct position.
				</p>
			</>
		),
		github: "https://github.com/Multarix/BDO-Boss-HP-Gauge",
		docs: false,
		blog: false
	},
	{
		name: "boid simulation",
		displayName: "Boid Simulation",
		id: "BoidSimulation",
		activeGroup: "boids",
		url: "/boids",
		img: "boids.png",
		shortDesc: "A flocking algorithm.",
		longDesc: "A flocking algorithm that simulates the behaviour of birds, fish or other similar flocking creatures",
		isProject: true,
		fullDesc: "A bird/ fish or other related flocking simulation.",
		why: (
			<p>
				Well why not? I wanted to learn more about boid simulations and some of the techniques that go into optimising it.<br></br>
				<br></br>
				Specifically, learning about compute shaders as well as gpu instancing. Even if what I learnt was relatively entry level, it was still something that was new and interesting
			</p>
		),
		about: (
			<>
				<p>
					The simulation was built within the Godot Engine, and uses a variety of techniques to increase the amount of boids that can be run simultaneously, including but not limited to:
				</p>
				<ul>
					<li>Compute shader</li>
					<li>GPU instancing</li>
					<li>Basic spatial hashing</li>
					<li>C# implimentation</li>
				</ul>
				<p>
					Using an RTX 2080, I was able to simulate around 100,000 boids while keeping a steady frame rate of 60fps, your milage may vary.
				</p>
			</>
		),
		github: "https://github.com/Multarix/Boids-Compute-Shader",
		docs: false,
		blog: true
	},
	{
		name: "character tracker",
		displayName: "Character Tracker",
		id: "CharacterTracker",
		activeGroup: "character-tracker",
		url: "/character-tracker",
		img: "character-tracker.png",
		shortDesc: "A program created in Python for tracking characters.",
		longDesc: "Can be used to keep track of characters in a story, game or even for a Dungeons and Dragons campaign.",
		isProject: true,
		fullDesc: "Track characters, world building or more with this program. Can be used to keep track of characters in a story, game or even for a Dungeons and Dragons campaign.",
		why: (
			<p>
				I created this to help with tracking characters for stories. I also quickly realised that it can be used for other things, such as a DM using it for a D&D campaign.<br></br>
				<br></br>
				I stopped working on it awhile back, but if anyone shows interest in it, I can update it further. Or if you want, fork it yourself.
			</p>
		),
		about: (
			<p>
				Supports the ability to track multiple characters with things like age, gender, notes and even their relationships to each other.<br></br>
				<br></br>
				Also supports world building notes, allowing you to keep track of things such as locations, events or even things like travel times. Suitable for use in stories, games or even for a Dungeons and Dragons campaign.<br></br>
				<br></br>
				Includes a search feature to quickly find characters or world building notes that include your given search term. Handy for quickly bringing up related information.
			</p>
		),
		github: "https://github.com/Multarix/CharacterTracker",
		docs: false,
		blog: false
	},
	{
		name: "discord: block messages",
		displayName: "Discord:\nHide Blocked Messages",
		id: "DiscordBlockMessages",
		activeGroup: "discord-block",
		url: "/discord-blocked",
		img: "discord.png",
		shortDesc: "A script written in Javascript to be used with Discord.",
		longDesc: "Removes the annoying element that says \"1 Blocked Message - Show Message\" when a user you've blocked sends a message.",
		isProject: true,
		fullDesc: "Remove that annoying \"1 Blocked Message - Show Message\" element when a user you blocked sends a message.",
		why: (
			<p>
				Despite the fact that I personally don&apos;t use this script, I made it because I knew some people thought the fact that blocking a user doesn&apos;t really do much to stop them being able to interact with you if they are still in the same servers as you.<br></br>
				<br></br>
				By using this script, it simply stops the messages of those you have blocked from showing up to begin with. You&apos;ll still get a message recieved notification, but there is not much I can do about that fact.
			</p>
		),
		about: (
			<p>
				This script simply modifies the CSS that Discord uses. In doing so, it hides all messages from people you have blocked. However, the notification that a new message in the channel still appears (there is little that can be done about this fact).<br></br>
				<br></br>
				Compared to other scripts of this nature, this is probably close to, if not the smallest script. The code is relatively simple as well, meaning it&apos;s easy to verify it as being non-harmful.<br></br>
				<br></br>
				Only works on the desktop and browser versions of Discord.
			</p>
		),
		github: "https://github.com/Multarix/Discord-Hide-Blocked-Messages",
		docs: false,
		blog: false
	},
	{
		name: "dnd-npc",
		displayName: "D&D-NPC",
		id: "DnDNPC",
		activeGroup: "npc",
		url: "/dnd-npc",
		img: "dnd.png",
		shortDesc: "A Node.js module for generating random NPCs for Dungeons and Dragons.",
		longDesc: "Allows you to quickly generate NPCs that come fully armed, armoured and with legal stats.",
		isProject: true,
		fullDesc: "A NodeJS module for generating random NPCs in Dungeons and Dragons.",
		why: (
			<p>
				For as long as I can remember, a DM creating throwaway characters that have almost no backstory, yet serve to (hopefully) point adventurers in a specific direction has always been a thing.<br></br>
				<br></br>
				And yet, sometimes your adventurers want to pick a fight with them, or you need to check a stat or two. The idea behind this module is to quickly generate a bunch of seemingly realistic information that a DM can use for those purposes.
			</p>
		),
		about: (
			<>
				<p>
					Generates a bunch of pseudo-random information, including but not limited to:
				</p>
				<ul>
					<li>Name, Age & Gender</li>
					<li>Alignment, Race and Class</li>
					<li>Stats (Str, Dex, Agi etc)</li>
					<li>Weapons/ Armor/ Gear they&apos;re carrying</li>
				</ul>
				<p>
					You can even select the NPC&apos;s race and class before generation, making them more specific to your purpose!
				</p>
			</>
		),
		github: "https://github.com/Multarix/dnd-npc",
		docs: true,
		blog: false,
		npm: "dnd-npc",
		exampleCode: "import NPC from 'dnd-npc';\nconst npc = new NPC()\n    .setRace('warforged', 'juggernaut')\n    .setClass('fighter');\n\nconst char = await npc.generate();"
	},
	{
		name: "lights out",
		displayName: "Lights Out",
		id: "LightsOut",
		activeGroup: "lights-out",
		url: "/lights-out",
		img: "lights-out.png",
		shortDesc: "An implimentation of the classic game 'Lights Out'",
		longDesc: "Created using Javascript, CSS and HTML, it supports a 3x3 and 5x5 board size, along with two different sets of rules",
		isProject: true,
		fullDesc: "A simple implimentation of the classic game 'Lights Out'. Supports 3x3 and 4x4 boards.",
		why: (
			<p>
				I was playing a game and encountered this type of puzzle. Obviously, this was not the first time I had encounted this type of puzzle. However the game&apos;s take on this classic puzzle was a little strange.<br></br>
				<br></br>
				Rather than having a button change the state of the directly adjacent buttons, it changed the state of all buttons near it, including the diagonal ones. This proved to make the game harder than anticipated.<br></br>
				<br></br>
				Feeling inspired, I decided to find out the name of what the puzzle was even called, then see how quickly I could brute force solutions to any given board state.
			</p>
		),
		about: (
			<p>
				The main purpose of this repo, is creating a brute force solver of the puzzle, which I created several versions of, each one faster than the previous iteration. Also, instead of simply sticking to Javascript like I normally do, I decided to branch out and start using C++. The C++ version is significantly faster than the JS ones.<br></br>
				<br></br>
				A terminal application was also created that will solve to solve 3x3, 4x4 and 5x5 states, written in C++ and compiled into an .exe and can be found on the github repo&apos;s release section.
			</p>
		),
		github: "https://github.com/Multarix/lights-out",
		docs: false,
		blog: false
	},
	{
		name: "tera guide",
		displayName: "Tera Guide",
		id: "TeraGuide",
		activeGroup: "tera-guide",
		url: "/tera-guide",
		img: "tera.png",
		shortDesc: "A module for Tera Toolbox.",
		longDesc: "Calls out dungeon/ boss mechanics, recommended skill usage (mainly for healers and tanks), telegraphs attack ranges and more.",
		isProject: true,
		fullDesc: "A TERA Toolbox module that telegraphs boss attacks, calls out mechanics, recommended skill usage and more!",
		why: (
			<p>
				Originally, there was another guide module made by <a className="open-in-new" href="https://github.com/hsdn/tera-guide-core" rel="noreferrer" target="_blank">HSDN</a>, but I found it to be lacking in some areas, or simply had pointless features. Taking their code as a base, I refactored, cleaned up and added/ removed things to my liking. In the process, creating what I felt was a faster and better module.<br></br>
				<br></br>
				Later, HSDN implimented quite a few of my changes and additions to his own module, and I quit the game awhile later. As such this module is archived and no longer maintained.
			</p>
		),
		about: (
			<>
				<p>
					Supports a wide variety of features, including:
				</p>
				<ul>
					<li>Attack Telegraphs</li>
					<li>Dungeon mechanic notifications</li>
					<li>Text to Speech callouts</li>
					<li>Weapons/ Armor/ Gear they&apos;re carrying</li>
					<li>Campfire spawning</li>
				</ul>
				<p>
					Guides for all current (at the time) dungeons were included.
				</p>
			</>
		),
		github: "https://github.com/Multarix/tera-guide-revised",
		docs: false,
		blog: false
	},
	{
		name: "truth table",
		displayName: "Truth Table",
		id: "TruthTable",
		activeGroup: "truth-table",
		url: "/truth-table",
		img: "tables.png",
		shortDesc: "Creates a Truth Table from a javascript statement.",
		longDesc: "Remembering the math symbols for boolean logic and writing out a truth table by hand is a tedious and painful experience. This does it all for you.",
		isProject: true,
		fullDesc: "Creates a truth table from a Javascript boolean statement. Also converts relevant JS symbols into their mathematical counterparts.",
		why: (
			<p>
				I made this because a certain university professor insisted on forcing students to write out truth tables by hand, calculating the answer in the same manner, and using the correct mathematical symbols while doing so.<br></br>
				<br></br>
				So rather than bother to remember the symbols, and spending 20mins per truth table, I instead spent 8 hours doing some research and writing code to do it all for me. All I had to do was provide a valid statement and let it do all the heavy lifting for me.
			</p>
		),
		about: (
			<p>
				Technically, supports up to hundreds of variables with complex statements, but you probably don&apos;t need that. In short, this script creates a truth table of any given statement - provided it&apos;s valid Javascript anyway.<br></br>
				<br></br>
				Supports colored output to the console using <a className="open-in-new" href="https://www.npmjs.com/package/chalk" target="_blank" rel="noreferrer">chalk</a>.
			</p>
		),
		github: "https://github.com/Multarix/TruthTable",
		docs: false,
		blog: false
	}
];



const images = require.context("../img/icons/", false);
const imageList: { [key: string]: string } = {};
images.keys().forEach(image => {
	imageList[image] = images(image);
});



export const projectsData: ProjectData[] = projects.map(project => {
	return {
		name: project.name,
		displayName: project.displayName,
		id: project.id,
		activeGroup: project.activeGroup,
		url: project.url,
		img: imageList[`./${project.img}`],
		shortDesc: project.shortDesc,
		longDesc: project.longDesc,
		isProject: project.isProject,
		fullDesc: project.fullDesc,
		why: project.why,
		about: project.about,
		github: project.github,
		docs: project.docs,
		blog: project.blog,
		npm: project.npm,
		exampleCode: project.exampleCode
	};
});



export const socialsData: SocialData[] = [
	{
		username: "multarix",
		url: "twitter.com/",
		title: "Twitter",
		icon: <TwitterIcon />,
		enable: true
	},
	{
		username: "",
		url: "facebook.com/",
		title: "Facebook",
		icon: <FacebookIcon />,
		enable: false
	},
	{
		username: "multarix_",
		url: "youtube.com/@",
		title: "Youtube",
		icon: <YoutubeIcon />,
		enable: true
	},
	{
		username: "multarix",
		url: "twitch.com/",
		title: "Twitch",
		icon: <TwitchIcon />,
		enable: true
	},
	{
		username: "",
		url: "reddit.com/u/",
		title: "Reddit",
		icon: <RedditIcon />,
		enable: false
	},
	{
		username: "multarix",
		url: "steamcommunity.com/id/",
		title: "Steam",
		icon: <SteamIcon />,
		enable: false
	},
	{
		username: "multarix",
		url: "github.com/",
		title: "Github",
		icon: <GithubIcon />,
		enable: true
	}

];