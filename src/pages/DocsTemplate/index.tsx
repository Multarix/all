import React from 'react';
import Markdown, { MarkdownToJSX } from 'markdown-to-jsx';

import { Link } from 'react-router-dom';

import CodeBlock from '../../componants/codeBlock';
import Sidebar from '../../componants/sidebar';

import "./style.css";

const highlightedCode = (props: { children: string }) => <CodeBlock value={props.children} />;
const handleLink = (props: { children: string, href: string }) => {
	if(props.href.startsWith("/")) return <Link to={props.href} />;
	return <a className="open-in-new" href={props.href} target="_blank" rel="noreferrer">{props.children}</a>;
};


const docsOptions: MarkdownToJSX.Overrides = {
	h1: {
		component: ({ children, ...props }) => <h1 {...props}>{children}</h1>,
		props: {
			className: "mdd-h1"
		}
	},
	h2: {
		component: ({ children, ...props }) => <h2 {...props}>{children}</h2>,
		props: {
			className: "mdd-h2"
		}
	},
	h3: {
		component: ({ children, ...props }) => <h3 {...props}>{children}</h3>,
		props: {
			className: "mdd-h3"
		}
	},
	h4: {
		component: ({ children, ...props }) => <h4 {...props}>{children}</h4>,
		props: {
			className: "mdd-h4"
		}
	},
	h5: {
		component: ({ children, ...props }) => <h5 {...props}>{children}</h5>,
		props: {
			className: "mdd-h5"
		}
	},
	p: {
		component: ({ children, ...props }) => <p {...props}>{children}</p>,
		props: {
			className: "mdd-p"
		}
	},
	ol: {
		component: ({ children, ...props }) => <ol {...props}>{children}</ol>,
		props: {
			className: "mdd-ol"
		}
	},
	ul: {
		component: ({ children, ...props }) => <ul {...props}>{children}</ul>,
		props: {
			className: "mdd-ul"
		}
	},
	code: {
		component: ({ children, ...props }) => <code {...props}>{children}</code>,
		props: {
			className: "md-code"
		}
	},
	iframe: {
		component: ({ children, ...props }) => <iframe {...props}>{children}</iframe>,
		props: {
			className: "md-iframe"
		}
	},
	pre: {
		component: highlightedCode
	},
	a: {
		component: handleLink
	}
};

export default function DocsPage(props: { markdown: string, url: string }) {
	const sideBarData = [
		{
			title: "NPC Class",
			elements: [
				{ title: "constructor",	url: "constructor",	id: "constructor" },
				{ title: ".setRace()",	url: "setrace",		id: "setrace" },
				{ title: ".setClass()",	url: "setclass",	id: "setclass" },
				{ title: ".generate()",	url: "generate",	id: "generate" }
			]
		}
	];


	return (
		<div className="docs-container">
			<Sidebar categoryData={sideBarData} baseURL={props.url} />
			<div className="docs">
				<Markdown options={{ overrides: docsOptions }}>
					{props.markdown}
				</Markdown>
			</div>
		</div>
	);
}