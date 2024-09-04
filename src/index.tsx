import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import "./style.css";

import Navbar from './componants/navbar';
import Home from "./pages/Home";
import ProjectsPage from "./pages/Projects";
import BlogPage from './pages/BlogTemplate';

import GrindChecklist from "./pages/GrindChecklist";
import ErrorPage from "./pages/ErrorPage";

import { projectsData, socialsData } from "./modules/script.js";


const projectPages = projectsData.filter(p => p.isProject).map(project => {
	if(project.id === "BDOChecklist") return <Route key={project.id} path={project.url} element={<GrindChecklist />} />;
	const routeArray: JSX.Element[] = [];

	routeArray.push(<Route key={project.id} path={project.url} element={<ProjectsPage {...project} />} />);
	if(project.blog && project.blogMarkdown) routeArray.push(<Route key={project.id + "_blog"} path={project.url + "/blog"} element={<BlogPage markdown={project.blogMarkdown} />} />);
	// if(project.docs) routeArray.push(<Route key={project.id + "_docs"} path={project.url + "/docs"} element={<DocsPage markdown={project.blogMarkdown} />} />);

	return routeArray;
});


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Navbar projects={projectsData} socials={socialsData} />
			<div id="query-container">
				<div id="width-limit">
					<Routes>
						<Route path="/" element={<Home />}/>

						{projectPages.flat()}

						<Route path="*" element={<ErrorPage />}/>
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	</React.StrictMode>
);

reportWebVitals();
