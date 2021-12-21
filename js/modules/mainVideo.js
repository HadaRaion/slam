const videoSource = () => {
	const mainVideo = document.querySelector('.home__video');
	let videoRandomNum = Math.floor(Math.random() * 3);

	if (window.matchMedia('(max-width: 700px)').matches) {
		mainVideo.src = `https://studioslam.net/wp-content/themes/slam/slam_home_mobi.mp4`;

		mainVideo.addEventListener('suspend', () => {
			// We're in low-power mode, show fallback UI
			mainVideo.setAttribute('poster', 'https://studioslam.net/wp-content/uploads/2021/12/slam_mobile_poster-scaled.jpeg');
		});

		video.addEventListener('play', () => {
			// Remove fallback UI if user plays video manually
			mainVideo.setAttribute('poster', '');
		});
	} else {
		mainVideo.src = `http://studioslam.net/wp-content/themes/slam/slam_home_video_${videoRandomNum}.mp4`;
		mainVideo.autoplay = true;

		console.log('videoRandomNum :>> ', videoRandomNum);
	}

	// document.getElementById('slamVideo').play();
};

export default videoSource;
