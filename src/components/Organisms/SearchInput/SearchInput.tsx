import React, { useState, useRef } from 'react';
import { Link as GatsbyLink, navigate } from 'gatsby';
import { useLocation } from '@reach/router';
import { useTheme } from 'styled-components';

// Atoms
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { InputField } from 'fatcat-ui-library/components/Atoms/Input';
import { Text } from 'fatcat-ui-library/components/Atoms/Text';
import { DropdownWrapper, Checkbox, Button } from './SearchInput.atom';

// Utils
import { useClickOutsideElement } from '../../../utils/hooks/useClickOutsideElement';

type SearchInputProps = {
	tags: string[];
	items: string[];
}

const SearchInput: React.FC<SearchInputProps> = (props) => {
	/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
	const { tags, items } = props;
	const theme = useTheme();
	const { search: searhParams } = useLocation();
	const ref = useRef<HTMLDivElement>(null);
	const buttonRef = useRef<HTMLButtonElement>(null);

	const [search, setSearch] = useState('');
	const [isOpen, setIsOpen] = useState(false);

	useClickOutsideElement((e: MouseEvent) => {
		if (buttonRef.current && !buttonRef.current.contains(e.target as Node | null)) {
			setIsOpen(false);
		}
	}, ref);

	const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			const urlSearchParams = new URLSearchParams(searhParams);
			if (search) {
				urlSearchParams.set('search', search.toLowerCase());
			} else {
				urlSearchParams.delete('search');
			}
			urlSearchParams.delete('page');
			navigate(`?${urlSearchParams.toString()}`);
		}
	};

	const handleClearFilters = () => {
		setSearch('');
	};

	const getSelectedValue = (name: string): boolean => {
		const urlSearchParams = new URLSearchParams(searhParams);
		const paramsTags = urlSearchParams.get('tags');
		if (paramsTags && paramsTags.includes(name.toLowerCase())) {
			return true;
		}
		return false;
	};

	const handleItemSelected = (name: string) => (e: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => {
		if (e.type === 'keydown' && !['Enter', 'Space'].includes((e as React.KeyboardEvent<HTMLDivElement>).key)) {
			return;
		}
		e.preventDefault();
		const tag = name.toLowerCase();
		const urlSearchParams = new URLSearchParams(searhParams);
		let paramsTags = urlSearchParams.get('tags') || '';
		// look for params and set new value
		if (!paramsTags.includes(tag)) {
			paramsTags = paramsTags ? `${paramsTags} ${tag}` : tag;
		} else {
			paramsTags = paramsTags.replace(tag, '').trim();
		}
		// handle params
		if (paramsTags) {
			urlSearchParams.set('tags', paramsTags);
		} else {
			urlSearchParams.delete('tags');
		}
		urlSearchParams.delete('page');
		navigate(`?${urlSearchParams.toString()}`);
	};

	return (
		<Flex
			paddingBottom="s56"
			gap="6px"
			justifyContent="center"
			alignItems="center"
		>
			<Flex
				direction="column"
				maxW="400px"
				position="relative"
			>
				<Flex
					border={`2px solid ${theme.color.grey200}`}
					borderRadius="100px"
					overflow="hidden"
				>
					<Button
						ref={buttonRef}
						onClick={() => { setIsOpen(value => !value); }}
					>
						-- Tags --
					</Button>
					{isOpen && (
						<DropdownWrapper
							ref={ref}
							isOpen={isOpen}
						>
							{tags.map(tag => (
								<Checkbox
									key={tag}
									tabIndex={0}
									value={getSelectedValue(tag)}
									onClick={handleItemSelected(tag)}
									onKeyDown={handleItemSelected(tag)}
								>
									{tag}
									<div>
										<svg
											fill="#F9F9F9"
											height="9"
											viewBox="0 0 12 9"
											width="12"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path d="M10.02.296a.93.93 0 0 1 1.361 1.27L4.868 8.543a.93.93 0 0 1-1.286.072L.325 5.824a.93.93 0 0 1 1.211-1.413l2.58 2.211L10.02.296Z" />
										</svg>
									</div>
								</Checkbox>
							))}
						</DropdownWrapper>
					)}
					<InputField
						value={search}
						marginBottom="s0"
						paddingY="s8"
						placeholder="Search"
						border="none"
						onChange={(e) => { setSearch(e.target.value); }}
						onKeyDown={handleSearch}
						onFocus={(e) => { setIsOpen(false); }}
					/>
				</Flex>
			</Flex>
			<Text
				as={GatsbyLink}
				textColor="primary"
				transition="all 0.3s ease-in-out"
				hover={['pointer', 'underline']}
				fontWeight="semiBold"
				to="/blog/"
				onClick={handleClearFilters}
			>
				Clear
			</Text>
		</Flex>
	);
};

export default SearchInput;
