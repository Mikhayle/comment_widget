const comments = (state=[], action) => {
	const OPTIONS_OF_DATE = {year: `numeric`, month: `long`, day: `numeric`, hour: `numeric`, minute: `numeric`};

	const setLocaleState = (name) => {
		localStorage.setItem(`comments`, JSON.stringify(name));
	};
	const getLocaleState = (name) => {
		return JSON.parse(localStorage.getItem(name));
	};
	const getDate = () => {
		return new Date().toLocaleString(`ru`, OPTIONS_OF_DATE);
	};

	const {type, id, author, text} = action;

	switch (type) {
		case 'ADD_COMMENT':
			let commentState = getLocaleState(`comments`) !== null ? getLocaleState(`comments`) : [];
			const newComment = {
				id,
				author,
				text,
				datetime: getDate()
			}
			commentState.push(newComment);
			setLocaleState(commentState);
			return [
					...state,
					newComment
				]

		case 'DELETE_COMMENT':
			let newState = state.filter(comment => comment.id !== id);
			setLocaleState(newState);
			return [
					...newState
			]

		default:
			return state;
	}
}

export default comments;

