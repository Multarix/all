import React from "react";


import "./style.css";

import { TABLET_WIDTH, ProjectData } from "../../modules/constants.js";
import { useWindowDimensions } from "../../modules/functions.js";


interface ProjectHeaderProps {
	name: string
	img: string
}
function ProjectHeader(props: ProjectHeaderProps): JSX.Element {
	return (
		<div className="tile-header">
			<div className="tile-title-container">
				<h3 className="tile-title">{props.name.toUpperCase()}</h3>
			</div>
			<img key={props.name} className="tile-icon" src={props.img} alt={props.name + " icon"} height="80" width="80"></img>
		</div>
	);
}



interface ProjectTileProps {
	project: ProjectData;
}
export default function ProjectTile(props: ProjectTileProps): JSX.Element {

	const handleClick = (url: string) => {
		console.log(`Would change location to: ${url}`);
	};

	return (
		<div className="project-tile" onClick={handleClick.bind(null, props.project.url)}>
			<ProjectHeader name={props.project.name} img={props.project.img} />
			<p className="tile-desc">
				{props.project.shortDesc}
				<br></br>
				<br></br>
				{props.project.longDesc}
			</p>
		</div>
	);
}