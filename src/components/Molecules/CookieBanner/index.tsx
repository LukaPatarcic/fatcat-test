import React from 'react';
import CookieConsent from 'react-cookie-consent';
import { css } from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

// Atoms
import { Button } from 'fatcat-ui-library/components/Atoms/Button';
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { Heading } from 'fatcat-ui-library/components/Atoms/Heading';
import { Paragraph } from 'fatcat-ui-library/components/Atoms/Paragraph';
import { Wrapper } from 'fatcat-ui-library/components/Atoms/Wrapper';

// Custom styles
import {
	ButtonWrapperStyle,
	ContentStyle,
	CookieBannerStyles,
} from './styles';

// Assets
const cookieCat = '../../../assets/images/cookie-banner/cookie-cat.png';
const cookie = '../../../assets/images/cookie-banner/cookie.png';

const DeclineButtonProps = {
	variant: 'ghost',
	size: 'small',
	buttonColor: 'ghostBlack',
	fontWeight: 'medium',
} as const;

const AcceptButtonProps = {
	variant: 'primary',
	size: 'small',
	buttonColor: 'primaryPurple',
	fontWeight: 'medium',
} as const;

const CookieBanner: React.FC = () => {
	return (
		<>
			<CookieBannerStyles />
			<CookieConsent
				enableDeclineButton
				location="none"
				buttonText="Accept"
				declineButtonText="Decline"
				cookieName="fatCatCodersCookie"
				expires={365}
				setDeclineCookie={false}
				disableButtonStyles
				ButtonComponent={Button}
				disableStyles
				containerClasses="CookieConsent--wrapper"
				customButtonWrapperAttributes={ButtonWrapperStyle}
				contentStyle={ContentStyle}
				customDeclineButtonProps={DeclineButtonProps}
				customButtonProps={AcceptButtonProps}
			>
				<Flex
					direction="column"
				>
					<Wrapper
						w="60%"
						styled={css`margin-top: -60px;`}
						marginBottom="s16"
						hide="mobile"
						alignSelf="center"
					>
						<StaticImage
							alt="Illustration of a cat holding a small cookie"
							placeholder="blurred"
							src={cookieCat}
						/>
					</Wrapper>
					<Flex
						alignItems="center"
						justifyContent="center"
						marginBottom="s16"
						gap="16px"
						mobile={['justifyContentFlexStart']}
					>
						<Wrapper
							w="24px"
							show="mobile"
						>
							<StaticImage
								src={cookie}
								placeholder="blurred"
								alt=""
							/>
						</Wrapper>
						<Heading
							as="h4"
							textSize="h4Mobile"
							textAlign="center"
						>
							We use cookies
						</Heading>
					</Flex>
					<Paragraph
						textAlign="center"
						mobile={[
							'textLeft',
							{
								marginLeft: 's40',
							},
						]}
					>
						This website uses cookies to ensure you get the best experience.
					</Paragraph>
				</Flex>
			</CookieConsent>
		</>
	);
};

export default CookieBanner;
