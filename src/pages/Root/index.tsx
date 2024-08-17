import React from "react";
import { Outlet } from "react-router-dom";

import "./style.css";

import Navbar from "../../componants/navbar";

import { projectsData, socialsData } from "../../modules/constants.js";

export default function RootNode() {
	return (
		<>
			<Navbar projects={projectsData} socials={socialsData} />
			<div id="body-pad" className="body-padding">
				<Outlet />
			</div>
		</>
	);
}