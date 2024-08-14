import React, { useState, useEffect } from 'react';



function getWindowDimensions() {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height
	};
}

export function useWindowDimensions() {
	const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions());
		}

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return windowDimensions;
}



export const useContainerDimensions = (reference: React.RefObject<HTMLElement>) => {
	const [dimensions, setDimensions] = useState({ width: 0, height: 0 });


	useEffect(() => {
		const getDimensions = () => {
			if(!reference) return ({ width: 0, height: 0 });
			if(!reference.current) return ({ width: 0, height: 0 });
			return ({
				width: reference.current.offsetWidth,
				height: reference.current.offsetHeight
			});
		};

		const handleResize = () => {
			setDimensions(getDimensions());
		};

		if(reference.current){
			setDimensions(getDimensions());
		}

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [reference]);

	return dimensions;
};