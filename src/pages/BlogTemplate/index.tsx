import React from 'react';
import Markdown, { MarkdownToJSX } from 'markdown-to-jsx';

import { Link } from 'react-router-dom';

import CodeBlock from '../../componants/codeBlock';

import "./style.css";

const highlightedCode = (props: { children: string }) => <CodeBlock value={props.children} />;
const handleLink = (props: { children: string, href: string }) => {
	if(props.href.startsWith("/")) return <Link to={props.href} />;
	return <a className="open-in-new" href={props.href} target="_blank" rel="noreferrer">{props.children}</a>;
};

const blogOptions: MarkdownToJSX.Overrides = {
	h1: {
		component: ({ children, ...props }) => <h1 {...props}>{children}</h1>,
		props: {
			className: "md-h1"
		}
	},
	h2: {
		component: ({ children, ...props }) => <h2 {...props}>{children}</h2>,
		props: {
			className: "blmdog-h2"
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
			className: "md-ol"
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

export default function BlogPage(props: { markdown: string }) {
	return (
		<div className="content blog">
			<Markdown options={{ overrides: blogOptions }}>
				{props.markdown}
			</Markdown>
		</div>
	);
}