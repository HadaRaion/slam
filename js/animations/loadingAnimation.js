import gsap from 'gsap';

const loadingAnimation = () => {
	var tl = gsap.timeline();

	tl.to('.loader__logo__bottom', {
		duration: 1.5,
		opacity: 1,
		ease: 'power4.in',
	})
		.from('.loader__logo__top > img', {
			duration: 0.5,
			yPercent: 100,
			stagger: 0.1,
			delay: 0.2,
		})
		.to('.loader__logo', {
			duration: 0.3,
			delay: 1.1,
			autoAlpha: 0,
			ease: 'power1.out',
			onComplete: () => document.querySelector('main').classList.remove('loading'),
		})
		.to(
			'.loader',
			{
				duration: 0.4,
				// xPercent: -100,
				// clipPath: 'polygon(0 0, 100% 0%, 75% 100%, 0% 100%)',
				width: 0,
				ease: 'power1.out',
			},
			'-=0.2'
		);
	return tl;
};

export default loadingAnimation;
