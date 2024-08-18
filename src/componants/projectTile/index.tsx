import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

import { ProjectData } from "../../modules/script.js";



function ProjectHeader(props: { name: string, img: string }): JSX.Element {
	return (
		<div className="tile-header">
			<div className="tile-title-container">
				<h3 className="tile-title">{props.name.toUpperCase()}</h3>
			</div>
			<img key={props.name} className="tile-icon" src={props.img} alt={props.name + " icon"} height="80" width="80"></img>
		</div>
	);
}



export default function ProjectTile(props: { project: ProjectData; }): JSX.Element {
	return (
		<Link to={props.project.url} className="tile-link">
			<div className="project-tile">
				<ProjectHeader name={props.project.name} img={props.project.img} />
				<p className="tile-desc">
					{props.project.shortDesc}
					<br></br>
					<br></br>
					{props.project.longDesc}
				</p>
			</div>
		</Link>
	);
}