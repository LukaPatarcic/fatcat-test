import React from 'react';

// Assets
import staffAugmentation from '../../../../assets/images/icons/staff-augmentation.svg';
import softwareDevelopment from '../../../../assets/images/icons/software-development.svg';
import hiringPartner from '../../../../assets/images/icons/hiring-partner.svg';
import employerOfRecord from '../../../../assets/images/icons/employer-of-record.svg';
import staffAugmentationLine from '../../../../assets/images/home/home-services/line-staff-augmentation.svg';
import softwareDevLine from '../../../../assets/images/home/home-services/line-software-dev.svg';
import hiringPartnerLine from '../../../../assets/images/home/home-services/line-hiring-partner.svg';

// Atoms
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { Heading } from 'fatcat-ui-library/components/Atoms/Heading';

// Molecules
import ServiceCard from '../../../Molecules/Cards/ServiceCard';
import Section from 'fatcat-ui-library/components/Molecules/Section';
import ServicesNavigation from './Molecules/ServicesNavigation/ServicesNavigation';

// Hooks
import useElementHeight from '../../../../utils/hooks/useElementHeight';
import useActiveInViewport from '../../../../utils/hooks/useActiveInViewport';
import usePrevious from '../../../../utils/hooks/usePrevious';

const sections = [
	{
		title: 'Scale your team effortlessly, while focusing on your core business.',
		eyebrow: 'Staff Augmentation',
		image: staffAugmentation,
		line: staffAugmentationLine,
		imageFirst: false,
		backgroundColor: 'mainYellow',
		url: '/staff-augmentation',
		id: 'staff-augmentation-service',
	},
	{
		title: 'Transform your ideas into outstanding products.',
		eyebrow: 'Software Development',
		image: softwareDevelopment,
		line: softwareDevLine,
		imageFirst: true,
		backgroundColor: 'mainRed',
		url: '/software-development',
		id: 'software-development-service',
	},
	{
		title: 'Find and hire top-notch IT professionals.',
		eyebrow: 'Hiring Partner',
		image: hiringPartner,
		line: hiringPartnerLine,
		imageFirst: false,
		backgroundColor: 'mainYellow',
		url: '/hiring-partner',
		id: 'hiring-partner-service',
	},
	{
		title: 'Simplify expansion to Serbia with our HR and payroll service.',
		eyebrow: 'Payroll and HR',
		image: employerOfRecord,
		line: hiringPartnerLine,
		imageFirst: true,
		backgroundColor: 'mainGreen',
		url: '/employer-of-record',
		id: 'employer-of-record-service',
	},
] as const;

const HomeServices: React.FC = () => {
	const { height, ref: navigationRef } = useElementHeight<HTMLDivElement>();

	const {
		active,
		ref: sectionsRef,
	} = useActiveInViewport<HTMLDivElement>(height ?? 0);
	const previousActiveIndex = usePrevious(active);

	return (
		<Flex
			as="section"
			direction="column"
			justifyContent="center"
			backgroundColor="mainYellow"
		>
			<Flex
				minH={`calc(50vh - ${(height ?? 0) / 2}px)`}
				alignItems="flex-end"
				mobile={[
					{ minH: 'unset' },
				]}
				backgroundColor="mainYellow"
			>
				<Section
					as="div"
					padding={['t40', 'b80']}
					tablet={[{ paddingBottom: 's0' }]}
				>
					<Heading
						as="h2"
						textAlign="center"
					>
						Our services are designed to help you scale your business with ease.
					</Heading>
				</Section>
			</Flex>
			<ServicesNavigation
				buttons={sections.map(({
					line,
					eyebrow,
					id,
				}) => ({
					line,
					title: eyebrow,
					id,
				}))}
				ref={navigationRef}
				/* If the current active section is none, but the previous active section was the last section
				   (Payroll and HR) we want to keep that section as active. This prevents a bug where background color
				   resets to yellow (because there is no active section) when you scroll near the bottom of the last section. */
				activeIndex={
					typeof active !== 'undefined' ?
						active :
						previousActiveIndex === sections.length - 1 ?
							previousActiveIndex : undefined
				}
			/>
			<Flex
				direction="column"
				ref={sectionsRef}
				marginTop="s88"
				largeTablet={[{ marginTop: 's0' }]}
			>
				{sections.map(section => (
					<ServiceCard
						key={section.title}
						title={section.title}
						eyebrow={section.eyebrow}
						image={section.image}
						imageFirst={section.imageFirst}
						backgroundColor={section.backgroundColor}
						url={section.url}
						id={section.id}
					/>
				))}
			</Flex>
		</Flex>
	);
};

export default HomeServices;
