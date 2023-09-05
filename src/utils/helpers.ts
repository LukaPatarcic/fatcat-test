/**
 * Helper for formatting string reading time in blogs
 * @param minutes reading time of current blog
 */
export const formatReadingTime = (minutes: number | null) => {
	if (minutes) {
		const readingTime = Math.round(minutes);
		if (readingTime === 0) {
			return '1 min read';
		}
		return `${readingTime} min read`;
	}
	return '';
};

export function getUrl() {
	if (typeof window !== 'undefined') {
		return window.location.href;
	}
	return '';
}

/**
 * Extracts the media query condition (min-width or max-width) and the associated number from a media query string.
 * @param {string} mediaQuery - The media query string.
 * @returns {[string, number]} An array where the first element is the media query condition and the second element is the number extracted from the media query string.
 * @throws Will throw an error if the media query string is not in the correct format.
 *
 * @example
 * // returns ["(min-width: 700px)", 700]
 * extractFromMediaQuery("@media screen and (min-width: 700px)");
 *
 * // returns ["(max-width: 500px)", 500]
 * extractFromMediaQuery("@media screen and (max-width: 500px)");
 */
export function parseMediaQuery(mediaQuery: string): [string, number] | null {
	const match = mediaQuery.match(/\((min-width|max-width): (\d+)px\)/);

	if (!match) {
		return null;
	}

	return [match[0], Number(match[2])];
}
