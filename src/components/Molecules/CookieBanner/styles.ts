import { createGlobalStyle } from 'styled-components';

export const CookieBannerStyles = createGlobalStyle`
	.CookieConsent--wrapper {
		display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: flex-start;
        background: ${props => props.theme.backgroundColor.white};
        box-shadow: 0 0 66px rgba(0, 0, 0, 0.1);
        max-width: 270px;
        width: 100%;
        box-sizing: border-box;
		position: fixed;
		z-index: 999;
        bottom: 32px;
        left: 32px;
        padding: 24px;
		border-radius: 8px;
		
		${props => props.theme.media.mobile} {
			left: 0;
			bottom: 0;
			right: 0;
			width: 100%;
			max-width: unset;
		}
	}

    .CookieConsent--buttonWrapper {
		display: flex;
		width: 100%;
		justify-content: space-between;
		
		${props => props.theme.media.mobile} {
			justify-content: flex-end;
			gap: 16px
		}
	}
`;

export const ButtonWrapperStyle = {
	className: 'CookieConsent--buttonWrapper',
} as const;

export const ContentStyle = {
	flex: 'unset',
	marginBottom: '24px',
	marginRight: '0',
	marginLeft: '0',
	marginTop: '0',
} as const;
