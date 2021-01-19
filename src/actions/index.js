import shortid from 'shortid';


export const addComment = (author, text) => {
	return {
		type: 'ADD_COMMENT',
		id: shortid.generate(),
		author,
		text
	}
}

export const deleteComment = (id) => {
	return {
		type: 'DELETE_COMMENT',
		id
	}
}
