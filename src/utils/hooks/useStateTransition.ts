import { useCallback, useState } from 'react';

const sleep = (duration: number) => new Promise<void>((resolve) => {
	setTimeout(resolve, duration);
});

/**
 * useStateTransition - A custom hook to manage delayed state transitions.
 *
 * @param initialState - The initial state (active or inactive).
 * @param duration - Duration in milliseconds for the transition delay.
 *
 * @returns - Object that contains the current state (`isActive`),
 *            a flag indicating if it's transitioning (`transitioning`),
 *            and method set the state (with delay).
 */
function useStateTransition(initialState: boolean, duration: number) {
	const [isActive, setIsActive] = useState(initialState);
	const [transitioning, setTransitioning] = useState(false);

	const set = useCallback(async (value: boolean, immediate = false) => {
		if (value === isActive) return;
		if (immediate) {
			setIsActive(value);
			return;
		}
		setTransitioning(true);
		await sleep(duration);
		setIsActive(value);
		setTransitioning(false);
	}, [duration, isActive]);

	return {
		isActive,
		transitioning,
		set,
	};
}

export default useStateTransition;
