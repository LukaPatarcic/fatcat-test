import * as React from 'react';
import { PopupModal } from 'react-calendly';

// Assets
import email from '../../../assets/images/contact-us/email.svg';
import address from '../../../assets/images/contact-us/address.svg';
import triangles from '../../../assets/images/contact-us/triangles.svg';

// Atoms
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { Heading } from 'fatcat-ui-library/components/Atoms/Heading';
import { Paragraph } from 'fatcat-ui-library/components/Atoms/Paragraph';
import Button from '../../../components/Atoms/Button';
import { Image } from 'fatcat-ui-library/components/Atoms/Image';
import { Wrapper } from 'fatcat-ui-library/components/Atoms/Wrapper';

// Molecules
import Section from 'fatcat-ui-library/components/Molecules/Section';
import IconList from '../../Molecules/IconList';
import ContactUsForm from './Molecules/ContactUsForm';
import { useState } from 'react';

const listItems = [
	{
		icon: address,
		text: 'Subotička 23/22, Belgrade, Serbia',
		alt: 'Company address',
		link: 'https://g.page/fatcatcoders?share',
	},
	{
		icon: email,
		text: 'hello@fatcatcoders.com',
		alt: 'Company email',
		link: 'mailto:hello@fatcatcoders.com',
	},
];

const ContactUs = () => {
	const [open, setOpen] = useState(false);

	return (
		<Section
			as="div"
			backgroundColor="cream"
			position="relative"
		>
			<Flex
				alignItems="center"
				padding={['t48', 'b148']}
				scale
			>
				<Flex
					gap="70px"
					largeTablet={[
						'column', {
							gap: '32px',
						}]}
				>
					<Flex
						direction="column"
						flexBasis="50%"
					>
						<Heading
							as="h1"
							marginTop="s96"
							marginBottom="s16"
							largeTablet={[{ marginTop: 's0' }]}
						>
							Let’s work together
						</Heading>
						<Paragraph
							marginBottom="s48"
							largeTablet={[{ marginBottom: 's40' }]}
						>
							We’d love to connect and discuss how we can help you enhance your business.
						</Paragraph>
						<Button
							text="Book a call"
							as="button"
							alignSelf="flex-start"
							marginBottom="s32"
							largeTablet={[{ marginBottom: 's0' }]}
							onClick={() => setOpen(true)}
						/>
						<PopupModal
							url="https://calendly.com/jelena-kovacevic/45min"
							onModalClose={() => setOpen(false)}
							open={open}
							rootElement={(typeof document !== 'undefined' && document.getElementById('___gatsby')) as HTMLElement}
						/>
						<Wrapper
							as="address"
							marginTop="sauto"
							hide="largeTablet"
						>
							<IconList
								items={listItems}
								gap="24px"
								direction="column"
							/>
						</Wrapper>
					</Flex>
					<Flex
						direction="column"
						backgroundColor="white"
						padding="s56"
						borderRadius="8px"
						flexBasis="50%"
						largeTablet={[{
							paddingX: 's20',
							paddingY: 's32',
						}]}
					>
						<ContactUsForm />
						<Image
							hide="largeTablet"
							src={triangles}
							alt=""
							w="115px"
							position="absolute"
							bottom="0"
						/>
					</Flex>
					<Wrapper
						as="address"
						show="largeTablet"
					>
						<IconList
							direction="column"
							items={listItems}
							gap="24px"
						/>
					</Wrapper>
				</Flex>
			</Flex>
		</Section>
	);
};

export default ContactUs;
