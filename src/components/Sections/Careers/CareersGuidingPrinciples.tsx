import React from 'react';

// Assets
import challenge from '../../../assets/images/careers/guiding-principles/challenge.svg';
import expectations from '../../../assets/images/careers/guiding-principles/expectations.svg';
import getThingsDone from '../../../assets/images/careers/guiding-principles/get-thing-done.svg';
import winTogether from '../../../assets/images/careers/guiding-principles/win-together.svg';

// Atoms
import { BR } from 'fatcat-ui-library/components/Atoms/Divider';

// Molecules
import SimpleCardSection from '../../Molecules/Sections/SimpleCardSection';
import Section from '../../Molecules/Section';

// Utils
import { TrackLabel } from '../../../utils/gtag';

const cards = [
	{
		image: challenge,
		title: (
			<>
				Challenge
				{' '}
				<BR
					hide="largeTablet"
				/>
				the status quo
			</>
		),
		description: 'Don’t wait for the things to happen, step up! Be proactive and innovative.',
	},
	{
		image: winTogether,
		title: (
			<>
				We win
				{' '}
				<BR
					hide="largeTablet"
				/>
				together
			</>
		),
		description: 'Alone we go faster, but as a team, we go further.',
	},
	{
		image: expectations,
		title: (
			<>
				Exceed expectations
			</>
		),
		description: 'Never settle for “good enough” when you know you can do better.',
	},
	{
		image: getThingsDone,
		title: (
			<>
				Get
				{' '}
				<BR
					hide="largeTablet"
				/>
				things done
			</>
		),
		description: 'Own it and take responsibility for what you do. If something is broken, fix it.',
	},
];

const CareersGuidingPrinciples: React.FC = () => {
	return (
		<Section clearTopPadding>
			<SimpleCardSection
				title="What we stand for"
				numOfColumns={4}
				cards={cards}
				buttonProps={{
					buttonText: 'About us',
					url: '/about-us',
					gaTrackLabel: TrackLabel.ABOUT_US,
				}}
			/>
		</Section>
	);
};

export default CareersGuidingPrinciples;
