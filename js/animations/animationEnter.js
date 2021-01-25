import gsap from 'gsap';

const animationEnter = container => {
	// const pageHaading = container.querySelector('page-header');
	// const pageBody = container.querySelectorAll('.container-fluid');

	// const tl = gsap.timeline({
	// 	defaults: {
	// 		duration: 1.4,
	// 		ease: 'power1.in',
	// 	},
	// });

	// tl.to(pageHaading, { autoAlpha: 1 }, 0);
	// tl.to(pageBody, { autoAlpha: 1, stagger: 1 }, 0);

	// return tl;

	// return gsap.fromTo(container, { autoAlpha: 0 }, { autoAlpha: 1, duration: 2, ease: 'none' });
	gsap.from(container, { autoAlpha: 0, duration: 0.5, ease: 'Sine.in' });
};

export default animationEnter;
