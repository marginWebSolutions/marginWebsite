import { useEffect } from 'react';

const useAnimation = (ref, animationClassName) => {
	const checkIntersection = () => {
		if (ref.current) {
			const { top } = ref.current.getBoundingClientRect();
			if (top < window.innerHeight) {
				ref.current.classList.add(animationClassName);
				window.removeEventListener('scroll', checkIntersection);
			}
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', checkIntersection);
		return () => window.removeEventListener('scroll', checkIntersection);
	}, [animationClassName]);
};

export default useAnimation;
