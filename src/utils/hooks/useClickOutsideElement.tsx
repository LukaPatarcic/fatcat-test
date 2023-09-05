import { useEffect } from 'react';

/**
 * Hook that alerts clicks outside of the passed ref
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useClickOutsideElement(func: (event: MouseEvent) => void, ref: any) {
	useEffect(() => {
		/**
		 * call function if clicked on outside of element
		 */
		function handleClickOutside(event: MouseEvent) {
			if (ref.current && !ref.current.contains(event.target)) {
				func(event);
			}
		}
		// Bind the event listener
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [func, ref]);
}
