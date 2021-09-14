export const reducer = (state, action) => {
	switch (action.type) {
		case "SET_QUERY": {
			return {
				...state,
				query: action.payload,
			};
		}

		case "SET_LOADING":
			return {
				...state,
				loading: true,
			};

		case "SET_HITS":
			return {
				...state,
				loading: false,
				hits: action.payload.hits,
				nbPages: action.payload.nbPages,
			};

		case "SET_PAGE":
			if (
				action.payload + 1 <= state.nbPages &&
				action.payload + 1 >= 1
			) {
				return {
					...state,
					page: action.payload,
				};
			} else {
				return state;
			}

		case "REMOVE_ARTICLE":
			return {
				...state,
				hits: state.hits.filter(
					(hit) => hit.objectID !== action.payload
				),
			};

		// case "SET_PAGE_COUNT":
		// 	return {
		// 		...state,
		// 		pageCount: action.payload,
		// 	};

		default:
			console.error(`${action.type} does not exist`);
	}
};
