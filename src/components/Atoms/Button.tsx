import React, { ReactElement } from 'react';
import { Link } from 'gatsby';

// Assets
import CircleArrow from '../../assets/images/svg-inline/circle-arrow.svg';

// Atoms
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { Button as ButtonBase } from 'fatcat-ui-library/components/Atoms/Button';

// Types
import { PolymorphicComponent } from 'fatcat-ui-library/utils/polymorphic-component';
import { ButtonProps } from 'fatcat-ui-library/components/Atoms/Button/Button';
import { css } from 'styled-components';

interface IconButtonProps {
	text: string | ReactElement;
}

// @TODO: fix TS error on line 27

const Button: PolymorphicComponent<ButtonProps, IconButtonProps> = (props) => {
	const {
		text,
		...buttonProps
	} = props;

	return (
		// @ts-ignore
		<ButtonBase
			as={Link}
			size="small"
			{...buttonProps}
			styled={css`
				${({ theme }) => theme.media.mobile} {
					width: 100%;
				}
			`}
		>
			<Flex
				display="inline-flex"
				alignItems="center"
				justifyContent="center"
				gap="10px"
				fontWeight="medium"
			>
				{text}
				<CircleArrow />
			</Flex>
		</ButtonBase>
	);
};

export default Button;
