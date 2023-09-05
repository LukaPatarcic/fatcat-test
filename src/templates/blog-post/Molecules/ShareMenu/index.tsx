import React from 'react';
import {
	FacebookShareButton,
	LinkedinShareButton,
	TwitterShareButton,
} from 'react-share';

// Assets
import Facebook from '../../../../assets/images/svg-inline/social/facebook.svg';
import LinkedIn from '../../../../assets/images/svg-inline/social/linkedin.svg';
import Twitter from '../../../../assets/images/svg-inline/social/twitter.svg';

// Atoms
import { TFlex } from 'fatcat-ui-library/components/Atoms/Flex';
import { ShareMenuWrapper } from './atoms';

// Utils
import { getUrl } from '../../../../utils/helpers';
import {
	trackAnalytic,
	TrackAction,
	TrackLabel,
} from '../../../../utils/gtag';

type ShareMenuProps = TFlex

const ShareMenu: React.FC<ShareMenuProps> = (props) => {
	return (
		<ShareMenuWrapper
			{...props}
		>
			<FacebookShareButton
				url={getUrl()}
				aria-label="Share on Facebook."
			>
				<Facebook
					// @ts-ignore
					onClick={() => trackAnalytic(TrackAction.SHARE_BUTTON_CLICK, TrackLabel.FB_SHARE, getUrl())}
				/>
			</FacebookShareButton>
			<LinkedinShareButton
				url={getUrl()}
				aria-label="Share on Linkedin."
			>
				<LinkedIn
					// @ts-ignore
					onClick={() => trackAnalytic(TrackAction.SHARE_BUTTON_CLICK, TrackLabel.LINKEDIN_SHARE, getUrl())}
				/>
			</LinkedinShareButton>
			<TwitterShareButton
				url={getUrl()}
				aria-label="Share on Twitter."
			>
				<Twitter
					// @ts-ignore
					onClick={() => trackAnalytic(TrackAction.SHARE_BUTTON_CLICK, TrackLabel.TWITTER_SHARE, getUrl())}
				/>
			</TwitterShareButton>
		</ShareMenuWrapper>
	);
};

export default ShareMenu;
