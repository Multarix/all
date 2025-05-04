import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ReactDOM from 'react-dom/client';

import "./style.css";

import Navbar from './componants/navbar';
import Home from "./componants/pages/Home";
import ProjectsPage from "./componants/pages/Projects";
import MarkdownPage from "./componants/pages/MarkdownPageTemplate";
import GrindChecklist from "./componants/pages/GrindChecklist";
import BingoPage from "./componants/pages/Bingo";
import ErrorPage from "./componants/pages/ErrorPage";
import Container from './componants/container';

import { projectsData, socialsData } from "./extras/_modules/script.js";
import DocsData from "./extras/_modules/docs.mjs";
import BlogData from "./extras/_modules/blogs.mjs";


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

const BingoElement = (
	<Container>
		<BingoPage />
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
	if(project.blog){
		for(const key of Object.keys(BlogData)){
			if(!key.startsWith(project.id)) continue;
			const value = BlogData[key];

			const pageLocation = key.slice(project.id.length + 1);								// ==> "role-types/index"				| "constructor"
			const directoryMap = pageLocation.split("/");										// ==> ["role-types", "index"]			| ["constructor"]
			const fileName = directoryMap.pop();												// ==> ["role-types"], "index"			| [], "constructor"

			const pageURL = `/${pageLocation}`;
			const fileURL = (fileName === "index") ? pageURL.slice(0, -6) : pageURL;			// ==> "role-types"						| "constructor"

			const routeKey = `${project.id}_blog${fileURL.replace(/\//g, "_").replace(/-/g, "")}`;
			const routePath = `${project.url}/blog${fileURL}`;

			routeArray.push(<Route key={routeKey} path={`/${routePath}`} element={<MarkdownPage markdown={value} baseUrl={project.url + "/blog"} />} />);
		}
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

			routeArray.push(<Route key={routeKey} path={`/${routePath}`} element={<MarkdownPage markdown={value} baseUrl={project.url + "/docs"} />} />);
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
				<Route path="/bingo" element={BingoElement}/>
				<Route path="/bdoguessr" Component={() => { window.location.href = "https://bdoguessr.moe"; return null; }}/>

				{projectPages.flat()}

				<Route path="*" element={ErrorElement}/>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);