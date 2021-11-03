import React, { useState,} from "react";

// Хук обработки идикатора загрузки, ошибки при загрузке
export const useFetching = (callback) => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');

	const fetching = async (...args) => {
		try {
			setIsLoading(true);
			await callback(...args)
		} catch (e) {
			setError(e.message);
		} finally {
			setIsLoading(false);
		}
	}

	return [fetching, isLoading, error]
};
