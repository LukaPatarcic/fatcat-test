import React, {
	ForwardedRef,
	useEffect,
	useState,
} from 'react';

// Atoms
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { NavLink } from './ServicesNavigation.atoms';

// Hooks
import useScrollDirection from '../../../../../../utils/hooks/useScrollDirection';
import useScrollPosition from '../../../../../../utils/hooks/useScrollPosition';

interface ServicesNavigationProps {
    activeIndex?: number;
	buttons: readonly {
		title: string;
		line: string;
		id: string;
	}[];
}

const backgrounds = [
	'mainYellow',
	'mainRed',
	'mainYellow',
	'mainGreen',
] as const;

const ServicesNavigation = React.forwardRef<HTMLDivElement, ServicesNavigationProps>((
	props,
	ref: ForwardedRef<HTMLDivElement>,
) => {
	const {
		activeIndex,
		buttons,
	} = props;

	const [dirChanged, setDirChanged] = useState<number>(0);
	const direction = useScrollDirection();
	const top = useScrollPosition();
	const directionThreshold = 300;
	const threshold = 100;

	useEffect(() => {
		setDirChanged(top);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [direction]);

	// This condition is set in "Header.tsx"
	const isHeaderHidden =
		(top > threshold && direction === 'down') ||
		(direction === 'up' && dirChanged - top < directionThreshold && top > threshold);

	return (
		<Flex
			as="nav"
			aria-label="Services navigation"
			id="services-navigation"
			gap="56px"
			justifyContent="center"
			alignItems="center"
			position="sticky"
			backgroundColor={backgrounds[activeIndex ?? 0]}
			// When we are scrolling up the header is visible so the top offset needs
			// to be greater than 0 so that navigation doesn't overlap the header
			top={!isHeaderHidden ? '78px' : '0'}
			transition="top 300ms ease-in-out, background-color 300ms ease-in-out"
			paddingY="s24"
			largeTablet={[
				{
					gap: '16px',
					top: !isHeaderHidden ? '76px' : '0',
				},
			]}
			hide="tablet"
			ref={ref}
		>
			{buttons.map((button, index) => (
				<NavLink
					key={button.title}
					href={`#${button.id}`}
					active={activeIndex === index}
					lineImg={button.line}
				>
					{button.title}
				</NavLink>
			))}
		</Flex>
	);
});

ServicesNavigation.defaultProps = {
	activeIndex: undefined,
};

export default ServicesNavigation;
