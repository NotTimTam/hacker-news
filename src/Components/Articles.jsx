import { React, useState } from "react";
import { useArticleContext } from "../util/context";

const Articles = () => {
	const { hits, loading, removeArticle } = useArticleContext();

	// const [articleCollection, setArticleCollection] = useState(
	// 	articles[currentPage]
	// );

	// console.log(articleCollection);

	// const removeArticle = (id) => {
	// 	setArticleCollection(
	// 		articleCollection.filter((article) => article.objectID !== id)
	// 	);
	// };

	if (loading) {
		return <div className="loading"></div>;
	}

	return (
		<>
			<section className="articles">
				{hits.map((article) => {
					const {
						title,
						url,
						author,
						points,
						num_comments,
						objectID,
					} = article;

					return (
						<article key={objectID}>
							<div className="article-info">
								<h4 className="title">{title}</h4>
								<p>
									{points} by {author} | {num_comments}{" "}
									comments
								</p>
							</div>
							<div className="buttons">
								<a href={url}>Read More</a>
								<button
									className="remove-article"
									onClick={() => removeArticle(objectID)}
								>
									I don't want to see this
								</button>
							</div>
						</article>
					);
				})}
			</section>
		</>
	);
};

export default Articles;
