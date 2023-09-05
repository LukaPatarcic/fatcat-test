import styled, { css } from 'styled-components';
import { Wrapper } from 'fatcat-ui-library/components/Atoms/Wrapper';

export const RecruitmentProcessCardWrapper = styled.article<{ side: 'left' | 'right' }>`
	display: flex;
	flex-direction: column;
	align-self: ${props => props.side === 'left' ? 'flex-start' : 'flex-end'};
    // it should be 50% + half of it's left/right border which is 1px
	max-width: calc(50% + 1px);
	border-color: ${props => props.theme.color.gray20};
	border-style: solid;
	${props => props.side === 'left' ? css`border-right-width: 2px` : css`border-left-width: 2px`};
	${props => props.side === 'left' ? css`padding-right: ${props.theme.space.s80}` : css`padding-left: ${props.theme.space.s80}`};
	
	${props => props.theme.media.largeTablet} {
		align-items: center;
	}
	
	${props => props.theme.media.tablet} {
		max-width: 100%;
		border: none;
		padding: 0;
	}
	
	${props => props.theme.media.mobile} {
		align-items: flex-start;
	}
`;

export const TitleWrapper = styled(Wrapper)<{ side: 'left' | 'right' }>`
	margin-bottom: ${props => props.theme.space.s16};
	position: relative;
	
	::after {
		content: "";
		position: absolute;
		top: 50%;
		transform: translate(${props => props.side === 'left' ? 'calc(50% + 1px)' : 'calc(-50% - 1px)'}, -50%);
		${props => props.side === 'left' ? css`right: -${props.theme.space.s80}` : css`left: -${props.theme.space.s80}`};
		width: 9px;
		height: 9px;
		border-radius: 50%;
		background-color: ${props => props.theme.backgroundColor.primary};
		
		${props => props.theme.media.tablet} {
			content: none;
		}
	}
`;
