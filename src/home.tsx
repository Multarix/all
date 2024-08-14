import React from "react";
import "./style.css";

import Navbar from "./componants/navbar";
import ProjectTile from "./componants/projectTile";
import Carousel from "./componants/carousel";
import TitleAndLogo from "./componants/logo";

import { projectsData, socialsData } from "./modules/constants.js";


export default function App() {
	const projectTileData = projectsData.filter(item => item.isProject);
	const projectTiles = projectTileData.map(project => <ProjectTile key={project.id} project={project} />);

	return (
		<>
			<Navbar projects={projectsData} socials={socialsData} />
			<div className="body-padding">
				<TitleAndLogo />
				<Carousel elements={projectTiles} elementWidth={300} gapSize={24} title="" />
			</div>
		</>
	);
}
