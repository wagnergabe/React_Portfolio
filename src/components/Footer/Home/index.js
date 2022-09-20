import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';

const Home = () => {
	const container = useRef(null);
	useEffect(() => {
		const instance = Lottie.loadAnimation({
			container: container.current,
			renderer: 'svg',
			loop: true,
			autoplay: true,
			animationData: require('../../../animate.json'),
		});

		return () => instance.destroy();
	}, []);

	return <div className='container' ref={container}></div>;
};

export default Home;

//lottie animation source https://www.youtube.com/watch?v=LIoRZZ_va_o
