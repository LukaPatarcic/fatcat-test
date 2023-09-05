import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

// Types
import { TContentfulLink } from '../../utils/types';

// Utils
import { parseContentfulLink } from 'fatcat-ui-library/utils/contentful';

// Atoms
import { Button } from 'fatcat-ui-library/components/Atoms/Button';
import { Link } from 'fatcat-ui-library/components/Atoms/Link';

const ContentfulLink: React.FC<TContentfulLink> = (props) => {
	const parsedLink = parseContentfulLink(props);
	if (parsedLink.to.startsWith('/')) {
		parsedLink.as = GatsbyLink;
	}

	const {
		linkVariant,
		linkColor,
		buttonVariant,
		buttonColor,
		buttonSize,
		onChange,
	} = props;

	const linkProps = {
		as: parsedLink.as,
		to: parsedLink.as !== 'a' ? parsedLink.to : undefined,
		href: parsedLink.to,
		target: parsedLink.target,
		icon: parsedLink.icon,
	};

	if (buttonVariant) {
		return (
			<Button
				{...linkProps}
				variant={buttonVariant || 'primary'}
				buttonColor={buttonColor}
				onClick={onChange}
				size={buttonSize}
			>
				{parsedLink.title}
			</Button>
		);
	}

	return (
		<Link
			{...linkProps}
			variant={linkVariant || 'primary'}
			linkColor={linkColor}
			onClick={onChange}
		>
			{parsedLink.title}
		</Link>
	);
};
export default ContentfulLink;
