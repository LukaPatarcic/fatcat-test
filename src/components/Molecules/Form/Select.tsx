import React, { useMemo } from 'react';
import BaseSelect, {
	Props as BaseSelectProps,
	StylesConfig,
	components,
	DropdownIndicatorProps,
	GroupBase,
} from 'react-select';
import { useTheme } from 'styled-components';

// Assets
import ArrowDown from '../../../assets/images/svg-inline/arrow-down.svg';

type SelectProps<
	Option = unknown,
	IsMulti extends boolean = boolean,
	Group extends GroupBase<Option
> = GroupBase<Option>> = BaseSelectProps<Option, IsMulti, Group>

// @TODO: adjust styles

const DropdownIndicator: React.FC<DropdownIndicatorProps> = (props) => {
	const {
		isFocused,
	} = props;
	const theme = useTheme();

	// @TODO: color changing doesn't work
	const circleArrow = useMemo(() => (
		<ArrowDown
			// @ts-ignore
			height="21"
			// @ts-ignore
			fill={isFocused ? theme.textColor.primary : theme.textColor.black}
		/>
	), [isFocused, theme.textColor.black, theme.textColor.primary]);

	return (
		<components.DropdownIndicator {...props}>
			{circleArrow}
		</components.DropdownIndicator>
	);
};

const Select = <
	Option = unknown,
	IsMulti extends boolean = boolean,
	Group extends GroupBase<Option> = GroupBase<Option>
>(props: SelectProps<Option, IsMulti, Group>) => {
	const theme = useTheme();

	const customStyles: StylesConfig<Option, IsMulti, Group> = {
		control: (styles, { isFocused }) => ({
			...styles,
			fontFamily: theme.fontFamily.main,
			fontWeight: theme.fontWeight.medium,
			borderColor: isFocused ? theme.color.primary : theme.color.gray20, // if control is focused then border will be purple else "#CCCED5"
			color: theme.textColor.black,
			borderRadius: 8,
			boxShadow: 'none',
			padding: 8,
			minHeight: 'initial',
			':hover': { ...styles[':hover'], borderColor: theme.color.primary },
		}),
		option: (styles, { isFocused, isSelected }) => {
			return {
				...styles,
				fontFamily: 'Stolzl',
				fontWeight: 500,
				color: isSelected ? theme.textColor.purple : theme.textColor.black,
				padding: 8,
				margin: 8,
				borderRadius: 4,
				width: 'calc(100% - 16px)',
				cursor: 'pointer',
				backgroundColor: isSelected ? theme.backgroundColor.cream : undefined,
				// ':active': {
				// 	...styles[':active'],
				// 	backgroundColor: '#424242',
				// },
			};
		},
		singleValue: styles => ({
			...styles,
			fontFamily: 'Stolzl',
			fontWeight: 500,
			color: theme.textColor.black,
		}),
	};

	return (
		<BaseSelect
			styles={customStyles}
			// This is set so that the menu on the bottom doesn't overflow the
			// parent container (Hero Section), there is another prop: menuPlacement
			// that is used to correct this behaviour, but it doesn't work right now
			// (but in react-select) this is why maxMenuHeight is used instead.
			// @TODO: replace this with "menuPlacement" in the future.
			maxMenuHeight={150}
			components={{
				// @ts-ignore
				DropdownIndicator,
				IndicatorSeparator: () => null,
			}}
			{...props}
		/>
	);
};

export default Select;
