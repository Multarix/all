import React from "react";
import { Link } from "react-router-dom";

import './style.css';

interface ElementData {
	title: string
	url: string
	id: string
}


interface CategoryData {
	title: string
	elements: ElementData[]
}

type CompareType = { title: string };

function compFunc(a: CompareType, b: CompareType) {
	const titleA = a.title.toUpperCase();
	const titleB = b.title.toUpperCase();

	if(titleA < titleB) return -1;
	if(titleA > titleB) return 1;
	return 0;
}


function SidebarElement(props: { title: string, url: string }): JSX.Element {
	return (
		<Link className="sb-elmt" to={props.url}>
			<div className="element">
				{props.title}
			</div>
		</Link>
	);
}


function SidebarCategory(props: { title: string, elements: ElementData[], baseURL: string }): JSX.Element {
	const elements = props.elements.sort(compFunc).reverse().map(element => {
		return <SidebarElement key={element.id} title={element.title} url={`${props.baseURL}/docs/${element.url}`} />;
	});


	return (
		<div className="sb-ctgry">
			<h4 className="sb-ctgry-title">{props.title}</h4>
			{elements}
		</div>
	);
}


export default function Sidebar(props: { categoryData: CategoryData[], baseURL: string }): JSX.Element {

	const categories = props.categoryData.sort(compFunc).map(category => {
		const categoryKey = category.title.toLowerCase().replace(/ \s/g, "");
		return <SidebarCategory key={categoryKey} title={category.title} elements={category.elements} baseURL={props.baseURL} />;
	});


	return (
		<div className="sb">
			<Link className="sb-elmt" to={`${props.baseURL}/docs`}>
				<div className="element">
					Home
				</div>
			</Link>
			{categories}
		</div>
	);
}