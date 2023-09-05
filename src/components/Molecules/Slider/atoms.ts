import styled, { css } from 'styled-components';

// Atoms
import { Wrapper } from 'fatcat-ui-library/components/Atoms/Wrapper';
import { Button } from 'fatcat-ui-library/components/Atoms/Button';

type TSliderWrapper = {
	scaleAnimation?: boolean;
}

export const SliderWrapper = styled(Wrapper)<TSliderWrapper>`
	
	${props => props.scaleAnimation && css`
        .slick-slide {
            transition: all .5s ease;
        }

        .slick-slide:not(.slick-active) {
            transform: scale(0.8);
            opacity: 0;
        }

        .slick-slide.slick-active {
            transform: scale(1);
            opacity: 1;
        }
	`}
	
	.slick-arrow {
		display: none !important;
	}

	.slick-dots li:focus:not(:focus-visible) {
		position: relative;
	}
`;

export const DotButton = styled(Button)`
	border-radius: 50%;
`;
