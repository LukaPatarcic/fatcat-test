import { css } from 'styled-components';

export const TABLE_VARIANT = {
	pricing: css`
		color: ${props => props.theme.color.black};
		width: 100%;
		text-align: left;
		border-spacing: 20px 0;
		border-collapse: separate;
		padding-bottom: 20px;

        thead th {
			text-align: left;
            border-bottom: unset;
			color: ${props => props.theme.color.white};
			background-color: ${props => props.theme.backgroundColor.primary};
			border-radius: 8px 8px 0 0;
			padding: ${props => `${props.theme.space.s16} ${props.theme.space.s32}`};
			${props => props.theme.textSize.h4};
			
			${props => props.theme.media.mobile} {
				${props => props.theme.textSize.h4Mobile};
			}
			
			:nth-child(1) {
				width: 66%;
			}
        }

        tbody td {
			
			position: relative;
			text-align: left;
            color: ${props => props.theme.color.black};
            padding: ${props => `${props.theme.space.s24} ${props.theme.space.s32}`};
			background-color: ${props => props.theme.backgroundColor.white};

            :nth-child(1) {
                color: ${props => props.theme.color.black};
                text-align: left;
				width: 66%;
            }
			
			// Border bottom:
			::after {
				position: absolute;
				content: '';
				bottom: 0;
				left: ${props => props.theme.space.s32};
				right: ${props => props.theme.space.s32};
				border-bottom: 1px solid ${props => props.theme.color.gray10};
			}
        }
		
		// Remove border bottom if in last row
		tbody tr:last-child td::after {
			border-bottom: unset;
		}
    `,
};
