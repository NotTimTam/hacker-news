import { useState, useEffect } from "react";
const API_ENDPOINT = `https://hn.algolia.com/api/v1/`;

// query is the s=batman part.
export const useFetch = (query) => {
	const [loading, setLoading] = useState(true);
	const [articles, setArticles] = useState([]);

	// url is the variable that will take in the endpoint and the query.
	const fetchArticles = async (url) => {
		setLoading(true);

		try {
			const response = await fetch(url);
			const data = await response.json();

			setArticles(data.hits || data);

			setLoading(false);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		console.log(`${API_ENDPOINT}${query}`);
		fetchArticles(`${API_ENDPOINT}${query}`);
	}, [query]);

	return { loading, articles };
};
