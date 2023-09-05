import {
	useState,
	useEffect,
} from 'react';

/**
 * useScrollDirection is a custom React hook that tracks the direction of user scrolling in the viewport.
 *
 * @hook
 * @name useScrollDirection
 *
 * @returns - "up" if the user is scrolling up, "down" if the user is scrolling down.
 * The scroll direction is determined by comparing the current scroll position with the previous one.
 *
 * @example
 * import useScrollDirection from './hooks/useScrollDirection';
 *
 * function Component() {
 *   const scrollDirection = useScrollDirection();
 *
 *   return (
 *     <div>
 *       <p>Current scroll direction is: {scrollDirection}</p>
 *     </div>
 *   );
 * }
 */
function useScrollDirection() {
	const [lastScrollTop, setLastScrollTop] = useState(0);
	const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | undefined>(undefined);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollTop = window.scrollY || document.documentElement.scrollTop;
			if (currentScrollTop > lastScrollTop) {
				setScrollDirection('down');
			} else {
				setScrollDirection('up');
			}
			setLastScrollTop(currentScrollTop);
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [lastScrollTop]);

	return scrollDirection;
}

export default useScrollDirection;
