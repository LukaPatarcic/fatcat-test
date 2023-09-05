import { useEffect, useRef } from 'react';

/**
 * Hook to track the previous value of a state or prop.
 *
 * Note that this hook will not cause a re-render when the tracked value changes.
 *
 * @param value The state or prop to track.
 * @returns The previous value or `undefined` on the first render.
 *
 * @example
 * const [count, setCount] = useState(0);
 * const prevCount = usePrevious(count);
 */
function usePrevious<T>(value: T): T | undefined {
	const ref = useRef<T>();

	useEffect(() => {
		ref.current = value;
	}, [value]);

	return ref.current;
}

export default usePrevious;
