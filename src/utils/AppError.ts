export class AppError {
	message: string;

	constructor(message: string) {
		this.message = message;
	}
}

export function handleError(
	error: any,
	defaultErrorMessage: string,
	action: (message: string) => void
) {
	if (error instanceof AppError) {
		action(error.message);
	} else {
		action(defaultErrorMessage);
		console.log(error);
	}
}
