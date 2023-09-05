import React from 'react';
import { PopupModal } from 'react-calendly';

// Atoms
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { Heading } from 'fatcat-ui-library/components/Atoms/Heading';
import { Paragraph } from 'fatcat-ui-library/components/Atoms/Paragraph';
import Button from '../Atoms/Button';

// Molecules
import Section from '../Molecules/Section';

// Organisms
import SendMessageForm from './Forms/SendMessageForm';

interface LetsWorkTogetherProps {
	location: string;
}

const LetsWorkTogether: React.FC<LetsWorkTogetherProps> = (props) => {
	const {
		location,
	} = props;

	const [open, setOpen] = React.useState<boolean>(false);

	return (
		<section id="lets-work-together">
			<Section
				as="div"
				backgroundColor="primary"
			>
				<Flex
					justifyContent="center"
					alignItems="center"
					gap="48px"
					largeTablet={['column']}
				>
					<Flex
						direction="column"
						alignItems="flex-start"
						largeTablet={[{ alignItems: 'center' }]}
						mobile={[{ alignItems: 'flex-start' }]}
					>
						<Heading
							as="h2"
							marginBottom="s16"
							textColor="white"
							largeTablet={[
								'textCenter',
							]}
							mobile={[{ textAlign: 'left' }]}
						>
							Let’s work together
						</Heading>
						<Paragraph
							marginBottom="s48"
							textColor="white"
							largeTablet={[
								'textCenter',
								{
									marginBottom: 's40',
								},
							]}
							mobile={[{ textAlign: 'left' }]}
						>
							Get in touch and let us know how we can help.
						</Paragraph>
						<Button
							as="button"
							text="Book a call"
							buttonColor="primaryLight"
							onClick={() => setOpen(true)}
						/>
						<PopupModal
							url="https://calendly.com/jelena-kovacevic/45min"
							onModalClose={() => setOpen(false)}
							open={open}
							rootElement={(typeof document !== 'undefined' && document.getElementById('___gatsby')) as HTMLElement}
						/>
					</Flex>
					<SendMessageForm
						location={location}
					/>
				</Flex>
			</Section>
		</section>
	);
};

export default LetsWorkTogether;
