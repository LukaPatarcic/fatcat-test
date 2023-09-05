import * as React from 'react';

// Assets
import staffAugmentation from '../../../assets/images/icons/staff-augmentation.svg';
import softwareDevelopment from '../../../assets/images/icons/software-development.svg';
import hiringPartner from '../../../assets/images/icons/hiring-partner.svg';
import employerOfRecord from '../../../assets/images/icons/employer-of-record.svg';
import arrow90 from '../../../assets/images/icons/arrow-90deg.svg';

// Atoms
import { Paragraph } from 'fatcat-ui-library/components/Atoms/Paragraph';
import { Heading } from 'fatcat-ui-library/components/Atoms/Heading';
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { Image } from 'fatcat-ui-library/components/Atoms/Image';

// Molecules
import ColorfulCard from '../Cards/ColorfulCard';
import Section from 'fatcat-ui-library/components/Molecules/Section';

const cards = [
	{
		image: staffAugmentation,
		title: 'Staff Augmentation',
		description: 'Scale your team fast and reduce time-to-market.',
		backgroundColor: 'mainYellow',
		url: '/staff-augmentation',
	},
	{
		image: softwareDevelopment,
		title: 'Software Development',
		description: 'Transform your ideas into top-class digital products.',
		backgroundColor: 'mainRed',
		url: '/software-development',
	},
	{
		image: hiringPartner,
		title: 'Hiring Partner',
		description: 'Find and hire top-notch IT professionals.',
		backgroundColor: 'mainYellow',
		url: '/hiring-partner',
	},
	{
		image: employerOfRecord,
		title: 'Employer of Record',
		description: 'Simplify expansion to Serbia with our HR and payroll service.',
		backgroundColor: 'mainGreen',
		url: '/employer-of-record',
	},
] as const;

interface ServicesProps{
	title?: string;
	description?: string;
}

export const Services: React.FC<ServicesProps> = (props) => {
	const {
		title,
		description,
	} = props;

	return (
		<Section
			paddingY="s192"
			backgroundColor="cream"
			scale
		>
			<Flex
				direction="column"
				alignItems="center"
				gap="16px"
				marginBottom="s32"
				tablet={[{ marginBottom: 's24' }]}
			>
				<Heading
					as="h2"
					w="100%"
					textAlign="center"
					mobile={[{ textAlign: 'left' }]}
					scale
				>
					{title ?? 'Our services are designed to help you scale your business with ease'}
				</Heading>
				{description && (
					<Paragraph
						textAlign="center"
						w="70%"
						tablet={['fluid']}
						mobile={[{ textAlign: 'left' }]}
					>
						{description}
					</Paragraph>
				)}
				<Image
					alt=""
					w="20px"
					src={arrow90}
					textColor="black"
				/>
			</Flex>
			<Flex
				gap="32px"
				justifyContent="center"
				wrap
			>
				{cards.map(card => (
					<ColorfulCard
						key={card.url}
						{...card}
					/>
				))}
			</Flex>
		</Section>
	);
};

Services.defaultProps = {
	title: undefined,
	description: undefined,
};
