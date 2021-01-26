const videoSource = () => {
	const mainVideo = document.querySelector('.home__video');
	if (window.matchMedia('(max-width: 700px)').matches) {
		mainVideo.src = 'http://studioslam.net/wp-content/themes/studio-slam-theme/slam_home_mobi.mp4';
	} else {
		mainVideo.src = 'http://studioslam.net/wp-content/themes/studio-slam-theme/slam_home.mp4';
	}
};

export default videoSource;
