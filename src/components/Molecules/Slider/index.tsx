import React, { ReactElement, useState } from 'react';
import ReactSlickSlider, { Settings } from 'react-slick';

// Atoms
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { Text } from 'fatcat-ui-library/components/Atoms/Text';
import { Button } from 'fatcat-ui-library/components/Atoms/Button';

import { SliderWrapper } from './atoms';

// Molecules

// Hooks
import useSlider from '../../../utils/hooks/useSlider';

// Assets
import CircleArrow from '../../../assets/images/svg-inline/circle-arrow.svg';

interface SliderProps {
	slides: ReactElement[];
	scaleAnimation?: boolean;
	settings?: Settings;
	shouldBeInfinite?: boolean;
}

// @TODO: accessibility
const Slider: React.FC<SliderProps> = (props) => {
	const {
		slides,
		scaleAnimation,
		settings,
		shouldBeInfinite,
	} = props;

	const { slider, ref } = useSlider();

	const [currentSlide, setCurrentSlide] = useState(0);

	return (
		<>
			<SliderWrapper
				scaleAnimation={scaleAnimation}
				margin={['b32']}
			>
				<ReactSlickSlider
					centerPadding="0"
					// accessibility
					centerMode
					slidesToShow={1}
					variableWidth
					infinite={false}
					ref={ref}
					{...settings}
					beforeChange={(currentSlide, nextSlide) => setCurrentSlide(nextSlide)}
				>
					{slides}
				</ReactSlickSlider>
			</SliderWrapper>
			{!settings?.dots && (
				<Flex
					gap="12px"
					alignItems="center"
					justifyContent="center"
				>
					<Button
						variant="noStyle"
						lineHeight="s100"
						transform="scaleX(-1)"
						textColor="black"
						aria-label="Read previous testimonial"
						onClick={() => slider?.slickPrev()}
						disabled={shouldBeInfinite ? undefined : currentSlide === 0}
						opacity={(!shouldBeInfinite && currentSlide === 0) ? '0.3' : undefined}
					>
						<CircleArrow
							// @ts-ignore
							width="32px"
							height="32px"
						/>
					</Button>
					<Flex
						textColor="black"
						fontSize="s18"
						lineHeight="p28"
						fontWeight="medium"
						w="40px"
						justifyContent="space-between"
					>
						<Text
							minW="12px"
						>
							{currentSlide + 1}
						</Text>
						<Text>/</Text>
						<Text>{slides.length}</Text>
					</Flex>
					<Button
						as="button"
						variant="noStyle"
						lineHeight="s100"
						textColor="black"
						aria-label="Read next testimonial"
						onClick={() => slider?.slickNext()}
						disabled={shouldBeInfinite ? undefined : currentSlide === slides.length - 1}
						opacity={(!shouldBeInfinite && currentSlide === slides.length - 1) ? '0.3' : undefined}
					>
						<CircleArrow
							// @ts-ignore
							width="32px"
							height="32px"
						/>
					</Button>
				</Flex>
			)}
		</>
	);
};

Slider.defaultProps = {
	scaleAnimation: false,
	settings: undefined,
	shouldBeInfinite: undefined,
};

export default Slider;
