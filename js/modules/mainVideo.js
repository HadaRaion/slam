const videoSource = () => {
	const mainVideo = document.querySelector('.home__video');
	if (window.matchMedia('(max-width: 700px)').matches) {
		mainVideo.src = '';
	} else {
		mainVideo.src = 'http://studioslam.net/wp-content/themes/slam/slam_home.mp4';
		mainVideo.autoplay = true;
	}

	// document.getElementById('slamVideo').play();
};

export default videoSource;
