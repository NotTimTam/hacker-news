import React, { useContext, useReducer, useEffect } from "react";
import { reducer } from "./reducer";

const ArticleContext = React.createContext();

const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?";

const defaultState = {
	loading: true,
	hits: [],
	nbPages: 0,
	page: 0,
	query: "react",
};

export const ArticleProvider = ({ children }) => {
	// const [query, setQuery] = useState("react");
	// const [currentPage, setCurrentPage] = useState(1);
	// const { loading, articles } = useFetch(`search?query=${query}&`);
	const [state, dispatch] = useReducer(reducer, defaultState);

	const handleSearch = (query) => {
		dispatch({ type: "SET_QUERY", payload: query });
	};

	const fetchArticles = async (url) => {
		dispatch({ type: "SET_LOADING" });

		try {
			const response = await fetch(`${API_ENDPOINT}${url}`);
			const data = await response.json();

			dispatch({ type: "SET_HITS", payload: data });
		} catch (error) {
			console.error(error);
		}
	};
	useEffect(() => {
		fetchArticles(`page=${state.page}&query=${state.query}&`);
	}, [state.page, state.query]);

	const nextPage = () => {
		dispatch({ type: "SET_PAGE", payload: state.page + 1 });
	};

	const previousPage = () => {
		dispatch({ type: "SET_PAGE", payload: state.page - 1 });
	};

	const removeArticle = (objectID) => {
		dispatch({ type: "REMOVE_ARTICLE", payload: objectID });
	};

	return (
		<ArticleContext.Provider
			value={{
				...state,
				nextPage,
				previousPage,
				handleSearch,
				removeArticle,
			}}
		>
			{children}
		</ArticleContext.Provider>
	);
};

export const useArticleContext = () => {
	return useContext(ArticleContext);
};
