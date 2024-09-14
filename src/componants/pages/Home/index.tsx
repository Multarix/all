import React from "react";

import ProjectTile from "../../projectTile";
import Carousel from "../../carousel";
import TitleAndLogo from "../../logo";

import { projectsData } from "../../../extras/_modules/script.js";

import "./style.css";

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
