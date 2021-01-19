import  React from 'react';

const List = (props) => {
	const { comments, deleteComment } = props;
	return(
		<ul>
			{
				comments.map( comment => {
					const {id, author, text, datetime} = comment;
					return (
						<li key={id}>
							<p className="author">
								{author}
								<span
										className="delete"
										onClick={() => {
											deleteComment(id);
										}}
								> </span>
							</p>
							<p className="text">{text}</p>
							<p className="datetime">{datetime}</p>
						</li>
					)
				})
			}
		</ul>
	)
}

export default List;