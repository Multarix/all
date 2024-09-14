import React from "react";
import PropTypes from 'prop-types';

import "./style.css";

import hljs from 'highlight.js';

hljs.configure({
	ignoreUnescapedHTML: true
});

interface CodeBlockProps {
	children: string | JSX.Element
	language?: string
}

export default class CodeBlock extends React.Component<CodeBlockProps, CodeBlockProps> {
	static propTypes = {
		children: (PropTypes.string || PropTypes.node),
		language: PropTypes.string
	};

	componentDidMount(): void {
		this.highlightCode();
	}

	componentDidUpdate(): void {
		this.highlightCode();
	}

	highlightCode() {
		const nodes = document.querySelectorAll<HTMLElement>(".code-overflow > pre > code");

		nodes.forEach(node => {
			node.removeAttribute("data-highlighted");
			hljs.highlightBlock(node);
		});
	}

	render() {
		const child = this.props.children;
		const language = (typeof child === "string") ? this.props.language as string : child.props.className.replace("lang-", "").replace("md-code", "");

		return (
			<div className="code-overflow">
				<pre className="hljs-pre-codeblock">
					<code className={`hljs-codeblock language-${language}`}>
						{this.props.children}
					</code>
				</pre>
			</div>
		);
	}
}