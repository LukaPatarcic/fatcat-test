export enum TrackLabel {
	LINKEDIN_SHARE = 'linkedin-share',
	FB_SHARE = 'fb-share',
	TWITTER_SHARE = 'twitter-share',
	GET_IN_TOUCH = 'Get in touch',
	CONTACT_US = 'Contact us',
	CONTACT_US_NAVIGATION_MENU = 'Contact us (from navigation menu)',
	CONTACT_US_HEADER = 'Contact us (from header)',
	SUBMIT = 'Submit',
	SEND_MESSAGE = 'Send message',
	SCALE_YOUR_TEAM = 'Scale your team',
	BUILD_YOUR_PRODUCT = 'Build your product',
	ABOUT_US = 'About us',
	CHECK_AVAILABILITY_AND_RATES = 'Check availability and rates',
	GET_A_QUOTE = 'Get a quote',
}

export enum TrackAction {
	SHARE_BUTTON_CLICK = 'share-button-click',
	CTA_BUTTON_CLICK = 'cta-button-click',
	FORM_SUBMIT_CONTACT_FORM = 'fcc_contact_form_submitted',
}

function gtagEvent(action: TrackAction, label: TrackLabel, category: string) {
	// @ts-ignore
	if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
		// @ts-ignore
		window.gtag('event', action, {
			event_category: category,
			event_label: label,
		});
	}
}

export function trackAnalytic(action: TrackAction, label: TrackLabel, category: string): void {
	gtagEvent(action, label, category);
}
