import { css } from 'styled-components';

export const INPUT_VARIANT = {
	base: css<{errorMsg: string}>`
		font-family: ${props => props.theme.fontFamily.main};
        width: 100%;
        appearance: none;
        outline: none;
        border-radius: 8px;
        border: 1px solid ${props => props.theme.color.gray20};
        padding: ${props => props.theme.space.s14} ${props => props.theme.space.s16};
        color: ${props => props.theme.textColor.black};
        background: ${props => props.theme.textColor.white};
        font-size: ${props => props.theme.fontSize.s16};
        /* margin-bottom: ${props => props.theme.space.s20}; */
      
        &:focus, &:hover{
            border-color: ${props => props.theme.color.primary}; 
            & ~ label {
                color: ${props => props.theme.textColor.purple};
            }
        }

        ${props => props.errorMsg && css`
            border-color: ${props.theme.color.warning} !important;
            & ~ label {
                color: ${props.theme.color.warning} !important;
            }
        `}
    `,
};
