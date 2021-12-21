import '../css/style.css';
import './modules/forIE';
import './modules/vh';
import './modules/mainVideo';
import './modules/barba.js';
import './modules/headerColor';
import './modules/mobileMenu';

if (module.hot) {
	module.hot.accept();
}

window.addEventListener('load', () => {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
	window.addEventListener('resize', () => {
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
	});
});
