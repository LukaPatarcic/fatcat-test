/**
 * Generates a specified quantity of unique random numbers within a given range.
 *
 * @param {number} n - The quantity of unique random numbers to generate.
 * @param {number} max - The maximum value that a generated number can have.
 * @returns {number[]} An array of unique random numbers.
 * @throws Will throw an error if max is smaller than n.
 */
export function choose(n: number, max: number): number[] {
	if (max < n) {
		throw new Error(`Max should be equal or greater than n for unique numbers.\n
		Provided values: max: ${max}, n: ${n}
		`);
	}

	const set: Set<number> = new Set();
	while (set.size < n) {
		const randomNumber = Math.floor(Math.random() * (max + 1));
		set.add(randomNumber);
	}

	return Array.from(set);
}

export function shuffle<T = []>(array: T[]) {
	const toShuffle = [...array];
	for (let i = toShuffle.length - 1; i > 0; i -= 1) {
		const j = Math.floor(Math.random() * (i + 1));
		[toShuffle[i], toShuffle[j]] = [toShuffle[j], toShuffle[i]];
	}
	return toShuffle;
}
