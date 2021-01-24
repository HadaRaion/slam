import '../css/style.css';
import './modules/forIE';
import './modules/mainVideo';
import './modules/barba.js';
import './modules/headerColor';
import './modules/mobileMenu';

// import MobileMenu from './modules/mobileMenu';

// Instantiate a new object using our modules/classes
// new MobileMenu();

// Allow new JS and CSS to load in browser without a traditional page refresh
if (module.hot) {
	module.hot.accept();
}
