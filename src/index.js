import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ArticleProvider } from "./util/context";

import "./styles/main.css";

ReactDOM.render(
	<React.StrictMode>
		<ArticleProvider>
			<App />
		</ArticleProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
