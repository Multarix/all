import React from "react";
import { Link } from "react-router-dom";

import CodeBlock from "../../codeBlock";
import { ProjectData, useWindowDimensions } from "../../../extras/_modules/script.js";

import "./style.css";

function ProjectNPM(props: { npm?: string }): JSX.Element {
	if(!props.npm) return (<></>);

	return (
		<div className="project-npm">
			<a href={`https://npmjs.com/package/${props.npm}`}>
				<img alt="npm stats" src={`https://nodei.co/npm/${props.npm}.png?compact=true`} loading="eager"></img>
			</a>
		</div>
	);
}

function ProjectButtons(props: { github: string, docs: boolean, blog: boolean }): JSX.Element {
	const buttonLinks: JSX.Element[] = [];
	if(props.blog) buttonLinks.push(<Link key="blog" to="./blog" className="project-button blog-button" >Blog</Link>);
	if(props.docs) buttonLinks.push(<Link key="docs" to="./docs" className="project-button docs-button">Docs</Link>);
	buttonLinks.push(<a key="github" className="project-button github-button" href={props.github} target="_blank" rel="noreferrer">GitHub</a>);

	return (
		<div id="project-buttons">
			{buttonLinks}
		</div>
	);
}

function ProjectLogoLinks(props: { name: string, img: string, github: string, docs: boolean, blog: boolean, npm?: string, }): JSX.Element {
	return (
		<section id="project-links">
			<img className="project-logo" alt={`${props.name} logo`} loading="eager" src={props.img}></img>
			<ProjectNPM npm={props.npm}/>
			<ProjectButtons github={props.github} docs={props.docs} blog={props.blog} />
		</section>
	);
}



function ExampleCode(props: { exampleCode?: string }): JSX.Element {
	if(!props.exampleCode) return (<></>);
	return (
		<CodeBlock language="javascript">
			{props.exampleCode}
		</CodeBlock>
	);
	;
}

function ProjectTitle(props: { name: string, fullDesc: string, exampleCode?: string }): JSX.Element {
	return (
		<section id="project-info">
			<h1 className="project-title">{props.name}</h1>
			<p className="project-desc">{props.fullDesc}</p>
			<ExampleCode exampleCode={props.exampleCode} />
		</section>
	);
}



function ProjectAbout(props: { about: JSX.Element }): JSX.Element {
	return (
		<section id="project-about">
			<h2 className="project-extra-title">About</h2>
			<div className="p-container">{props.about}</div>
		</section>
	);
}



function ProjectWhy(props: { why: JSX.Element }): JSX.Element {
	return (
		<section id="project-why">
			<h2 className="project-extra-title">Why?</h2>
			<div className="p-container">{props.why}</div>
		</section>
	);
}



export default function ProjectsPage(props: ProjectData): JSX.Element {
	const { width } = useWindowDimensions();

	if(width > 950){
		return (
			<div className="content project">
				<div className="project-page">
					<ProjectTitle name={props.displayName} fullDesc={props.fullDesc} exampleCode={props.exampleCode} />
					<ProjectLogoLinks name={props.displayName} img={props.img} github={props.github} blog={props.blog} docs={props.docs} npm={props.npm}/>
					<ProjectWhy why={props.why} />
					<ProjectAbout about={props.about} />
				</div>
			</div>
		);
	}

	// Mobile Look
	return (
		<div className="content project">
			<div className="project-page">
				<ProjectLogoLinks name={props.displayName} img={props.img} github={props.github} blog={props.blog} docs={props.docs} npm={props.npm}/>
				<ProjectTitle name={props.displayName} fullDesc={props.fullDesc} exampleCode={props.exampleCode} />
				<ProjectAbout about={props.about} />
				<ProjectWhy why={props.why} />
			</div>
		</div>
	);
}