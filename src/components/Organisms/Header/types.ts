export type THeaderLinks = Record<string, {
	text: string;
	url?: string;
	id?: string;
	subLinks?: Record<string, {
		text: string;
		url: string;
		description: string;
		icon: string;
		subLinks?: Record<string, {
			text: string;
			url: string;
			icon: string;
		}>;
	}>;
}>;
