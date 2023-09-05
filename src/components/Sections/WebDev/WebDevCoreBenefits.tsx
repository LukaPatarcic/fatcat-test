import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

// Atoms
import { Text } from 'fatcat-ui-library/components/Atoms/Text';
import { SectionWrapper } from '../../Atoms/SectionWrapper';
import { SecondaryHeading } from '../../Atoms/SecondaryHeading';

// Molecules
import TextImageSection from '../../Molecules/Sections/TextImageSection';
import Section from 'fatcat-ui-library/components/Molecules/Section';

// Static Assets
const boostConversionsImage = '../../../assets/images/web-dev/boost-conversions.png';
const contentUpdates = '../../../assets/images/web-dev/customization-flexibility.png';
const security = '../../../assets/images/web-dev/security.png';

const WebDevCoreBenefits: React.FC = () => {
	return (
		<SectionWrapper
			as="section"
		>
			<Section
				as="div"
			>
				<SecondaryHeading>
					With us by your side, you can forget about low-performing websites, and get a
					<Text
						textColor="purple"
					>
						{'  '}
						website that converts.
					</Text>
				</SecondaryHeading>
			</Section>
			<TextImageSection
				isFirst
				eyebrow="Boost conversions"
				image={(
					<StaticImage
						src={boostConversionsImage}
						layout="constrained"
						placeholder="blurred"
						objectFit="contain"
						quality={90}
						alt=""
					/>
				)}
				title="Build the fastest websites on the web"
				description="The marketing sites we build are engaging, fast, and loved by users and search engines.
				By improving your page speed scores, we directly contribute to increasing traffic, conversions, and revenue."
			/>
			<TextImageSection
				isImageLeft
				eyebrow="Customization & flexibility"
				image={(
					<StaticImage
						src={contentUpdates}
						layout="constrained"
						placeholder="blurred"
						objectFit="contain"
						quality={90}
						alt=""
					/>
				)}
				title="Make content updates a breeze"
				description="Our component-based system empowers you to quickly create new pages and iterate on existing
				ones. As a result, your developers can focus on building your unique value proposition while you manage the website."
			/>
			<TextImageSection
				isLast
				eyebrow="Security"
				image={(
					<StaticImage
						src={security}
						layout="constrained"
						placeholder="blurred"
						objectFit="contain"
						quality={90}
						alt=""
					/>
				)}
				title="Stop worrying about bugs and security"
				description="While you’re focused on the content itself, our system in the background prevents the
				deployment of critical bugs. It has next-to-nothing vulnerabilities with an easily reversible version history."
			/>
		</SectionWrapper>

	);
};

export default WebDevCoreBenefits;
