import barba from '@barba/core';
import barbaPrefetch from '@barba/prefetch';
import gsap from 'gsap';
import initImageSlide from './initImageSlide';
import videoSource from './mainVideo';
import { animationLeave, animationEnter, mobileMenuOff } from '../animations';

barba.use(barbaPrefetch);

barba.hooks.after(() => {
	ga('set', 'page', window.location.pathname);
	ga('send', 'pageview');
});

barba.init({
	views: [
		{
			namespace: 'detail',
			beforeEnter(data) {
				initImageSlide();
				console.log(data);
				console.log(barba.history.previous.url);
			},
		},
	],
	views: [
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
				console.log('ONCE');
				animationEnter(next.container);
			},
			leave: ({ current }) => {
				console.log('leaving');
				animationLeave(current.container);
			},
			enter({ next }) {
				console.log('entering');
				mobileMenuOff();
				console.log('메뉴끄기');
				animationEnter(next.container);
				console.log('애니메이션 엔터');
				document.querySelector('.menu-btn-container').classList.remove('open');
				console.log('상단메뉴변경');
			},
		},
	],
});
