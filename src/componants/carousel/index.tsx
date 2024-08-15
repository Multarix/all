import React, { useRef } from 'react';
import Slider from 'react-slick';

import './style.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// import { DESKTOP_WIDTH, TABLET_WIDTH, MOBILE_WIDTH } from '../../modules/constants';
import { useContainerDimensions } from '../../modules/functions';

// const TILE_SIZE = 300;
// const GAP_BETWEEN_TILES = 25;



function CarouselTitle(props: { title: string, visibleTiles: number }) {
	if(!props.title) return (<></>);
	return (<h1 className="carousel-title centered">{props.title}</h1>);
}



const Carousel = (props: { elements: JSX.Element[], elementWidth: number, gapSize: number, title: string }) => {
	const compRef = useRef<HTMLDivElement>(null);
	const { width } = useContainerDimensions(compRef);

	const calculateSliderSettings = () => {
		// Always show at least 1 element
		const elementsToShow = Math.max(1, Math.floor(width / (props.elementWidth + props.gapSize)));
		// Container should always be the elements + gap
		const containerSize = (elementsToShow * props.elementWidth) + (props.gapSize * (elementsToShow - 1));
		// Offset should always be half of the gapsize (if it's an odd number, it has issues but oh well)
		const sliderOffset = (props.gapSize) / 2;
		return {
			elementsToShow,
			containerSize,
			sliderOffset
		};
	};

	const config = calculateSliderSettings();

	const sliderSettings = {
		className: "slider-bg",
		dotsClass: "dots-class",
		dots: true,
		arrows: false,

		infinite: true,
		speed: 1000,
		// centerMode: true,

		rows: 1,
		slidesToShow: config.elementsToShow,
		slidesToScroll: 1,
		initialSlide: 0,

		// cssEase: "linear",
		autoplay: true,
		autoplaySpeed: 5000
	};

	const sliderStyle = `
	.slick-list {
		margin: -${config.sliderOffset}px;
	}
	.slick-slide > div {
		padding: ${config.sliderOffset}px;
	}
	.carousel-container {
		min-width: ${config.containerSize}px;
		max-width: ${config.containerSize}px;
	}
`;

	return (
		<div ref={compRef} className="expand">
			<div className="carousel-container">
				<CarouselTitle title={props.title} visibleTiles={config.elementsToShow} />
				<style>{sliderStyle}</style>
				<Slider {...sliderSettings}>
					{props.elements}
				</Slider>
			</div>
		</div>
	);
};

export default Carousel;