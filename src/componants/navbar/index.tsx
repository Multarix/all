import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import './style.css';

import { SocialData, ProjectData, TABLET_WIDTH } from "../../modules/constants.js";
import { useWindowDimensions } from "../../modules/functions.js";



// Componants
function ProjectsSection(props: { projects: ProjectData[] }): JSX.Element {
	const { width } = useWindowDimensions();

	// const projects = [];
	// for(const project of props.projects){
	// 	projects.push(<Link to="boids">{project.name.toUpperCase()}</Link>);
	// }

	const projects = props.projects.map(project => {
		return (
			<Link to={project.url} key={project.id}>{project.name.toUpperCase()}</Link>
		);
	});

	if(width >= TABLET_WIDTH){
		return (
			<div id="nav-projects" className="nav-section nav-dropdown">
				<a href={void (0)}>
					<i className="fa-solid fa-folder-open"></i>
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
				<i className="fa-solid fa-folder-open"></i>
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
				<i className="fa-solid fa-bars"></i>
			</a>
		</div>
	);
}



function SocialLinks(props: { socials: SocialData[] }): JSX.Element {
	const socials = props.socials.filter(social => social.enable).map(social => {
		return (
			<a key={ social.title } href={ "http://" + social.url + social.username } target="_blank" rel="noreferrer">
				<i className={ social.icon }></i>
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