import React, {
	useCallback,
} from 'react';

// Assets
import research from '../../../assets/images/icons/our-approach-research.svg';
import design from '../../../assets/images/icons/our-approach-design.svg';
import development from '../../../assets/images/icons/our-approach-development.svg';
import testing from '../../../assets/images/icons/our-approach-testing.svg';
import launch from '../../../assets/images/icons/our-approach-launch.svg';
import integration from '../../../assets/images/icons/our-approach-integration.svg';
import yellowLineResearch from '../../../assets/images/icons/yellow-line-research.svg';
import yellowLineDesign from '../../../assets/images/icons/yellow-line-design.svg';
import yellowLineDev from '../../../assets/images/icons/yellow-line-dev.svg';
import yellowLineTesting from '../../../assets/images/icons/yellow-line-testing.svg';
import yellowLineLaunch from '../../../assets/images/icons/yellow-line-launch.svg';
import yellowLineCi from '../../../assets/images/icons/yellow-line-ci.svg';

// Atoms
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { Heading } from 'fatcat-ui-library/components/Atoms/Heading';
import { Paragraph } from 'fatcat-ui-library/components/Atoms/Paragraph';
import { NavLink } from './OurApproachSection.atoms';

// Molecules
import Section from '../../Molecules/Section';

import OurApproachCard from '../../Molecules/Cards/OurApproachCard';

// Utils
import useActiveInViewport from '../../../utils/hooks/useActiveInViewport';

interface Card {
	fullTitle: string;
	shortTitle: string;
	id: string;
	desc: string;
	image: string;
	yellowLine: string;
}

const cards: Card[] = [
	{
		fullTitle: 'Requirements gathering and analysis',
		shortTitle: 'Research',
		id: 'our-approach-research',
		desc: 'This is the initial and the most important step in the process, where you introduce us to your ideas, requests, and expectations.',
		image: research,
		yellowLine: yellowLineResearch,
	},
	{
		fullTitle: 'UX & UI design',
		shortTitle: 'Design',
		id: 'our-approach-design',
		desc: 'Based on your requirements, we focus on designing a user-centric solution and making sure that your app is beautiful, intuitive and easy to use.',
		image: design,
		yellowLine: yellowLineDesign,
	},
	{
		fullTitle: 'Frontend and backend development',
		shortTitle: 'Development',
		id: 'our-approach-development',
		desc: 'After the approval of the design and interface, our dev team takes over. They create both the server-side and the client-side parts of the app, through frontend and backend coding.',
		image: development,
		yellowLine: yellowLineDev,
	},
	{
		fullTitle: 'Testing and QA',
		shortTitle: 'Testing',
		id: 'our-approach-testing',
		desc: 'We make sure that the application is running smoothly, with no bugs, and according to your requested specifications, to detail.',
		image: testing,
		yellowLine: yellowLineTesting,
	},
	{
		fullTitle: 'Release your project to the world',
		shortTitle: 'Launch',
		id: 'our-approach-launch',
		desc: 'Finally, the big moment arrives! Our team sets the whole infrastructure while ensuring that the launch goes smoothly.',
		image: launch,
		yellowLine: yellowLineLaunch,
	},
	{
		fullTitle: 'Long-term support and future upgrades',
		shortTitle: 'Continuous integration',
		id: 'our-approach-continuous-integration',
		// eslint-disable-next-line max-len
		desc: 'Even after everything is put in motion, you can still have our full support.That includes future modifications, updates and improvements of the application, such as adding or removing features, data migration, design updates, etc.',
		image: integration,
		yellowLine: yellowLineCi,
	},
];

const OurApproachSection: React.FC = () => {
	const {
		active,
		ref: cardsRef,
	} = useActiveInViewport<HTMLDivElement>(typeof window !== 'undefined' ? window.innerHeight / 2 : 0, true);
	// `window` object is not available during Gatsby's server side rendering, the check above avoids the error that
	// `window` is not defined.

	const handleClick = useCallback((titleObjShortTitle: string, id: number) => {
		const element = document.getElementById(titleObjShortTitle)?.getBoundingClientRect();
		if (element) {
			const offset = (window.innerHeight / 2) - (element.height / 2);
			window.scrollBy(0, element.y - offset);
		}
	}, []);

	return (
		<Section>
			<Flex
				alignItems="center"
				direction="column"
				mobile={[{ alignItems: 'flex-start' }]}
			>
				<Heading
					as="h2"
					marginBottom="s16"
				>
					Our approach
				</Heading>
				<Paragraph
					maxW="80%"
					marginBottom="s120"
					textAlign="center"
					largeTablet={[{
						maxW: '100%',
						marginBottom: 's48',
					}]}
					mobile={[{ textAlign: 'left' }]}
				>
					A solid development process is the first step in developing reliable, scalable, and high-performing products, on time and on budget.
				</Paragraph>
				<Flex
					justifyContent="space-between"
					gap="145px"
				>
					<Flex
						as="nav"
						hide="largeTablet"
						position="sticky"
						top="35%"
						h="fit-content"
						w="fit-content"
						aria-label="Our approach articles navigation"
					>
						<Flex
							as="ul"
							direction="column"
							gap="32px"
						>
							{cards.map((titleObj, id) => (
								<Flex
									as="li"
									key={titleObj.shortTitle}
									w="min-content"
									direction="column"
									alignItems="flex-start"
								>
									<NavLink
										variant="noStyle"
										key={titleObj.id}
										href={`#${titleObj.id}`}
										lineImg={titleObj.yellowLine}
										active={active === id}
										// @ts-ignore
										onClick={(e) => {
											e.preventDefault();
											handleClick(titleObj.id, id);
										}}
									>
										{titleObj.shortTitle}
									</NavLink>
								</Flex>
							))}
						</Flex>
					</Flex>
					<Flex
						direction="column"
						gap="250px"
						maxW="680px"
						ref={cardsRef}
						largeTablet={[{ gap: '40px' }]}
					>
						{cards.map(titleObj => (
							<OurApproachCard
								key={titleObj.fullTitle}
								id={titleObj.id}
								title={titleObj.fullTitle}
								description={titleObj.desc}
								eyebrowImage={titleObj.image}
								shortTitle={titleObj.shortTitle}
							/>
						))}
					</Flex>
				</Flex>
			</Flex>
		</Section>
	);
};

export default OurApproachSection;
