import React from 'react';

// Atoms
import { Heading } from 'fatcat-ui-library/components/Atoms/Heading';
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { Text } from 'fatcat-ui-library/components/Atoms/Text';
import { Paragraph } from 'fatcat-ui-library/components/Atoms/Paragraph';
import { Wrapper } from 'fatcat-ui-library/components/Atoms/Wrapper';
import { Table } from 'fatcat-ui-library/components/Atoms/Table';
import { AccordionWrapper } from './EmployerOfRecordAddons.atoms';

// Molecules
import Section from '../../../Molecules/Section';
import AccordionEoR from '../../../Molecules/Accordions/EoR/AccordionEoR';

interface Row {
	title: string;
	description: string;
	price: string;
	priceDescription?: string;
	isPriceNotPerMonth?: boolean;
}

const addons: Row[] = [
	{
		title: 'Private Health Insurance',
		description: 'Most IT companies have this benefit, which is commonly a major plus when candidates consider offers.',
		price: '€80',
		priceDescription: 'Family members can be added on demand.',
	},
	{
		title: 'Access to FatCat Coders Office and Events',
		description: 'Cozy and quiet office space with coffee and snacks. Social events such as board game nights, breakfast, and parties.',
		price: '€120',
	},
	{
		title: 'Team Buildings',
		description: 'One three-day team building in a remote location in nature or a hotel, and one single day team building in Belgrade.',
		price: '€50',
	},
	{
		title: 'Performance Reviews',
		description: 'We work with you to define key competencies for each role, after which we coordinate performance reviews and share feedback.',
		price: '€100',
	},
	{
		title: 'Happiness Monitoring',
		description: 'Our seasoned HR experts monitor employee happiness, share regular reports and escalate if they notice red flags.',
		price: '€100',
	},
	{
		title: 'Employee Departure Insurance',
		description: 'If, for any reason, one of your employees decides to quit, the FatCat team will find a replacement with the same skill level.',
		price: '15% of Gross Salary',
		isPriceNotPerMonth: true,
	},
	{
		title: 'Work Equipment',
		description: 'Supply your employees with the work computer and equipment you choose through FatCat.',
		price: 'Custom',
		isPriceNotPerMonth: true,
	},
];

const EmployerOfRecordAddons: React.FC = (props) => {
	return (
		<Section clearTopPadding>
			<Flex
				id="add-ons"
				direction="column"
				alignItems="center"
			>
				<Flex
					direction="column"
					alignItems="center"
					justifyContent="center"
					marginBottom="s80"
					tablet={[{
						marginBottom: 's32',
					}]}
					mobile={[{
						alignItems: 'flex-start',
					}]}
				>
					<Text
						as="p"
						textSize="h5"
						marginBottom="s16"
						tablet={[{
							textSize: 'h5Mobile',
						}]}
						textColor="purple"

					>
						Add-ons
					</Text>
					<Heading
						as="h2"
						textAlign="center"
						maxW="70%"
						marginBottom="s16"
						tablet={[{ maxW: '100%'	}]}
						mobile={[{ textAlign: 'left' }]}
					>
						Boost employee happiness with add-on options we provide.
					</Heading>
					<Paragraph
						maxW="80%"
						textAlign="center"
						tablet={[{
							maxW: '100%',
						}]}
						mobile={[{ textAlign: 'left' }]}
					>
						You can offer your employees additional optional benefits to make yourself a more attractive employer and increase your employee retention rate.
					</Paragraph>
				</Flex>
				<Wrapper
					position="relative"
				>
					<Table
						hide="largeTablet"
					>
						<thead>
							<tr>
								<th>Benefit</th>
								<th>Monthly pricing</th>
							</tr>
						</thead>
						<tbody>
							{addons.map((addon, index) => (
							// eslint-disable-next-line react/no-array-index-key
								<tr key={index}>
									<td>
										<Heading
											as="h4"
											marginBottom="s10"
										>
											{addon.title}
										</Heading>
										<Paragraph
											textSize="paragraphAddons"
										>
											{addon.description}
										</Paragraph>
									</td>
									<td>
										<Paragraph
											textSize="h4"
											marginBottom="s10"
											mobile={[
												{
													textSize: 'h4Mobile',
												},
											]}
										>
											{addon.price}
										</Paragraph>
										<Paragraph
											textSize="paragraphAddons"
										>
											{addon.priceDescription}
										</Paragraph>
									</td>
								</tr>
							))}
						</tbody>
					</Table>
					<Wrapper
						position="absolute"
						backgroundColor="cream"
						borderRadius="8px"
						zIndex="-1"
						top="62px"
						bottom="0"
						left="0"
						right="0"
					/>
				</Wrapper>
				<AccordionWrapper>
					<Heading
						as="h3"
						textSize="h4"
						mobile={[
							{
								textSize: 'h4Mobile',
							},
						]}
						paddingY="s16"
						paddingX="s32"
						backgroundColor="primary"
						textColor="white"
						borderRadius="8px 8px 0 0"
					>
						Benefit
					</Heading>
					{addons.map((addon, index) => (
						<Wrapper
							key={addon.title}
							backgroundColor="white"
							borderRadius={index === addons.length - 1 ? '0px 0px 8px 8px' : undefined}
						>
							<AccordionEoR
								title={(
									<Flex
										direction="column"
										gap="8px"
									>
										<Heading as="h4">
											{addon.title}
										</Heading>
										<Heading
											as="h4"
										>
											{addon.price}
											{!addon.isPriceNotPerMonth && (
												<Text
													fontWeight="normal"
													fontSize="s14"
												>
													/month
												</Text>
											)}
										</Heading>
									</Flex>
								)}
								isLast={index === addons.length - 1}
								content={addon.description}
							/>
						</Wrapper>
					))}
				</AccordionWrapper>
			</Flex>
		</Section>
	);
};

export default EmployerOfRecordAddons;
