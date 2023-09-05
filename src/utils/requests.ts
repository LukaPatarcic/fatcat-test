import axios from 'axios';

// Helpers
import {
	trackAnalytic,
	TrackAction,
	TrackLabel,
} from './gtag';
import { getUrl } from './helpers';

// @TODO: extract URLS to env

interface SendMessageParams {
	name: string;
	email: string;
	location: string;
	message?: string;
	position?: string;
	phoneNumber?: string;
	linkedIn?: string;
	jobName?: string;
	subject?: string;
	talent?: boolean;
	checked?: boolean;
	file?: File;
}

export const sendMessage = async (data: SendMessageParams) => {
	const formData = new FormData();
	formData.set('name', data.name);
	formData.set('email', data.email);
	formData.set('location', data.location);

	if (data.message) formData.set('message', data.message);
	if (data.position) formData.set('position', data.position);
	if (data.phoneNumber) formData.set('number', data.phoneNumber);
	if (data.linkedIn) formData.set('linkedin', data.linkedIn);
	if (data.jobName) formData.set('jobName', data.jobName);
	if (data.subject) formData.set('subject', data.subject);
	if (data.talent) formData.set('talent', data.talent.toString());
	if (data.checked) formData.set('checked', data.checked.toString());
	if (data.file) formData.set('file', data.file);

	await axios.post('https://fatcatarena.com/mailer/send-message', formData);

	trackAnalytic(TrackAction.FORM_SUBMIT_CONTACT_FORM, TrackLabel.SEND_MESSAGE, getUrl());
};

interface ApplyForAJobParams {
	name: string;
	email: string;
	phoneNumber: string;
	message: string;
	linkedin: string;
	cv: File | null;
	salary: string;
	jobId: number;
	jobName: string;
	showNet: boolean;
	agree: boolean;
}

export const applyForAJob = async (data: ApplyForAJobParams) => {
	const {
		name,
		email,
		phoneNumber,
		agree,
		message,
		linkedin,
		cv,
		salary,
		showNet,
		jobId,
		jobName,
	} = data;

	const [fName, lName] = name.split(' ');

	const formData = new FormData();
	formData.set('fname', fName);
	formData.set('lname', lName ?? 'Not entered');
	formData.set('email', email);
	formData.set('jobId', jobId.toString());
	formData.set('jobName', jobName);
	formData.set('number', phoneNumber);
	formData.set('linkedin', linkedin);
	formData.set('agreedTerms', agree.toString());
	formData.set('message', message);
	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	formData.set('file', cv!);
	if (salary) {
		formData.set('salary', salary);
		// @TODO: fix this typo below
		formData.set('saleryType', showNet ? 'Net' : 'Gross');
	}
	await axios.post('https://fatcatarena.com/mailer/talents', formData);

	trackAnalytic(TrackAction.CTA_BUTTON_CLICK, TrackLabel.SUBMIT, getUrl());
};
