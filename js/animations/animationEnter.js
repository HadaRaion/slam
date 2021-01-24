import gsap from 'gsap';

const animationEnter = container => {
	// const activeLink = container.querySelector('a.is-active span');
	// const images = container.querySelectorAll('.image');
	// const img = container.querySelectorAll('img');

	// const tl = gsap.timeline({
	// 	defaults: {
	// 		duration: 0.4,
	// 		ease: 'power1.in',
	// 	},
	// });

	// tl.to(activeLink, { xPercent: 101 }, 0);
	// tl.to(images, { xPercent: 101, stagger: 0.05 }, 0);
	// tl.to(img, { xPercent: -101, stagger: 0.05 }, 0);
	// return tl;

	return gsap.fromTo(container, { autoAlpha: 0 }, { autoAlpha: 1, duration: 2, ease: 'none' });
	// (container, { autoAlpha: 0, duration: 2, ease: 'none' });
};

export default animationEnter;
