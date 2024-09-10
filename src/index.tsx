import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import "./style.css";

import Navbar from './componants/navbar';
import Home from "./pages/Home";
import ProjectsPage from "./pages/Projects";
import BlogPage from "./pages/BlogTemplate";
import DocsPage from "./pages/DocsTemplate";

import GrindChecklist from "./pages/GrindChecklist";
import ErrorPage from "./pages/ErrorPage";

import Container from './componants/container';

import { projectsData, socialsData } from "./modules/script.js";
import DocsData from "./modules/docs.mjs";

const HomeElement = (
	<Container>
		<Home />
	</Container>
);

const GrindElement = (
	<Container>
		<GrindChecklist />
	</Container>
);

const ErrorElement = (
	<Container>
		<ErrorPage />
	</Container>
);


const projectPages = projectsData.filter(p => p.isProject).map(project => {
	if(project.id === "BDOChecklist") return <Route key={project.id} path={project.url} element={GrindElement} />;

	const routeArray: JSX.Element[] = [];
	const ProjectElement = (
		<Container>
			<ProjectsPage {...project} />
		</Container>
	);

	// Project Page
	routeArray.push(<Route key={project.id} path={project.url} element={ProjectElement} />);

	// Blog Page
	if(project.blog && project.blogMarkdown){
		const BlogElement = (
			<Container>
				<BlogPage markdown={project.blogMarkdown} />
			</Container>
		);

		routeArray.push(<Route key={project.id + "_blog"} path={project.url + "/blog"} element={BlogElement} />);
	}

	// Documentation Pages
	if(project.docs){
		for(const key of Object.keys(DocsData)){
			if(!key.startsWith(project.id)) continue;
			const value = DocsData[key];

			const pageLocation = key.slice(project.id.length + 1);								// ==> "role-types/index"				| "constructor"
			const directoryMap = pageLocation.split("/");										// ==> ["role-types", "index"]			| ["constructor"]
			const fileName = directoryMap.pop();												// ==> ["role-types"], "index"			| [], "constructor"

			const pageURL = `/${pageLocation}`;
			const fileURL = (fileName === "index") ? pageURL.slice(0, -6) : pageURL;			// ==> "role-types"						| "constructor"

			const routeKey = `${project.id}_docs${fileURL.replace(/\//g, "_").replace(/-/g, "")}`;
			const routePath = `${project.url}/docs${fileURL}`;

			routeArray.push(<Route key={routeKey} path={`/${routePath}`} element={<DocsPage markdown={value} url={project.url} />} />);
		}
	}

	return routeArray;
});


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Navbar projects={projectsData} socials={socialsData} />
			<Routes>
				<Route path="/" element={HomeElement}/>

				{projectPages.flat()}

				<Route path="*" element={ErrorElement}/>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);

reportWebVitals();
