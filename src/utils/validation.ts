const MAX_ALLOWED_FILE_SIZE = 1_048_576;
const ALLOWED_FILE_TYPE = 'application/pdf';

export function validateFile(file: File | null) {
	if (file) {
		if (file.size > MAX_ALLOWED_FILE_SIZE) {
			return 'File too large (up to 1 MB)';
		}
		if (file.type !== ALLOWED_FILE_TYPE) {
			return 'Incorrect file type (PDF only)';
		}
	} else {
		return 'This field is required';
	}

	return true;
}
