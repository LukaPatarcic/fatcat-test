import React from 'react';

// Atoms
import {
	HamburgerMenuWrapper,
	HamburgerMenuBarTop,
	HamburgerMenuBarBottom,
	HamburgerMenuBarCenter,
} from './HamburgerMenu.atoms';

type HamburgerMenuProps = {
	isOpen: boolean;
	onChange: () => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isOpen, onChange }) => (
	<HamburgerMenuWrapper
		isOpen={isOpen}
		onClick={onChange}
	>
		<HamburgerMenuBarTop />
		<HamburgerMenuBarCenter />
		<HamburgerMenuBarBottom />
	</HamburgerMenuWrapper>
);
export default HamburgerMenu;
