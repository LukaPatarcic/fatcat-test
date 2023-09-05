import React, { useEffect, useMemo, useState } from 'react';
import { Settings as SliderSettings } from 'react-slick';
import { DefaultTheme, useTheme } from 'styled-components';

// Atoms
import { Heading } from 'fatcat-ui-library/components/Atoms/Heading';
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { Paragraph } from 'fatcat-ui-library/components/Atoms/Paragraph';
import { Wrapper } from 'fatcat-ui-library/components/Atoms/Wrapper';

// Molecules
import Slider from '../../Slider';
import TeamMemberCard from './Molecules/TeamMemberCard';

// Hooks
import useActiveMediaQuery from '../../../../utils/hooks/useActiveMediaQuery';

// Utils
import {
	parseMediaQuery,
} from '../../../../utils/helpers';
import {
	choose,
	shuffle,
} from '../../../../utils/random';

// Types
import { TContentfulMember } from '../../../../utils/types';

interface SliderCardSectionProps {
	title: string;
	description?: string;
    teamMembers: TContentfulMember[];
	settings?: SliderSettings;
	/**
	 * slideLayout: [mediaQueryName]: [rows, cols]
	 */
	slideLayout: Record<Exclude<keyof DefaultTheme['media'], 'noHover'>, [number, number]>;
	defaultLayout: [number, number];
}

// TODO: dodati brojeve na slajder umesto dots
// TODO: obrisati linkedin iz contentfula

const TeamMembersSection: React.FC<SliderCardSectionProps> = (props) => {
	const {
		title,
		description,
		teamMembers,
		settings,
		slideLayout,
		defaultLayout,
	} = props;

	const theme = useTheme();
	const media = useActiveMediaQuery();
	const [currentLayout, setCurrentLayout] = useState(defaultLayout);

	useEffect(() => {
		if (typeof slideLayout[media.name] !== 'undefined') {
			// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
			setCurrentLayout(slideLayout[media.name]!);
		}
	}, [media.name, slideLayout]);

	const slides = useMemo(() => {
		const { length } = teamMembers;
		const [rows, cols] = currentLayout;
		const perSlide = rows * cols;
		const missingAmount = (perSlide - (length % perSlide)) % perSlide;
		const numPeopleOnLastSlide = perSlide - missingAmount;
		const teamMembersToAdd = missingAmount > 0 ? choose(missingAmount, teamMembers.length - 1 - numPeopleOnLastSlide)
			.map(idx => ({ ...teamMembers[idx] }))
			.map((member, index) => ({
				...member,
				// Make it unique for added team members
				slug: `${member.slug}-${length + index}`,
			})) : [];
		return [...teamMembers, ...shuffle(teamMembersToAdd)];
	}, [currentLayout, teamMembers]);

	const responsiveSettings = useMemo(() => {
		return Object.entries(slideLayout)
			.map(
				([name, [rows, cols]]) => {
					const mediaQuery = theme.media[name as keyof DefaultTheme['media']];
					const values = parseMediaQuery(mediaQuery);
					if (!values) throw new Error(`There is invalid slideLayout media supplied to TeamMembersSection: ${name}`);

					return {
						breakpoint: values[1],
						settings: {
							slidesPerRow: cols,
							rows,
						},
					};
				}
			);
	}, [slideLayout, theme.media]);

	const sliderSettings: SliderSettings = useMemo(() => ({
		dots: true,
		variableWidth: false,
		slidesPerRow: defaultLayout[1],
		rows: defaultLayout[0],
		responsive: responsiveSettings,
		...settings,
	}), [defaultLayout, responsiveSettings, settings]);

	return (
		<Flex
			direction="column"
			alignItems="center"
		>
			<Flex
				direction="column"
				alignItems="center"
				gap="16px"
				marginBottom="s80"
				tablet={[{	marginBottom: 's32' }]}
			>
				<Heading
					as="h2"
					maxW="70%"
					textAlign="center"
					tablet={[{ maxW: '100%' }]}
				>
					{title}
				</Heading>
				{description && (
					<Paragraph
						maxW="80%"
						textAlign="center"
						tablet={[{ maxW: '100%' }]}
					>
						{description}
					</Paragraph>
				)}
			</Flex>
			<Slider
				settings={sliderSettings}
				slides={
					slides.map(member => (
						<Wrapper
							key={member.slug}
							marginBottom="s24"
						>
							<TeamMemberCard
								name={member.name}
								description={member.title}
								image={member.image}
							/>
						</Wrapper>
					))
				}
			/>
		</Flex>
	);
};

TeamMembersSection.defaultProps = {
	description: undefined,
	settings: undefined,
};

export default TeamMembersSection;
