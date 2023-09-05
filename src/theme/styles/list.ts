import { css, DefaultTheme } from 'styled-components';

export const ULLIST_VARIANT = {
	base: css<{ bulletColor?: keyof DefaultTheme['color'] }>`
		
		li {
			margin-bottom: ${props => props.theme.space.s16};
		}
		
		li::before {
			content: "•";
			font-weight: bold;
			display: inline-block;
			margin-right: clamp(8px, 0.35em, 0.35em);
			${props => props.bulletColor && `color: ${props.theme.color[props.bulletColor]};`}
		}
	`,
};

export const OLLIST_VARIANT = {
	base: css`
		> li {
			align-items: flex-start;
			margin-bottom: ${props => props.theme.space.s16};

            &::before {
                content: counter(item);
                aspect-ratio: 1 / 1;
                width: 2em;
				height: 2em;
				line-height: 2em;
                text-align: center;
                border-radius: 50%;
                background-color: rgba(92, 98, 249, 0.1);
            }
		}
	`,
};
