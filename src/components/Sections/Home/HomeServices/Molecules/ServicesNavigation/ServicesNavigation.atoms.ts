import styled from 'styled-components';

export const NavLink = styled.a<{
	active: boolean;
	lineImg: string;
}>`
	position: relative;
    font-size: ${props => props.theme.fontSize.s18};
    line-height: ${props => props.theme.lineHeight.p28};
    font-weight: ${props => props.theme.fontWeight.medium};
	color: ${props => props.active ? props.theme.textColor.black : props.theme.textColor.gray80};
	
	${props => props.theme.media.largeTablet} {
        font-size: ${props => props.theme.fontSize.s16};
        line-height: ${props => props.theme.lineHeight.p24};
	}
	
	&:hover {
		color: ${props => props.theme.textColor.black};
	}

    &::after {
		position: absolute;
        content: '';
		bottom: 0;
		left: 0;
		right: 0;
        background: url(${props => props.lineImg}) no-repeat;
        height: 6px;
        transform: translateY(100%);
        transition: width .15s ease-in-out;
        width: ${props => props.active ? '100%' : '0'};
    }
`;
