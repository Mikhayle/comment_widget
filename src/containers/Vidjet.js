import  React from 'react';
import { connect } from 'react-redux';
import List from '../Components/List';
import Form from '../Components/Form';

import { addComment, deleteComment } from '../actions/index';

let Vidjet = (props) => {
	const { comments, addComment, deleteComment } = props;
	return (
			<div>
				<h1>Комментарии пользователей</h1>
				<List
						comments={comments}
						deleteComment={deleteComment}
				/>
				<Form
						addComment={addComment}
				/>
			</div>
	)
}

const mapStateToProps = (state) => {
	return {
		comments: state
	}
}

const mapDispatchToProps = (dispatch) => {
	return  {
		addComment: (author, text) => dispatch(addComment(author, text)),
		deleteComment: (id) => dispatch(deleteComment(id))
	}
}

Vidjet = connect(
		mapStateToProps,
		mapDispatchToProps
)(Vidjet);

export default Vidjet;