import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import './style.css';

import { MenuLeftIcon, MenuRightIcon } from "../svgs";

import { useWindowDimensions, SocialData, ProjectData, TABLET_WIDTH } from "../../extras/_modules/script.js";

/*
if ("ontouchstart" in document.documentElement){
	// touch device
}
*/

// Componants
function ProjectsSection(props: { projects: ProjectData[] }): JSX.Element {
	const { width } = useWindowDimensions();

	const projects = props.projects.map(project => {
		return (
			<Link to={project.url} key={project.id}>{project.navbarName.toUpperCase()}</Link>
		);
	});

	if(width >= TABLET_WIDTH){
		return (
			<div id="nav-projects" className="nav-section nav-dropdown">
				<a href={void (0)}>
					<MenuLeftIcon />
				</a>
				<div id="nav-projects-dropdown" className="nav-dropdown-content">
					{projects}
				</div>
			</div>
		);
	}

	// Mobile
	return (
		<div id="nav-projects" className="nav-section nav-dropdown supress-hover">
			<a href={void (0)}>
				<MenuLeftIcon />
			</a>
			<div id="nav-projects-dropdown" className="nav-dropdown-content">
				{projects}
			</div>
		</div>
	);
}



function EmptySection(): JSX.Element {
	return (
		<div className="nav-section nav-empty"></div>
	);
}



function SocialMobileBars(): JSX.Element {
	return (
		<div id="mobile-bars" className="nav-section">
			<a href={void (0)}>
				<MenuRightIcon />
			</a>
		</div>
	);
}



function SocialLinks(props: { socials: SocialData[] }): JSX.Element {
	const socials = props.socials.filter(social => social.enable).map(social => {
		return (
			<a key={ social.title } href={ "http://" + social.url + social.username } target="_blank" rel="noreferrer">
				{social.icon}
			</a>
		);
	});

	// Mobile
	return (
		<div className="socials-container">
			<div id="nav-social" className="nav-section">
				{socials}
			</div>
		</div>
	);
}



function SocialsSection(props: { socials: SocialData[] }): JSX.Element {
	const { width } = useWindowDimensions();

	if(width >= TABLET_WIDTH){
		return (
			<>
				<EmptySection />
				<SocialLinks socials={props.socials} />
			</>
		);
	}

	// Mobile
	return (
		<>
			<EmptySection />
			<SocialMobileBars />
			<SocialLinks socials={props.socials} />
		</>
	);
}



export default function Navbar(props: { projects: ProjectData[], socials: SocialData[] }): JSX.Element {
	const { width } = useWindowDimensions();

	useEffect(() => {
		const handleProjectsHamberg = () => {
			const dropdown = document.getElementById("nav-projects-dropdown") as HTMLDivElement;
			if(dropdown.classList.contains("show-projects")) return dropdown.classList.remove("show-projects");
			dropdown.classList.add("show-projects");
		};
		const navProjectDiv = document.getElementById("nav-projects") as HTMLDivElement;
		navProjectDiv.onclick = handleProjectsHamberg;


		const toggleSocials = () => {
			const navbar = document.getElementById("nav-social") as HTMLDivElement;
			if(navbar.classList.contains("slide-in")) return navbar.classList.remove("slide-in");
			navbar.classList.add("slide-in");
		};
		const mobileBarsDiv = document.getElementById("mobile-bars") as HTMLDivElement;
		if(mobileBarsDiv) mobileBarsDiv.onclick = toggleSocials;
	});



	if(width >= TABLET_WIDTH){
		return (
			<nav id="navbar">
				<ProjectsSection projects={props.projects} />
				<SocialsSection socials={props.socials} />
			</nav>
		);
	}

	// Mobile
	return (
		<nav id="navbar" className="mobile">
			<ProjectsSection projects={props.projects} />
			<SocialsSection socials={props.socials} />
		</nav>
	);
}