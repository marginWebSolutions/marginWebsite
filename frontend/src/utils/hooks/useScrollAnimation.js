/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from 'react';

const useScrollAnimation = (refs, visibilityThreshold = 0.1) => {
	const [visibilityStates, setVisibilityStates] = useState(
		refs.map(() => false)
	);

	const checkVisibility = useCallback(() => {
		const newVisibilityStates = refs.map((ref) => {
			if (!ref.current) return false;
			const rect = ref.current.getBoundingClientRect();
			const isVisible = rect.top < window.innerHeight;
			return isVisible;
		});

		const statesChanged = newVisibilityStates.some(
			(state, index) => state !== visibilityStates[index]
		);

		if (statesChanged) {
			setVisibilityStates(newVisibilityStates);
		}
	}, [visibilityStates, refs, visibilityThreshold]);

	useEffect(() => {
		let animationFrameId = null;

		const handleScroll = () => {
			cancelAnimationFrame(animationFrameId);
			animationFrameId = requestAnimationFrame(checkVisibility);
			// checkVisibility();
		};

		window.addEventListener('scroll', handleScroll);
		checkVisibility();

		return () => {
			window.removeEventListener('scroll', handleScroll);
			cancelAnimationFrame(animationFrameId);
		};
	}, [checkVisibility]);

	return visibilityStates;
};

export default useScrollAnimation;
