import styled from 'styled-components';

export type InputWrapperProps = {
	position?: string;
	marginBottom?: string;
}

export const InputWrapper = styled.div<InputWrapperProps>`
	display: flex;
	flex-direction: column-reverse;
	position: ${props => props.position};
	margin-bottom: ${props => props.marginBottom};
	gap: 8px;
	&:hover, &:focus-within{
		& label {
		color: ${props => props.theme.color.primary};
		}
	}
`;

InputWrapper.defaultProps = {
	position: 'relative',
};

export const ErrorMsg = styled.div.attrs({
	role: 'alert',
})`
	position: absolute;
	bottom: -5px;
	transform: translateY(100%);
	color: ${props => props.theme.color.warning};
	font-size: ${props => props.theme.fontSize.s14};
`;

export const Label = styled.label`
	color: ${props => props.theme.color.black};
`;

export type StatusMessageProps = {
	variant: 'error' | 'success';
};

export const StatusMessage = styled.div.attrs<StatusMessageProps>(props => ({
	role: props.variant === 'error' ? 'alert' : 'status',
}))<StatusMessageProps>`
    position: absolute;
    bottom: -10px;
    left: 0;
    right: 0;
    transform: translateY(100%);
    color: ${props => props.variant === 'error' ? props.theme.color.red : props.theme.color.mainGreen};
    font-size: ${props => props.theme.fontSize.s14};
`;
