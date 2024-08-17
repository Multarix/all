import React from "react";
import "./style.css";

export default function ErrorPage() {
	return (
		<div className="centered">
			<h1>Oh Noes!</h1>
			<p>It looks like something went wrong!</p>
			<p>
				<i>404 Not Found</i>
			</p>
		</div>
	);
}