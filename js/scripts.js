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

const englishMode = document.querySelector('.lang-item-en');
const koreanMode = document.querySelector('.lang-item-ko');

englishMode.addEventListener('click', () => {
	let baseUrl = window.location.origin;
	window.location.replace(`${baseUrl}/en/`);
});

koreanMode.addEventListener('click', () => {
	let baseUrl = window.location.origin;
	window.location.replace(baseUrl);
});
