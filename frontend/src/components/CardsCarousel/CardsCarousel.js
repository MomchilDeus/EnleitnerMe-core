import React from 'react';
import Slider from 'react-slick';

import Card from '../../containers/Card/Card';
import './CardsCarousel.scss';

export default props => (
	<Slider
		{...{
			className: 'center',
			accessibility: true,
			useTransform: true,
			adaptiveHeight: true,
			arrows: false,
			infinite: false,
			// focusOnSelect: true,
			speed: 300,
			centerMode: true,
			// centerPadding: "150px",
			slidesToShow: 1,
			slidesToScroll: 1,
			initialSlide: 0
			// responsive: [
			//     {
			//       breakpoint: 768,
			//       settings: {
			//         slidesToShow: 1,
			//         slidesToScroll: 1,
			//         initialSlide: 1
			//       }
			//     }
			//   ]
		}}>
		<Card />
		<Card />
		<Card />
		<Card />
		<Card />
		<Card />
		<Card />
		<Card />
		<Card />
	</Slider>
);

// prevent default keydown events, otherwise the page will be moved a little on every press and the center card would move left or right
window.addEventListener('keydown', e => {
	if (e.keyCode >= 37 && e.keyCode <= 40) e.preventDefault();
});
