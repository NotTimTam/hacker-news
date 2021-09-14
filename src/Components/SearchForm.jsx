import React from "react";
import { useArticleContext } from "../util/context";

const SearchForm = () => {
	const { query, handleSearch, previousPage, nextPage, page, nbPages } =
		useArticleContext();

	return (
		<>
			<form
				onSubmit={(e) => {
					e.preventDefault();
				}}
				className="search-form"
			>
				<h2>Search Hacker News</h2>
				<input
					type="text"
					className="form-input"
					value={query}
					onChange={(e) => handleSearch(e.target.value)}
				/>
			</form>

			<section className="pages">
				<button className="pages-button" onClick={previousPage}>
					-
				</button>
				<p className="currentPage">
					{page + 1} of {nbPages}
				</p>
				<button className="pages-button" onClick={nextPage}>
					+
				</button>
			</section>
		</>
	);
};

export default SearchForm;
