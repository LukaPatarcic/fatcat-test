import React from 'react';
import { css } from 'styled-components';
import { useLocation } from '@reach/router';

// Themes
import { UIThemeProvider } from 'fatcat-ui-library/theme/theme';

// Atoms
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import GlobalStyle from '../components/Atoms/GlobalStyle';
import { HTMLStyle } from './Layout.atoms';

// Molecules
import CookieBanner from '../components/Molecules/CookieBanner';

// Organisms
import Header from '../components/Organisms/Header/Header';
import Footer from '../components/Organisms/Footer/Footer';

import { newTheme } from '../theme';
import { ModalProvider } from '../contexts/modal';

type IndexProps = {
	children: React.ReactNode;
}

const Index: React.FC<IndexProps> = (props) => {
	const { pathname } = useLocation();

	const pages = ['/hiring-partner/', '/hiring-partner/technical-recruitment/', '/hiring-partner/recruiter-on-demand/', '/staff-augmentation/', '/employer-of-record/'];
	const { children } = props;

	return (
		<UIThemeProvider theme={newTheme}>
			<CookieBanner />
			<GlobalStyle />
			<HTMLStyle />
			<ModalProvider>
				<Flex
					minH="100vh"
					direction="column"
					styled={css`main { flex-grow: 1; }`}
					// This element needs overflow-x: hidden
					// so that there is no horizontal overflow of tablet navigation menu that
					// comes from the side which actually causes horizontal scroll (it's offscreen
					// when closed but causes horizontal scroll nevertheless). Unfortunately, "hidden"
					// value for overflow-x completely breaks down the sticky positioning of the header
					// the alternative is overflow-x: clip which behaves just like "hidden" but doesn't
					// mess up with header's sticky position.
					// See: https://stackoverflow.com/questions/47095596/body-overflow-x-hidden-breaks-position-sticky
					// See: https://www.terluinwebdesign.nl/en/css/position-sticky-not-working-try-overflow-clip-not-overflow-hidden/
					overflowX="clip"
				>
					<Header
						backgroundColor={pathname.includes('/blog') ? 'white' : (pages.includes(pathname)) ? 'mainYellow' : 'cream'}
					/>
					{children}
					<Footer />
				</Flex>
			</ModalProvider>
		</UIThemeProvider>
	);
};

export default Index;
