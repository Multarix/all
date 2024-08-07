import React from "react";
import './style.css';

import Navbar from "./navbar";
import { projectsData } from './data/data';



function ProjectContainer(): JSX.Element {
	const changeLocation = (url: string) => {
		window.location.href = url;
	};

	const projectTileData = projectsData.filter(project => project.project);
	const projectTiles = projectTileData.map(project => {
		return (
			<div key={project.id} onClick={changeLocation.bind(null, project.url)}>
				<div>
					<div>
						<h3>{project.name.toUpperCase()}</h3>
					</div>
					<img src={project.img} alt={project.name + " icon"} height="80" width="80"></img>
				</div>
				<p>{project.shortDesc}<br></br><br></br>{project.longDesc}</p>
			</div>
		);
	});

	return (
		<>
			{projectTiles}
		</>
	);
}


function App() {
	return (
		<>
			<Navbar />
			<div className="all-projects">
				<ProjectContainer />
			</div>
		</>
	);
}

export default App;
