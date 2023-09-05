import * as React from 'react';
import { HeadFC } from 'gatsby';

// Assets
import metaImage from '../assets/images/meta/privacy-policy.png';

// Atoms
import { Heading } from 'fatcat-ui-library/components/Atoms/Heading';
import { Paragraph } from 'fatcat-ui-library/components/Atoms/Paragraph';
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { Text } from 'fatcat-ui-library/components/Atoms/Text';
import { UlList } from 'fatcat-ui-library/components/Atoms/UlList';
import { Link } from 'fatcat-ui-library/components/Atoms/Link';

// Molecules
import HeadMeta from '../components/Molecules/HeadMeta/HeadMeta';
import Section from 'fatcat-ui-library/components/Molecules/Section/Section';

const PrivacyPolicy: React.FC = () => {
	return (
		<main>
			<Section>
				<Flex
					direction="column"
					gap="20px"
					marginTop="s52"
					marginBottom="s192"
					tablet={[{ marginBottom: 's80' }]}
				>
					<Heading
						as="h2"
						textColor="purple"
					>
						Privacy Policy
					</Heading>
					<Paragraph>
						Last updated: 01/08/2023
					</Paragraph>
					<Heading as="h3">Overview</Heading>
					<Paragraph>
						FatCat Coders (“FatCat Coders”, “we”, “us” or “our”) is committed to protecting the privacy of personal information (i.e., any information relating to an identified
						or identifiable natural person) who visit the fatcatcoders.com website (the “Site”).
						Amendments to this Privacy Policy will be posted to the Site and will be effective when posted.
						Your continued use of the Site following the posting of any amendment to this Privacy Policy shall constitute your acceptance of such amendment.
					</Paragraph>
					<Heading as="h3">Your Consent</Heading>
					<Paragraph>
						You might fill out a contact form on the Site and provide your name, email address, as well as any additional information you may provide us in the message box.
						By providing personal information to us, you voluntarily consent to the collection, use and disclosure of such personal information as specified in this Privacy Policy.
						Without such information, we could not provide you with our services. The legal basis for our processing of personal information is primarily that the processing is necessary
						for providing our services or answer to your request (i.e. for the performance of a contract between you and us), and that the processing is carried out in our legitimate
						interests, which are further explained below. Without limiting the foregoing, we may on occasion ask you to consent when we collect, use, or disclose your personal information
						in specific circumstances.
					</Paragraph>
					<Heading as="h3">Information We Collect About You</Heading>
					<Paragraph>
						We collect several types of information:
					</Paragraph>
					<Paragraph>
						<Text fontWeight="semiBold">Personal Data. </Text>
						We collect information by which you may be personally identified, such as your name, email address, postal address or phone number, through
						the contact form on our Site
						(“personal data”).
						This information is only collected when you voluntarily provide it and it is necessary to contact you.
					</Paragraph>
					<Paragraph>
						<Text fontWeight="semiBold">Usage Data. </Text>
						We also collect information about your use of the Site. This information includes things such as your operating system, your access times,
						the location from which you accessed the Site, the time you spent on the Site, and the pages on our Site that you visited (“usage data”). We collect this
						information using cookies and Google Analytics.
					</Paragraph>
					<Paragraph>
						A cookie is a small file placed on the hard drive of your computer.
					</Paragraph>
					<Paragraph>
						Like many sites, we use &quot;cookies&quot; to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
						However, if you do not accept cookies, you may not be able to use some portions of our Site.
					</Paragraph>
					<Heading as="h3">Use of Personal Information</Heading>
					<Paragraph>
						We may use or disclose your personal information for the following purposes:
					</Paragraph>
					<UlList bulletColor="primary">
						<li>To fulfil or meet the reason you provided the information.</li>
						<li>To provide the Site to you and to other users.</li>
						<li>
							To improve the quality of the Site through polls, surveys and other similar feedback gathering activities conducted by FatCat
							Coders and/or third parties.
						</li>
						<li>To communicate with you, including providing you with information about our services.</li>
						<li>To monitor traffic patterns and gauge the popularity of different features of the Site.</li>
						<li>To enforce this Privacy Policy.</li>
						<li>To protect against fraud or error, and to respond to claims of any violation of our rights or those of any third parties.</li>
						<li>To respond to your requests for customer service.</li>
						<li>To protect the rights, property or personal safety of you, us, our users and the public.</li>
					</UlList>
					<Heading as="h3">Age of Consent</Heading>
					<Paragraph>
						We do not knowingly provide the Site to and will not knowingly collect the personal information from anyone under the age of consent.
					</Paragraph>
					<Paragraph>
						If you live in a country in the EU/EEA, you must be at least 16 years old to use the Site or such greater age is required in your country to register for or use the Site.
					</Paragraph>
					<Paragraph>
						If you live in any other country except those in the EU/EEA, you must be at least 13 years old to use the Site or such greater age required in your country to
						register for or use the Site.
					</Paragraph>
					<Paragraph>
						If you are under 13, do not use or provide any information to, on or through the Site, including your name, address, telephone number, email address, or any
						screen name or user name you may use. In addition to being of the minimum required age to use the Site under applicable law, if you are not old enough to have authority
						to agree to our Privacy Policy in your country, your parent or guardian must agree to our Privacy Policy on your behalf. If we learn we have collected or received
						personal information from a child under 13 without verification of parental consent, we will delete that information. If you believe we might have any information
						from or about a child under 13 or if you have any concerns about your child’s personal information, please contact us at the email in the “Contact Us” section below.
					</Paragraph>
					<Heading as="h3">Links</Heading>
					<Paragraph>
						The Site may contain links to other sites and we are not responsible for the privacy practices or the content of such sites.
						We encourage you to read the privacy policy of linked sites.
						Their privacy policies and practices differ from our policies and practices.
					</Paragraph>
					<Heading as="h3">Security</Heading>
					<Paragraph>
						We will strive to prevent unauthorized access to your personal information, however, no data transmission over the Internet,
						by wireless device or over the air is guaranteed to be 100% secure. We have implemented and maintained reasonable security procedures and practices
						(based on the nature of the information we collect) to protect
						that information from unauthorized disclosure. We will continue to enhance security procedures as new technologies and procedures become available.
						We take steps designed to ensure that only those employees who need access to your personal information to fulfil their employment duties will have access to it.
					</Paragraph>
					<Paragraph>
						Please remember that you control what personal information you provide while using the Site. Ultimately, you are responsible for maintaining the secrecy of your
						identification and/or any personal information in your possession for the use of the Site. Always be careful and responsible regarding your personal information.
						We cannot guarantee or assume any responsibility for verifying, the accuracy of the personal information or other information provided by any third party.
						You release us from any and all liability in connection with the use of such personal information or other information of others.
					</Paragraph>
					<Heading as="h3">Changes to this Policy</Heading>
					<Paragraph>
						We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy periodically.
						Your continued use of the Service after we post any modifications to the Privacy Policy on this page will constitute your acknowledgement of the modifications and your
						consent to abide and be bound by the modified Privacy Policy.
					</Paragraph>
					<Paragraph>
						If we make any material changes to this Privacy Policy, we will notify you either through the email address you have provided us or by placing
						a prominent notice on our website.
					</Paragraph>
					<Heading as="h3">Contact us</Heading>
					<Paragraph>
						If you have any questions or comments about this Privacy Policy or your personal information please contact us at
						{' '}
						<Link
							to="mailto:hello@fatcatcoders.com"
						>
							hello@fatcatcoders.com
						</Link>
						.
					</Paragraph>
				</Flex>
			</Section>
		</main>
	);
};

export const Head: HeadFC = (props) => {
	return (
		<HeadMeta
			meta={{
				pageTitle: 'Privacy Policy | FatCat Coders',
				metaDescription: 'FatCat Coders takes the privacy of all visitors to the website very seriously. This policy covers all data that is shared by a visitor. Click here to read.',
				metaImage,
			}}
		/>
	);
};

export default PrivacyPolicy;
