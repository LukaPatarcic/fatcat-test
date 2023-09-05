import React from 'react';

// Atoms
import { Paragraph } from 'fatcat-ui-library/components/Atoms/Paragraph';
import { Image } from 'fatcat-ui-library/components/Atoms/Image';
import { Heading } from 'fatcat-ui-library/components/Atoms/Heading';
import {
	RecruitmentProcessCardWrapper,
	TitleWrapper,
} from './RecruitmentProcessCard.atoms';

interface RecruitmentProcessCardProps {
	title: string;
	description: string;
	image: string;
    side?: 'left' | 'right';
}

const RecruitmentProcessCard: React.FC<RecruitmentProcessCardProps> = (props) => {
	const {
		title,
		image,
		description,
		side = 'left',
	} = props;

	return (
		<RecruitmentProcessCardWrapper
			side={side}
		>
			<Image
				src={image}
				alt=""
				h="70px"
				w="auto"
				marginBottom="s16"
				alignSelf="flex-start"
				largeTablet={[{
					alignSelf: 'center',
				}]}
				mobile={[{ alignSelf: 'flex-start' }]}
			/>
			<TitleWrapper
				side={side}
			>
				<Heading
					as="h3"
					largeTablet={['textCenter']}
					mobile={['textLeft']}
				>
					{title}
				</Heading>
			</TitleWrapper>
			<Paragraph
				largeTablet={['textCenter']}
				mobile={['textLeft']}
			>
				{description}
			</Paragraph>
		</RecruitmentProcessCardWrapper>
	);
};

RecruitmentProcessCard.defaultProps = {
	side: 'left',
};

export default RecruitmentProcessCard;
