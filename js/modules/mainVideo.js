const videoSource = () => {
	const mainVideo = document.querySelector('.home__video');
	let videoRandomNum = Math.floor(Math.random() * 3);

	if (window.matchMedia('(max-width: 700px)').matches) {
		mainVideo.src = '';
	} else {
		mainVideo.src = `https://studioslam.net/wp-content/themes/slam_home_video_${videoRandomNum}.mp4`;
		mainVideo.autoplay = true;
	}
};

export default videoSource;
