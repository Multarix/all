import React from 'react';
// import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import "./style.css";

import Navbar from './componants/navbar';
import Home from "./pages/Home";
import ProjectsPage from "./pages/Projects";
import ErrorPage from "./pages/ErrorPage";

import { projectsData, socialsData } from "./modules/constants.js";


const projectPages = projectsData.filter(p => p.isProject).map(project => <Route key={project.id} path={project.url} element={<ProjectsPage />} />);


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Navbar projects={projectsData} socials={socialsData} />
			<div id="body-pad" className="body-padding">
				<Routes>
					<Route path="/" element={<Home />}/>
					<Route path="/about" element={<Home />}/>

					{projectPages}

					<Route path="*" element={<ErrorPage />}/>
				</Routes>
			</div>
		</BrowserRouter>
	</React.StrictMode>
);

reportWebVitals();
