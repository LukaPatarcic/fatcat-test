import React from 'react';
import { BsFillClockFill } from '@react-icons/all-files/bs/BsFillClockFill';

// Types
import { TAuthor } from '../../../utils/types';

// Atoms
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { Text } from 'fatcat-ui-library/components/Atoms/Text';
import { Icon } from 'fatcat-ui-library/components/Atoms/Icon';

// Molecules
import Avatar from 'fatcat-ui-library/components/Molecules/Avatar';

// Contentful
import ContentfulImage from '../../../contentful/ContentfulImage';

const Author: React.FC<TAuthor & { published?: string, readingTime?: string }> = (props) => {
	const {
		// city,
		image,
		name,
		position,
		readingTime,
	} = props;
	return (
		<Flex
			gap="12px"
			alignItems="center"
		>
			<Avatar image={<ContentfulImage {...image} />} size="40px" />
			<Flex direction="column" w="fit-content">
				<Flex
					gap="12px"
					alignItems="center"
					fontSize="s14"
					fontWeight="semiBold"
				>
					<Text>{name}</Text>
				</Flex>
				<Flex
					gap="12px"
					alignItems="center"
					fontSize="s12"
					// textColor="grey"
				>
					{position && <Text>{position}</Text>}
					{position && readingTime && <Text fontWeight="bold"> · </Text>}
					{readingTime && (
						<>
							<Icon as={BsFillClockFill} />
							<Text>{readingTime}</Text>
						</>
					)}
				</Flex>
			</Flex>
		</Flex>
	);
};

Author.defaultProps = {
	published: undefined,
	readingTime: undefined,
};

export default Author;
