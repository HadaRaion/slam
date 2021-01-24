import gsap from 'gsap';
import { mobileMenuOn } from '../animations';

class MobileMenu {
	constructor() {
		this.menuButton = document.querySelector('.menu-btn');
		this.btnContainer = document.querySelector('.menu-btn-container');
		this.menu = document.querySelector('.menu');
		this.mainContainer = document.querySelector('main');
		this.header = document.querySelector('header');
		this.blackFilter = document.querySelector('.black-filter');
		this.events();
	}

	events() {
		this.menuButton.addEventListener('click', e => {
			this.activateMenu();
			this.btnContainer.classList.contains('open') ? this.eraseMenu() : this.revealMenu();
			this.openMenu(e);
			// revealMenu();
		});
	}

	openMenu(e) {
		e.preventDefault();
		this.btnContainer.classList.toggle('open');
	}

	revealMenu() {
		const tl = gsap.timeline();
		const menuOverlay = document.querySelector('.menu__overlay');
		const menuLists = document.querySelectorAll('.menu__list li');

		const calculateLeftPosition = windowHeight => {
			return Math.round(windowHeight * Math.tan((27 * Math.PI) / 180));
		};
		const xPositionEnd = calculateLeftPosition(window.innerHeight);
		const xPositionStart = window.innerWidth + calculateLeftPosition(window.innerHeight);

		console.log('xPositionEnd :>> ', xPositionEnd);
		console.log('xPositionStart :>> ', xPositionStart);

		tl.fromTo(menuOverlay, { x: -xPositionStart }, { x: 0, duration: 1, ease: 'power3.out' });

		// tl.from(menuOverlay, { x: -xPosition, autoAlpha: 0, duration: 1, ease: 'power3.out', delay: 0.5 });
		// tl.to(menuLists, { autoAlpha: 1, duration: 1, y: 10, stagger: 0.2, ease: 'power3.out' }, '-=0.5');
		return tl;
	}

	eraseMenu() {
		const tl = gsap.timeline();
		const menuOverlay = document.querySelector('.menu__overlay');
		const menuLists = document.querySelectorAll('.menu__list li');

		tl.to(menuLists, { autoAlpha: 0, duration: 0.1, ease: 'none' });
		tl.to(menuOverlay, { autoAlpha: 0, duration: 0.3, ease: 'power2.in' });
		return tl;
	}

	activateMenu() {
		this.menu.classList.toggle('active');
		this.mainContainer.classList.toggle('blur');
		this.header.classList.toggle('blur');
		this.blackFilter.classList.toggle('active');
	}

	blurBackground() {
		this.mainContainer.classList.toggle('blur');
		this.header.classList.toggle('blur');
	}

	turnOnBlackFilter() {
		this.blackFilter.classList.toggle('active');
	}
}

export default MobileMenu;
