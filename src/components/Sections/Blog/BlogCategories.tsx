import React from 'react';
import { OnChangeValue } from 'react-select';
import { Link as GatsbyLink, navigate } from 'gatsby';

// Atoms
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { Wrapper } from 'fatcat-ui-library/components/Atoms/Wrapper';
import { Button } from 'fatcat-ui-library/components/Atoms/Button';

// Molecules
import Section from 'fatcat-ui-library/components/Molecules/Section';
import Select from '../../Molecules/Form/Select';

// Types
import { TContentfulSlugTitle } from '../../../utils/types';

interface BlogCategoriesProps {
	categories: TContentfulSlugTitle[];
	activeSlug: string;
}

const BlogCategories: React.FC<BlogCategoriesProps> = (props) => {
	const {
		categories,
		activeSlug,
	} = props;

	const handleSelect = async (newValue: OnChangeValue<TContentfulSlugTitle, false>) => {
		if (!newValue) return;
		const { slug } = newValue;
		if (slug === 'all') {
			await navigate('/blog/');
		} else {
			await navigate(`/blog/category/${slug}/`);
		}
	};

	return (
		<Section
			as="div"
			padding={['t168', 'b40']}
			tablet={[
				{
					padding: ['t0', 'b24'],
				},
			]}
		>
			<Wrapper
				as="nav"
				aria-label="Blog post categories navigation"
				hide="largeTablet"
			>
				<Flex
					as="ul"
					gap="8px"
					wrap
				>
					{categories.map(cat => (
						<li
							key={cat.slug}
						>
							<Button
								as={GatsbyLink}
								variant={cat.slug === activeSlug ? 'primary' : 'ghost'}
								buttonColor={cat.slug === activeSlug ? 'primaryPurple' : 'ghostBlack'}
								size="nav"
								to={cat.slug === 'all' ? '/blog' : `/blog/category/${cat.slug}/`}
							>
								{cat.title}
							</Button>
						</li>
					))}
				</Flex>
			</Wrapper>
			<Wrapper
				show="largeTablet"
			>
				<Select<TContentfulSlugTitle, false>
					onChange={handleSelect}
					defaultValue={categories.find(c => c.slug === activeSlug)}
					isSearchable={false}
					options={categories}
					getOptionLabel={v => v.title}
					getOptionValue={v => v.slug}
				/>
			</Wrapper>
		</Section>
	);
};

export default BlogCategories;
