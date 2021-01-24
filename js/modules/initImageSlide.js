import Splide from '@splidejs/splide';

const initImageSlide = () => {
	new Splide('#image-slider', {
		// type: 'fade',
		rewind: true,
		cover: true,
		heightRatio: 0.6,
	}).mount();
};

export default initImageSlide;
