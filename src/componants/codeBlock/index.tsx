import React from "react";
import PropTypes from 'prop-types';

import "./style.css";

import hljs from "highlight.js/lib/core";
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);


interface CodeBlockProps {
	children: string
}

export default class CodeBlock extends React.Component<CodeBlockProps, CodeBlockProps> {
	static propTypes = {
		children: PropTypes.string
	};

	componentDidMount(): void {
		this.highlightCode();
	}

	componentDidUpdate(): void {
		this.highlightCode();
	}

	highlightCode() {
		const nodes = document.querySelectorAll<HTMLElement>("pre code");
		nodes.forEach(node => hljs.highlightBlock(node));
	}

	render() {
		return (
			<div className="code-overflow">
				<pre className="hljs-pre-codeblock">
					<code className="hljs-codeblock">
						{this.props.children}
					</code>
				</pre>
			</div>
		);
	}
}