import React, { ChangeEventHandler, forwardRef, PropsWithChildren } from 'react';
import { DefaultTheme, CSSProp } from 'styled-components';

// Atoms
import {
	SwitchButton,
	SwitchWrapper,
	SwitchInnerWrapper,
	SwitchInput,
	SwitchText,
} from './Switch.atoms';

export type TSwitch = {
	backgroundColor?: keyof DefaultTheme['color'];
	textColor?: keyof DefaultTheme['textColor'];
	disabled?: boolean;
	id?: string;
	onChange: ChangeEventHandler<HTMLInputElement>;
	required?: boolean;
	useSameBackgroundColor?: boolean;
	value: boolean;
	beforeText?: string | React.ReactNode;
	afterText?: string | React.ReactNode;
	styled?: CSSProp;
}

const Switch = forwardRef<HTMLInputElement, PropsWithChildren<TSwitch>>((props, ref) => {
	const {
		backgroundColor,
		disabled,
		id,
		onChange,
		required,
		useSameBackgroundColor,
		value,
		beforeText,
		afterText,
		styled,
		textColor,
		...rest
	} = props;
	return (
		<SwitchWrapper>
			{beforeText && (<SwitchText selected={!value} textColor={textColor ?? 'black'}>{beforeText}</SwitchText>)}
			<SwitchInput
				id={id}
				ref={ref}
				checked={value}
				disabled={disabled}
				onChange={onChange}
				required={required}
				type="checkbox"
				{...rest}
			/>
			<SwitchInnerWrapper
				checked={value}
				useSameBackgroundColor={useSameBackgroundColor}
				backgroundColor={backgroundColor}
				disabled={disabled ?? false}
			>
				<SwitchButton />
			</SwitchInnerWrapper>
			{afterText && (<SwitchText selected={!!value} textColor={textColor ?? 'black'}>{afterText}</SwitchText>)}
		</SwitchWrapper>

	);
});

Switch.defaultProps = {
	backgroundColor: undefined,
	textColor: 'primary',
	disabled: false,
	id: undefined,
	required: false,
	useSameBackgroundColor: false,
	beforeText: null,
	afterText: null,
	styled: undefined,
};

export default Switch;
