import styled from 'styled-components';

export const FloatingImagesWrapper = styled.span`
    .quote-left-image {
        animation:  ${props => props.theme.animation.hovering} 10s ease-in-out infinite 2s reverse;
    }
   .quote-top-image{
        animation:  ${props => props.theme.animation.hovering} 10s ease-in-out infinite 4s reverse;
    }
   .quote-bottom-image{
        animation:  ${props => props.theme.animation.hovering} 10s ease-in-out infinite 3s ;
    }
    .quote-right-image {
        animation:  ${props => props.theme.animation.hovering} 10s ease-in-out infinite 1s;
    }
`;
