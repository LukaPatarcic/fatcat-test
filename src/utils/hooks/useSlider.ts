import {
	useCallback, useEffect, useRef, useState,
} from 'react';
import Slider from 'react-slick';

/**
 * Custom hook for managing react-slick slider reference within your component. This hook provides
 * a reference to the slider instance and allows you to access its methods directly.
 *
 * @returns {Object} - An object containing the slider instance and a ref callback function.
 * @property {Slider} slider - The current slider instance.
 * @property {Function} ref - A callback function to be attached to the Slider's ref prop. This callback
 * updates the current slider instance in response to ref changes.
 *
 * @example
 * // Usage in your component
 *
 * // Import the hook
 * import useSlider from '...';
 *
 * // Use the hook
 * const { slider, ref } = useSlider()
 *
 * useEffect(() => {
 *     // You can use the slider's methods directly
 *     slider.slickNext();
 * }, []);
 *
 * return (
 *     // Pass the ref callback to Slider's ref prop
 *     <Slider ref={ref}>
 *       // Slider children
 *     </Slider>
 * )
 */
function useSlider() {
	const sliderRef = useRef<Slider>();
	const [slider, setSlider] = useState<Slider>();

	const ref = useCallback((r: Slider) => {
		sliderRef.current = r;
	}, []);

	useEffect(() => {
		if (sliderRef.current) {
			setSlider(sliderRef.current);
		}
	}, []);

	return {
		slider,
		ref,
	};
}

export default useSlider;
