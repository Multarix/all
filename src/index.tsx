import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import "./style.css";

import Navbar from './componants/navbar';
import Home from "./pages/Home";
import ProjectsPage from "./pages/Projects";
import GrindChecklist from "./pages/GrindChecklist";
import ErrorPage from "./pages/ErrorPage";

import { projectsData, socialsData } from "./modules/script.js";


const projectPages = projectsData.filter(p => p.isProject).map(project => {
	if(project.id === "BDOChecklist") return <Route key={project.id} path={project.url} element={<GrindChecklist />} />;

	return <Route key={project.id} path={project.url} element={<ProjectsPage {...project} />} />;
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
						<Route path="/about" element={<Home />}/>

						{projectPages}

						<Route path="*" element={<ErrorPage />}/>
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	</React.StrictMode>
);

reportWebVitals();
