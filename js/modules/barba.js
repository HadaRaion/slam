import barba from '@barba/core';
import gsap from 'gsap';
import initImageSlide from './initImageSlide';
import videoSource from './mainVideo';
import { animationLeave, animationEnter, mobileMenuOff } from '../animations';

barba.hooks.enter(() => {
	window.scrollTo(0, 0);
});

barba.hooks.after(() => {
	ga('set', 'page', window.location.pathname);
	ga('send', 'pageview');
});

function delay(n) {
	n = n || 2000;
	return new Promise(done => {
		setTimeout(() => {
			done();
		}, n);
	});
}

// function loadingAnimation() {
// 	var tl = gsap.timeline();

// 	tl.from('.loader__logo', {
// 		duration: 0.6,
// 		height: 0,
// 		ease: 'power1.out',
// 		delay: 0.3,
// 	}).to('.loader', {
// 		duration: 0.6,
// 		width: 0,
// 		ease: 'power1.out',
// 		delay: 1,
// 		// onComplete: () => animationEnter(next.container),
// 	});
// }

function loadingAnimation() {
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
		})
		.to(
			'.loader',
			{
				duration: 0.4,
				width: 0,
				ease: 'power1.out',
				// onComplete: () => animationEnter(next.container),
			},
			'-=0.2'
		);
}

barba.init({
	sync: true,
	views: [
		{
			namespace: 'detail',
			beforeEnter() {
				initImageSlide();
			},
		},
		{
			namespace: 'home',
			beforeEnter() {
				videoSource();
			},
		},
	],
	transitions: [
		{
			name: 'general-transition',
			once({ next }) {
				loadingAnimation();
			},
			leave: ({ current }) => animationLeave(current.container),
			enter({ next }) {
				console.log('entering');
				mobileMenuOff();
				animationEnter(next.container);
				document.querySelector('.menu-btn-container').classList.remove('open');
			},
		},
	],
});
