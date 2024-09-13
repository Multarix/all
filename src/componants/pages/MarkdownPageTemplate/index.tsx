import React from 'react';
import Markdown, { MarkdownToJSX } from 'markdown-to-jsx';

import { Link } from 'react-router-dom';

import CodeBlock from '../../codeBlock';

import "./style.css";

const entityMap = {
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	'"': "&quot;",
	"'": "&#39;",
	"/": "&#x2F;",
	"`": "&#x60;",
	"=": "&#x3D;"
};


function MarkdownWrapper(props: { children: JSX.Element[] }): JSX.Element {
	return <div className="md-content">{props.children}</div>;
}

export default function DocsPage(props: { markdown: string, baseUrl: string }) {

	const handleLink = (that: { children: string, href: string }) => {
		// Same Page Links
		if(that.href.startsWith("#")) return <a href={that.href}>{that.children}</a>;

		// Same docs links
		if(that.href.startsWith("./")) return <Link to={props.baseUrl + that.href.slice(1)}>{that.children}</Link>;

		// Internal Links
		if(that.href.startsWith("/")) return <Link to={that.href}>{that.children}</Link>;

		// External Links
		return <a className="open-in-new" href={that.href} target="_blank" rel="noreferrer">{that.children}</a>;
	};


	const docsOptions: MarkdownToJSX.Overrides = {
		h1: {
			component: ({ children, ...props }) => <h1 {...props}>{children}</h1>,
			props: {
				className: "md-h1"
			}
		},
		h2: {
			component: ({ children, ...props }) => <h2 {...props}>{children}</h2>,
			props: {
				className: "md-h2"
			}
		},
		h3: {
			component: ({ children, ...props }) => <h3 {...props}>{children}</h3>,
			props: {
				className: "md-h3"
			}
		},
		h4: {
			component: ({ children, ...props }) => <h4 {...props}>{children}</h4>,
			props: {
				className: "md-h4"
			}
		},
		h5: {
			component: ({ children, ...props }) => <h5 {...props}>{children}</h5>,
			props: {
				className: "md-h5"
			}
		},
		h6: {
			component: ({ children, ...props }) => <h6 {...props}>{children}</h6>,
			props: {
				className: "md-h6"
			}
		},
		p: {
			component: ({ children, ...props }) => <p {...props}>{children}</p>,
			props: {
				className: "md-p"
			}
		},
		ol: {
			component: ({ children, ...props }) => <ol {...props}>{children}</ol>,
			props: {
				className: "md-ol"
			}
		},
		ul: {
			component: ({ children, ...props }) => <ul {...props}>{children}</ul>,
			props: {
				className: "md-ul"
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
			component: ({ children, ...props }) => <CodeBlock {...props}>{children}</CodeBlock>
		},
		a: {
			component: handleLink
		}
	};


	return (
		<div className="md-container">
			<Markdown options={{ overrides: docsOptions, wrapper: MarkdownWrapper, namedCodesToUnicode: entityMap }}>
				{props.markdown}
			</Markdown>
		</div>
	);
}