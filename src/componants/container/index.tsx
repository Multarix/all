import React from "react";
import PropTypes from 'prop-types';

type Props = { children: React.ReactNode }

export default class Container extends React.Component<Props, Props> {
	static propTypes = {
		children: PropTypes.node
	};


	render() {
		return (
			<div id="query-container">
				<div id="width-limit">
					{this.props.children}
				</div>
			</div>
		);
	}
}