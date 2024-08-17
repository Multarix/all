import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import "./style.css";


import RootNode from './pages/Root';
import Home from "./pages/Home";
import ProjectsPage from "./pages/Projects";
import ErrorPage from "./pages/ErrorPage";

import { projectsData } from "./modules/constants.js";


const projectPages = projectsData.filter(p => p.isProject).map(project => {
	return {
		path: project.url,
		element: <ProjectsPage />
	};
});


const router = createBrowserRouter([
	{
		path: "/",
		element: <RootNode />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <Home />
			},
			{
				path: "/about",
				element: <Home />
			},
			...projectPages
		]
	}
]);


const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);


root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

reportWebVitals();
