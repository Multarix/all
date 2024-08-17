import React from "react";

import ProjectTile from "../../componants/projectTile/index.js";
import Carousel from "../../componants/carousel/index.js";
import TitleAndLogo from "../../componants/logo/index.js";

import { projectsData } from "../../modules/constants.js";


export default function App() {
	const projectTileData = projectsData.filter(item => item.isProject);
	const projectTiles = projectTileData.map(project => <ProjectTile key={project.id} project={project} />);

	return (
		<>
			<TitleAndLogo />
			<Carousel elements={projectTiles} elementWidth={300} gapSize={24} title="" />
		</>
	);
}
