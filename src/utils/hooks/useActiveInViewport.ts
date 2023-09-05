import {
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react';

/**
 * `useActiveInViewport` is a custom React Hook that tracks the currently "active" element in the viewport.
 * An element is considered "active" if it overlaps an imaginary horizontal line that is `top` pixels from the viewport's start.
 * The hook is used to identify which element in a collection is currently most visible to the user based on the scroll position.
 *
 * @param top - The distance in pixels from the top of the viewport where the imaginary line is drawn.
 * @param keepActive - If this is true then the currently active element is considered active until any other
 * element satisfies the condition of being active. If this parameter is false, the element is considered active
 * only as long as it satisfies the condition, when that's no longer true the element is not active anymore and
 * if there isn't any other element that satisfies the condition, the active index will be set tu null.
 * @returns An object containing the following values:
 *
 * - `active` (number): Represents the index of the child element that is currently in the active state.
 * - `ref` (React.RefObject): A React ref object to be attached to the parent of the elements you wish to track.
 *
 * @example
 * // Define the `top` value as the center of the viewport.
 * const { active, ref } = useActiveInViewport(window.innerHeight / 2);
 *
 * return (
 *  <div ref={ref}>
 *    <div>Card 1</div>
 *    <div>Card 2</div>
 *    <div>Card 3</div>
 *  </div>
 * );
 * // In this example, the "active" element is the one that is centered in the viewport based on user scroll.
 *
 *
 * @template T A generic parameter that extends HTMLElement. This allows the ref to be attached to any valid HTML element.
 *
 * @function
 * @name useActiveInViewport
 * @type {Function}
 */
function useActiveInViewport<T extends HTMLElement>(top: number, keepActive = false) {
	const [active, setActive] = useState<number | undefined>(undefined);
	const ref = useRef<T>(null);
	// Ticking variable is used to prevent overlapping between `requestAnimationFrame` calls
	// see: https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event#scroll_event_throttling
	const ticking = useRef(false);

	const handleScroll = useCallback(() => {
		const cards = ref.current?.children;

		if (!cards) return;
		let activeIndex: number | undefined = keepActive ? active : undefined;
		Array.from(cards).forEach((card, index) => {
			const boundingClientRect = card.getBoundingClientRect();
			const isActiveInViewport =
				Math.round(boundingClientRect.top) <= top &&
				Math.round(boundingClientRect.bottom) >= top;
			if (isActiveInViewport) activeIndex = index;
		});

		setActive(activeIndex);
	}, [active, keepActive, top]);

	useEffect(() => {
		const listener = () => {
			if (!ticking.current) {
				window.requestAnimationFrame(() => {
					handleScroll();
					ticking.current = false;
				});

				ticking.current = true;
			}
		};

		window.addEventListener('scroll', listener);

		return () => {
			window.removeEventListener('scroll', listener);
		};
	}, [handleScroll]);

	return { active, ref };
}

export default useActiveInViewport;
