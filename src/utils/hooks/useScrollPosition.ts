import {
	useState,
	useEffect,
} from 'react';

/**
 * useScrollPosition is a custom React hook that tracks the scroll position from the top of the viewport.
 *
 * @hook
 * @name useScrollPosition
 *
 * @returns - The current scroll position in pixels from the top of the viewport.
 *
 * @example
 * import useScrollPosition from './hooks/useScrollPosition';
 *
 * function Component() {
 *   const scrollPosition = useScrollPosition();
 *
 *   return (
 *     <div>
 *       <p>Current scroll position is: {scrollPosition}px</p>
 *     </div>
 *   );
 * }
 */
function useScrollPosition() {
	const [scrollPosition, setScrollPosition] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			setScrollPosition(window.scrollY || document.documentElement.scrollTop);
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return scrollPosition;
}

export default useScrollPosition;
