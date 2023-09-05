import styled, { css } from 'styled-components';

export const InputText = styled.span`
	display: block;
	color: ${props => props.theme.color.black};
	overflow: hidden;
    text-overflow: ellipsis;
	text-align: left;
	line-height: 1;
	white-space: nowrap;

	::-webkit-scrollbar {
		width: 2px;
	}
`;

type TUpload = {
	value?: string;
	borderFocus?: string;
	errorMsg?: string;
}

export const UploadLabel = styled.label<TUpload>`
	height: 54px;
	padding: 17px;
	${props => props.theme.inputVariant.base}
	display: flex;
	cursor: pointer;
    position: relative;
	padding-right: 50px;
	align-items: center;
	${props => props.errorMsg && css`
            border-color: ${props.theme.color.warning} !important;
            & ~ label {
                color: ${props.theme.color.warning} !important;
            }
        `}
`;
