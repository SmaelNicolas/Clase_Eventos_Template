import { useState } from "react";

export const useCount = (initial = 1, stock) => {
	const [count, setCount] = useState(initial);
	const [error, setError] = useState(false);

	const handleCount = (value) => {
		if (count + value < 1 || count + value > stock) {
			setError(true);
			return;
		}
		setCount((prev) => prev + value);
	};

	return { count, handleCount, error };
};
