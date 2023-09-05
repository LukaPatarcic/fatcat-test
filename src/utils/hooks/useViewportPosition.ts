import { useState, useEffect, useRef } from 'react';

/**
 * useViewportPosition is a custom hook for tracking an element's position and size relative to the viewport.
 * The hook returns an array with two elements: a `boundingClientRect` object, and a `ref` that can be attached to the element.
 *
 * @hook
 * @name useViewportPosition
 * @type {Function}
 *
 * @returns {Object} An object containing two properties:
 * - {DOMRect | undefined} rect - An object that provides information about the size of the element and its position relative to the viewport. Initially null.
 * - {React.Ref} ref - A React ref that can be attached to the element that needs to be tracked.
 *
 * @example
 * const [boundingClientRect, ref] = useViewportPosition();
 * // attach ref to element to track
 * <div ref={ref}>Hello World!</div>
 */
function useViewportPosition<T extends HTMLElement>() {
	const [rect, setRect] = useState<DOMRect | undefined>(undefined);
	const ref = useRef<T>(null);

	useEffect(() => {
		const updatePosition = () => {
			if (ref.current) {
				setRect(ref.current.getBoundingClientRect());
			}
		};

		window.addEventListener('scroll', updatePosition);
		window.addEventListener('resize', updatePosition);

		// Call updatePosition once initially to set the position
		updatePosition();

		return () => {
			window.removeEventListener('scroll', updatePosition);
			window.removeEventListener('resize', updatePosition);
		};
	}, []);

	return {
		rect,
		ref,
	} as const;
}

export default useViewportPosition;
