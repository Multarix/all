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


function ProjectLogoLinks(props: ProjectData): JSX.Element {
	return (
		<section id="project-links">
			<img className="project-logo" alt={`${props.displayName} logo`} loading="eager" src={props.img}></img>
			<ProjectNPM npm={props.npm}/>
			<ProjectButtons github={props.github} docs={props.docs} blog={props.blog} />
		</section>
	);
}


function ExampleCode(props: { exampleCode?: string, codeLang?: string }): JSX.Element {
	if(!props.exampleCode || !props.codeLang) return (<></>);
	return (
		<CodeBlock language="javascript">
			{props.exampleCode}
		</CodeBlock>
	);
	;
}


function ProjectTitle(props: ProjectData): JSX.Element {
	return (
		<section id="project-info">
			<h1 className="project-title">{props.displayName}</h1>
			<p className="project-desc">{props.fullDesc}</p>
			<ExampleCode exampleCode={props.exampleCode} codeLang={props.codeLang} />
		</section>
	);
}


function ProjectAbout(props: ProjectData): JSX.Element {
	return (
		<section id="project-about">
			<h2 className="project-extra-title">About</h2>
			<div className="p-container">{props.about}</div>
		</section>
	);
}


function ProjectWhy(props: ProjectData): JSX.Element {
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
					<ProjectTitle {...props} />
					<ProjectLogoLinks {...props}/>
					<ProjectWhy {...props} />
					<ProjectAbout {...props} />
				</div>
			</div>
		);
	}

	// Mobile Look
	return (
		<div className="content project">
			<div className="project-page">
				<ProjectLogoLinks {...props}/>
				<ProjectTitle {...props} />
				<ProjectAbout {...props} />
				<ProjectWhy {...props} />
			</div>
		</div>
	);
}