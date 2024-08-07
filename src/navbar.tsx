import React, { useEffect } from "react";
import './style.css';

import { socialsData, projectsData } from "./data/data";
import { useWindowDimensions } from "./functions.js";

const MOBILE_WIDTH = 600;


// Componants
function ProjectsSection(): JSX.Element {
	const { width } = useWindowDimensions();

	const projects = projectsData.map(project => {
		return (
			<a key={project.id} href={project.url}>
				{project.name.toUpperCase()}
			</a>
		);
	});

	if(width >= MOBILE_WIDTH){
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



function SocialLinks(): JSX.Element {
	const socials = socialsData.filter(social => social.enable).map(social => {
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



function SocialsSection(): JSX.Element {
	const { width } = useWindowDimensions();

	if(width >= MOBILE_WIDTH){
		return (
			<>
				<EmptySection />
				<SocialLinks />
			</>
		);
	}

	// Mobile
	return (
		<>
			<SocialMobileBars />
			<SocialLinks />
		</>
	);
}



export default function Navbar(): JSX.Element {
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



	if(width >= MOBILE_WIDTH){
		return (
			<nav id="navbar">
				<ProjectsSection/>
				<SocialsSection />
			</nav>
		);
	}

	// Mobile
	return (
		<nav id="navbar" className="mobile">
			<ProjectsSection />
			<SocialsSection />
		</nav>
	);
}