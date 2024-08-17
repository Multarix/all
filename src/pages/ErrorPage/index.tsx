import React from "react";
import { useRouteError } from "react-router-dom";

import "./style.css";


type Error = {
	statusText?: string,
	message?: string
};
export default function ErrorPage() {
	const error = useRouteError() as Error;

	return (
		<div className="centered">
			<h1>Oh Noes!</h1>
			<p>It looks like something went wrong!</p>
			<p>
				<i>Error: { error?.statusText || error?.message }</i>
			</p>
		</div>
	);
}