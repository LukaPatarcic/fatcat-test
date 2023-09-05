import { css } from 'styled-components';

export const TEXT_VARIANT = {
	h1: css`
		${props => props.theme.textSize.h1};
		${props => props.theme.media.mobile} {
			${props => props.theme.textSize.h1Mobile};
		}
	`,

	h2: css`
		${props => props.theme.textSize.h2};
		${props => props.theme.media.mobile} {
			${props => props.theme.textSize.h2Mobile};
		}
	`,
	h3: css`
		${props => props.theme.textSize.h3};
		${props => props.theme.media.mobile} {
			${props => props.theme.textSize.h3Mobile};
		}
	`,
	h4: css`
		${props => props.theme.textSize.h4};
		${props => props.theme.media.mobile} {
			${props => props.theme.textSize.h4Mobile};
		}
	`,
	h5: css`
		${props => props.theme.textSize.h5};
		${props => props.theme.media.mobile} {
			${props => props.theme.textSize.h5Mobile};
		}
	`,
	h6: css`
		${props => props.theme.textSize.h6};
		${props => props.theme.media.mobile} {
			${props => props.theme.textSize.h6Mobile};
		}
	`,
	paragraph: css`
		${props => props.theme.textSize.paragraph};
		${props => props.theme.media.mobile} {
			${props => props.theme.textSize.paragraphMobile};
		}
	`,
	button: css`
		${props => props.theme.textSize.button};
		${props => props.theme.media.mobile} {
			${props => props.theme.textSize.buttonMobile};
		}
	`,
};
