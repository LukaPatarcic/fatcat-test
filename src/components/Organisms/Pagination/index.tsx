import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

// Atoms
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { Link } from 'fatcat-ui-library/components/Atoms/Link';

// Assets
import CircleArrow from '../../../assets/images/svg-inline/circle-arrow.svg';

interface PaginationProps {
	baseUrl: string;
	currentPage: number;
	numPages: number;
}

const Pagination: React.FC<PaginationProps> = (props) => {
	const {
		currentPage,
		numPages,
		baseUrl,
	} = props;

	const pageUrl = (value: 'next' | 'back' | number) => {
		// const urlSearchParams = new URLSearchParams(search);
		let newPage = currentPage;
		switch (value) {
			case 'next': {
				newPage += 1;
				break;
			}
			case 'back': {
				newPage -= 1;
				break;
			}
			default: {
				newPage = +value;
			}
		}
		if (newPage && newPage !== 1) {
			return `${baseUrl}/${newPage}`;
		}
		return `${baseUrl}`;
	};

	const renderNavButton = (dir: 'next' | 'back') => {
		const disabled = dir === 'back' ? currentPage === 1 : currentPage === numPages;
		const ariaLabel = dir === 'back' ? 'Go to previous page' : 'Go to next page';
		return (
			<Link
				as={GatsbyLink}
				variant="noStyle"
				to={pageUrl(dir)}
				key={`go-${dir}`}
				disabled={disabled}
				pointerEvents={disabled ? 'none' : undefined}
				aria-disabled={disabled}
				textColor={disabled ? 'gray40' : 'primary'}
				transform={dir === 'back' ? 'scaleX(-1)' : undefined}
				aria-label={ariaLabel}
				title={ariaLabel}
			>
				<CircleArrow
				// @ts-ignore
					width="32px"
					height="32px"
				/>
			</Link>
		);
	};

	const renderNavigation = () => {
		const pagination = [];
		let start = currentPage - 2 > 0 ? currentPage - 2 : 1;
		if (start > numPages - 4) {
			start = numPages - 4 > 0 ? numPages - 4 : 1;
		}
		const end = start + 4 < numPages ? start + 4 : numPages;
		if (numPages > 5) {
			// if (numPages > 10) {
			// 	pagination.push(<Button key="goToFirst" onClick={handlePageChange('1')} disabled={currentPage === 1}><DoubleArrow /></Button>);
			// }
			pagination.push(renderNavButton('back'));
		}

		for (let i = start; i <= end; i += 1) {
			pagination.push(
				(
					<Link
						key={i}
						as={GatsbyLink}
						textColor={i === currentPage ? 'purple' : 'primary'}
						fontWeight="medium"
						fontSize="s20"
						textAlign="center"
						minW="32px"
						to={pageUrl(i)}
					>
						{i}
					</Link>
				)
			);
		}

		if (numPages > 5) {
			pagination.push(renderNavButton('next'));
			// if (numPages > 10) {
			// 	pagination.push(<Button key="goToLast" rotated onClick={handlePageChange(numPages.toString())} disabled={currentPage === numPages}><DoubleArrow /></Button>);
			// }
		}
		return pagination;
	};

	return numPages > 1 ? (
		<Flex
			gap="6px"
			justifyContent="flex-end"
			alignItems="center"
			marginTop="s40"
		>
			{renderNavigation()}
		</Flex>
	) : null;
};

export default Pagination;
