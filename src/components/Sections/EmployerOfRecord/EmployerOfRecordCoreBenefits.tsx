import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

// Atoms
import { SectionWrapper } from '../../Atoms/SectionWrapper';
import { SecondaryHeading } from '../../Atoms/SecondaryHeading';

// Molecules
import TextImageSection from '../../Molecules/Sections/TextImageSection';
import Section from 'fatcat-ui-library/components/Molecules/Section';

// Static Assets
const easyHiring = '../../../assets/images/employer-of-record/core-benefits/easy-hiring.png';
const easyHiringMobile = '../../../assets/images/employer-of-record/core-benefits/easy-hiring-mobile.png';
const noMistakes = '../../../assets/images/employer-of-record/core-benefits/no-mistakes.png';
const noMistakesMobile = '../../../assets/images/employer-of-record/core-benefits/no-mistakes-mobile.png';
const costEffectiveness = '../../../assets/images/employer-of-record/core-benefits/cost-effectiveness.png';
const costEffectivenessMobile = '../../../assets/images/employer-of-record/core-benefits/cost-effectiveness-mobile.png';
const openTalentMarket = '../../../assets/images/employer-of-record/core-benefits/open-talent-market.png';
const openTalentMarketMobile = '../../../assets/images/employer-of-record/core-benefits/open-talent-market-mobile.png';
const satisfiedEmployees = '../../../assets/images/employer-of-record/core-benefits/satisfied-employees.png';
const satisfiedEmployeesMobile = '../../../assets/images/employer-of-record/core-benefits/satisfied-employees-mobile.png';

const EmployerOfRecordCoreBenefits: React.FC = () => {
	return (
		<SectionWrapper
			as="section"
			clearTopPadding
			clearBottomPadding
		>
			<Section
				as="div"
			>
				<SecondaryHeading>
					What you can get by using our Employer of Record service
				</SecondaryHeading>
			</Section>
			<TextImageSection
				isFirst
				eyebrow="Easy hiring"
				image={(
					<StaticImage
						src={easyHiring}
						layout="constrained"
						placeholder="blurred"
						objectFit="contain"
						quality={90}
						alt=""
					/>
				)}
				imageMobile={(
					<StaticImage
						src={easyHiringMobile}
						layout="constrained"
						placeholder="blurred"
						objectFit="contain"
						quality={90}
						alt=""
					/>
				)}
				title="Hire employees without an entity"
				description="EoR allows businesses to outsource administrative tasks
					such as payroll, benefits, and tax with holding to a third-party provider, while the employee works for you just like the rest of your team."
			/>
			<TextImageSection
				isImageLeft
				eyebrow="Cost-effectivness"
				image={(
					<StaticImage
						src={costEffectiveness}
						layout="constrained"
						placeholder="blurred"
						objectFit="contain"
						quality={90}
						alt=""
					/>
				)}
				imageMobile={(
					<StaticImage
						src={costEffectivenessMobile}
						layout="constrained"
						placeholder="blurred"
						objectFit="contain"
						quality={90}
						alt=""
					/>
				)}
				title="Cost Reduction and speed"
				description="Reduce the time you spend on setting up local payroll and paying your Serbian employees.
					We take care of everything, so you can focus on your business."
			/>
			<TextImageSection
				eyebrow="Open talent market"
				image={(
					<StaticImage
						src={openTalentMarket}
						layout="constrained"
						placeholder="blurred"
						objectFit="contain"
						quality={90}
						alt=""
					/>
				)}
				imageMobile={(
					<StaticImage
						src={openTalentMarketMobile}
						layout="constrained"
						placeholder="blurred"
						objectFit="contain"
						quality={90}
						alt=""
					/>
				)}
				title="Open a new talent market"
				description="Many people prefer full-time employment since it provides them with the
					security and protection of the Serbian labor laws, which are aligned with the European Union standards."
			/>
			<TextImageSection
				isImageLeft
				eyebrow="Satisfied employees"
				image={(
					<StaticImage
						src={satisfiedEmployees}
						layout="constrained"
						placeholder="blurred"
						objectFit="contain"
						quality={90}
						alt=""
					/>
				)}
				imageMobile={(
					<StaticImage
						src={satisfiedEmployeesMobile}
						layout="constrained"
						placeholder="blurred"
						objectFit="contain"
						quality={90}
						alt=""
					/>
				)}
				title="Localized benefits for your employees"
				description="Having a full-time contract with all local benefits could be a deal-breaker
					for some candidates. You don’t need to lose great talent anymore, since our EoR service helps you overcome this challenge."
			/>
			<TextImageSection
				isLast
				eyebrow="No mistakes"
				image={(
					<StaticImage
						src={noMistakes}
						layout="constrained"
						placeholder="blurred"
						objectFit="contain"
						quality={90}
						alt=""
					/>
				)}
				imageMobile={(
					<StaticImage
						src={noMistakesMobile}
						layout="constrained"
						placeholder="blurred"
						objectFit="contain"
						quality={90}
						alt=""
					/>
				)}
				title="Avoid expensive compliance mistakes"
				description="We take care of everything to ensure you’re compliant with local requirements
					including taxes, social security, minimum wage, termination requirements, and more."
			/>
		</SectionWrapper>
	);
};

export default EmployerOfRecordCoreBenefits;
