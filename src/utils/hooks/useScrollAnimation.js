/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from 'react';

const useScrollAnimation = (refs) => {
	const [visibilityStates, setVisibilityStates] = useState(
		refs.map(() => false)
	);

	const checkVisibility = useCallback(() => {
		const newVisibilityStates = refs.map((ref) => {
			if (!ref.current) return false;
			const rect = ref.current.getBoundingClientRect();
			return rect.top < window.innerHeight;
		});

		const statesChanged = newVisibilityStates.some(
			(state, index) => state !== visibilityStates[index]
		);

		if (statesChanged) {
			setVisibilityStates(newVisibilityStates);
		}
	}, [visibilityStates, refs]);

	useEffect(() => {
		const handleScroll = () => {
			checkVisibility();
		};

		window.addEventListener('scroll', handleScroll);
		checkVisibility();

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [checkVisibility]);

	return visibilityStates;
};

export default useScrollAnimation;
