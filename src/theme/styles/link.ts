import { css } from 'styled-components';
import { LINK_BASE } from 'fatcat-ui-library/theme/definitions';

export const LINK_VARIANT = {
	nav: css`
		${LINK_BASE};
		font-family: ${props => props.theme.fontFamily.main};
		font-weight: ${props => props.theme.fontWeight.medium};
		font-size: ${props => props.theme.fontSize.s16};
		line-height: ${props => props.theme.lineHeight.p20};
	`,
	footer: css`
		${LINK_BASE}
        font-family: ${props => props.theme.fontFamily.main};
        font-size: ${props => props.theme.fontSize.s18};
        line-height: ${props => props.theme.lineHeight.p28};
        font-weight: ${props => props.theme.fontWeight.medium};
	`,
};
