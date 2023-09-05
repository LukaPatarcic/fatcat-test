import * as React from 'react';
import { HeadFC } from 'gatsby';

// Assets
import image404 from '../assets/images/404-img.svg';

// Atoms
import { Heading } from 'fatcat-ui-library/components/Atoms/Heading';
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { Paragraph } from 'fatcat-ui-library/components/Atoms/Paragraph';
import { Image } from 'fatcat-ui-library/components/Atoms/Image';
import Button from '../components/Atoms/Button';

// Molecules
import HeadMeta from '../components/Molecules/HeadMeta/HeadMeta';
import Section from 'fatcat-ui-library/components/Molecules/Section';

const NotFoundPage: React.FC = () => {
	return (
		<main>
			<Flex
				backgroundColor="cream"
			>
				<Section>
					<Flex
						direction="column"
						padding={['t120', 'b80']}
						justifyContent="center"
						alignItems="center"
						tablet={[{ padding: ['b40'] }]}
					>
						<Image
							src={image404}
							maxW="740px"
							maxH="290px"
							alt="404 image"
							mobile={[{ h: '133px' }]}
						/>
						<Heading
							as="h2"
							margin={['b32', 't72']}
							textAlign="center"
							mobile={[{ margin: ['t40', 'b24'] }]}
						>
							Oops!
						</Heading>
						<Paragraph
							margin={['b40']}
							textAlign="center"
							mobile={[{ margin: ['b32'] }]}
						>
							Page not found. Please check the URL or navigate
							{' '}
							<br />
							back to our homepage.
						</Paragraph>
						<Button
							to="/"
							text="Go home"
						/>
					</Flex>
				</Section>
			</Flex>
		</main>
	);
};

export default NotFoundPage;

export const Head: HeadFC = (props) => {
	return (
		<HeadMeta
			meta={{
				pageTitle: 'FatCat Coders: 404 page',
				metaDescription: 'This is 404 page',
				metaImage: image404,
			}}
		/>
	);
};
