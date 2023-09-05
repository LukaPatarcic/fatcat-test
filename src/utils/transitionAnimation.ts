import { css, FlattenSimpleInterpolation } from 'styled-components';

// Small CSS helper for toggling different animations when active/inactive value changes.
// Used for example to play animation when modal is being hidden or shown to the user.
// Generally used with `useStateTransition()` hook (utils/hooks/useStateTransition.ts)
const transitionAnimation = (active: boolean, transitioning: boolean, activeAnimation: FlattenSimpleInterpolation, inactiveAnimation: FlattenSimpleInterpolation) => {
	if (!transitioning) {
		return css`
			animation: ${active ? activeAnimation : inactiveAnimation};
		`;
	}

	return css`
		animation: ${active ? inactiveAnimation : activeAnimation};
	`;
};

export default transitionAnimation;
