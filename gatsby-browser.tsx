import type { GatsbyBrowser } from 'gatsby';
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// Fonts
import './src/assets/fonts/stylesheet.css';

// Slick Carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const shouldUpdateScroll: GatsbyBrowser['shouldUpdateScroll'] = ({
	routerProps: { location },
	getSavedScrollPosition,
}) => {
	const currentPosition = getSavedScrollPosition(location);

	if (location.state?.disableScrollUpdate) {
		return false;
	}

	setTimeout(() => {
		if (location.hash) {
			const element = document.querySelector(location.hash);
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' });
			}
		} else {
			// If there's no hash, scroll to the top of the page
			window.scrollTo(...(currentPosition || [0, 0]));
		}
	}, 0);

	return false;
};
