englishMode.addEventListener('click', () => {
	var baseUrl = window.location.origin;
	// console.log('baseUrl', baseUrl);
	// var host = window.location.host;
	// console.log('host', host);
	// var pathArray = window.location.pathname;
	// console.log('pathArray', pathArray);

	let pathArray = window.location.pathname.split('/').filter(item => item !== '');

	console.log('pathArray :>> ', pathArray);

	console.log('pathArray :>> ', pathArray);

	if (pathArray[0] === 'en') {
		pathArray.shift();
	}

	console.log('pathArray :>> ', pathArray);

	if (pathArray.length) {
		console.log('we still have some params');
		console.log(pathArray[pathArray.length - 1]);

		let finalParam = pathArray[pathArray.length - 1];

		finalParam = finalParam.slice(0, -3);
		console.log('finalParam :>> ', finalParam);

		pathArray[pathArray.length - 1] = finalParam;

		console.log('parthArray :>> ', pathArray);

		const finalPathArray = pathArray.join('/');

		console.log('finalPathArray :>> ', finalPathArray);

		const finalUrl = `${baseUrl}/${finalPathArray}/`;

		window.location.replace(finalUrl);

		// console.log('remove the three characters of the word');
		// pathArray[-1] = pathArray[-1].slice(0, -3);
		// console.log('pathArray :>> ', pathArray);
	} else {
		console.log('we have no params left');
		window.location.replace('');
	}

	//convert this to a korean site

	// window.location.replace(`${baseUrl}/${param}`);
});

const koreanMode = document.querySelector('.lang-item-ko');

koreanMode.addEventListener('click', () => {
	let pathArray = window.location.pathname.split('/').filter(item => item !== '');

	console.log('pathArray :>> ', pathArray);

	// var baseUrl = window.location.origin;
	// console.log('baseUrl', baseUrl);
	// var host = window.location.host;
	// console.log('host', host);
	// console.log('pathArray', pathArray);
	// window.location.replace(`${baseUrl}`);
});
