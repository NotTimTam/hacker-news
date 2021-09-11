import React, { useState, useContext } from "react";
import { useFetch } from "./useFetch";

const ArticleContext = React.createContext();

export const ArticleProvider = ({ children }) => {
	const [query, setQuery] = useState("react");
	const { loading, articles } = useFetch(`search?query=${query}&`);

	return (
		<ArticleContext.Provider value={{ query, setQuery, loading, articles }}>
			{children}
		</ArticleContext.Provider>
	);
};

export const useArticleContext = () => {
	return useContext(ArticleContext);
};
