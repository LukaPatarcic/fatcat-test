import {
	useState,
	useCallback,
	useMemo,
	useEffect,
} from 'react';
import { DefaultTheme, useTheme } from 'styled-components';

// Utils
import { parseMediaQuery } from '../helpers';

type MediaName = Exclude<keyof DefaultTheme['media'], 'noHover'>;
type MediaDef = {
	name: MediaName;
	breakpoint: number;
	condition: string;
};

/**
 * Custom React Hook that determines the current media query of the window.
 * It uses the 'media' property of the theme, parsing each media query to extract
 * the condition and breakpoint. It then listens for resize events and updates
 * the state to reflect the current media query that matches the window's width.
 *
 * @returns {MediaDef} An object containing the name of the current media query
 * (as defined in the theme), the associated breakpoint, and the condition itself.
 *
 * @example
 * // In your component:
 * const currentMedia = useCurrentMediaQuery();
 * console.log(currentMedia);
 * // Might output: { name: "tablet", breakpoint: 768, condition: "(max-width: 768px)" }
 *
 *
 */
function useActiveMediaQuery() {
	const theme = useTheme();
	const [media, setMedia] = useState<MediaDef>({
		name: 'wideDesktop',
		breakpoint: 1921,
		condition: '(min-width: 1921px)',
	});

	const mediaBreakpoints = useMemo(
		() => Object.entries(theme.media)
			.map(([key, mediaQuery]) => {
				const parsed = parseMediaQuery(mediaQuery);
				if (!parsed) return null;
				return {
					name: key as MediaName,
					condition: parsed[0],
					breakpoint: parsed[1],
				};
			})
			.filter(v => v !== null)
			.sort(
				(a, b) =>
					// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
					(a!).breakpoint - (b!).breakpoint
			) as MediaDef[],
		[theme.media]
	);

	const onMediaChange = useCallback(() => {
		for (const { name, condition, breakpoint } of mediaBreakpoints) {
			if (window.matchMedia(condition).matches) {
				setMedia(oldMedia => oldMedia.name === name ? oldMedia : {
					name,
					breakpoint,
					condition,
				});
				return;
			}
		}
	}, [mediaBreakpoints]);

	useEffect(() => {
		onMediaChange();
		window.addEventListener('resize', onMediaChange);
		return () => {
			window.removeEventListener('resize', onMediaChange);
		};
	}, [onMediaChange]);

	return media;
}

export default useActiveMediaQuery;
