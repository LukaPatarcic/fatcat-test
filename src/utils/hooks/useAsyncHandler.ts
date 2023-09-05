import { useCallback, useState } from 'react';

/**
 * `useAsyncHandler` is a React hook for handling asynchronous operations.
 * It automates the management of loading, success, and error states.
 *
 *
 * @param handler - The async function to be handled by the hook. It should accept any
 * number of arguments of types specified by Args and return a promise.
 *
 * @returns {Object} - An object with four properties:
 *
 * `loading` - A boolean representing the current loading state of the async operation.
 * When the operation is ongoing, `loading` is `true`. It's `false` otherwise.
 *
 * `success` - A boolean indicating whether the last operation was successful. It is `false`
 * if no operation has been made yet or if the last operation failed. It is `true` if the
 * last operation completed successfully.
 *
 * `error` - The error thrown by the last operation, if any. If no operation has been made
 * yet or if the last operation completed successfully, `error` is `undefined`.
 *
 * `execute` - A function to trigger the async operation. It accepts the same arguments as
 * the handler function and returns a promise that resolves when the operation completes.
 *
 * @example
 * const asyncHandler = async (arg1, arg2) => {
 *  // Some async operation here.
 * };
 *
 * const MyComponent = () => {
 *  const { loading, success, error, execute } = useAsyncHandler(asyncHandler);
 *
 *  // Rest of your component logic here.
 * };
 */
function useAsyncHandler<
	/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
	const Args extends any[]
>(handler: (...args: Args) => Promise<void>) {
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState<unknown | undefined>(undefined);
	const execute = useCallback(async (...args: Args) => {
		setLoading(true);
		setSuccess(false);
		setError(undefined);

		try {
			await handler(...args);
			setSuccess(true);
		} catch (err) {
			setError(err);
		} finally {
			setLoading(false);
		}
	}, [handler]);

	return {
		loading,
		success,
		error,
		execute,
	};
}

export default useAsyncHandler;
