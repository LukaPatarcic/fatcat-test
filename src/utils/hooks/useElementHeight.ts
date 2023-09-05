import { useState, useEffect, useRef } from 'react';

/**
 * A React hook to measure and return the initial height of a DOM element.
 *
 * This hook creates a ref and returns it, along with the initial height of the DOM element
 * the ref is attached to.
 *
 * Important notes:
 * 1. This hook does not handle changes in the element's height over time. It only measures the
 *    initial height of the element when the component first mounts.
 * 2. If the height of the element is set using viewport units (vw, vh, vmin, vmax), the returned
 *    height might not accurately reflect changes due to viewport resizing.
 *
 * @example
 * ```
 * import React from 'react';
 * import useElementHeight from './hooks/useElementHeight';
 *
 * const MyComponent: React.FC = () => {
 *   const { height, ref } = useElementHeight();
 *
 *   return (
 *     <div ref={ref}>
 *       {height && `This div is ${height}px tall.`}
 *     </div>
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 *
 * @returns An object with two properties:
 *
 *          - height: The height of the element (or null if the height couldn't be determined)
 *          - ref: The ref that should be attached to the element.
 */
function useElementHeight<T extends HTMLElement>() {
	const ref = useRef<T | null>(null);
	const [height, setHeight] = useState<number | null>(null);

	useEffect(() => {
		if (ref.current) {
			setHeight(ref.current.offsetHeight);
		}
	}, [ref]);

	return { height, ref };
}

export default useElementHeight;
