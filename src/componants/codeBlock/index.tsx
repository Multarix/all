import React from "react";
import PropTypes from 'prop-types';

import "./style.css";

import hljs from "highlight.js/lib/core";
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);



export default class CodeBlock extends React.Component<{ value: string }, { value: string }> {
	static propTypes = {
		value: PropTypes.string
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
						{this.props.value}
					</code>
				</pre>
			</div>
		);
	}
}