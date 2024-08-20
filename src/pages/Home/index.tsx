import React from "react";

import ProjectTile from "../../componants/projectTile";
import Carousel from "../../componants/carousel";
import TitleAndLogo from "../../componants/logo";

import "./style.css";

import { projectsData } from "../../modules/script.js";


export default function App() {
	const projectTileData = projectsData.filter(item => item.isProject);
	const projectTiles = projectTileData.map(project => <ProjectTile key={project.id} project={project} />);

	return (
		<div className="content home">
			<TitleAndLogo />
			<Carousel elements={projectTiles} elementWidth={300} gapSize={24} title="" />
		</div>
	);
}
