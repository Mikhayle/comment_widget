import React from 'react';

const Form = (props) => {
	const { addComment } = props;

	let authorValue = ``;
	let textValue = ``;

	return (
			<form onSubmit={event => {
				event.preventDefault();
				let author = document.querySelector(`.name`);
				let text = document.querySelector(`.new-comment`);
				addComment(authorValue, textValue);
				author.value=``;
				text.value=``;
			}}>
				<label>Имя автора
					<input
							type="text"
							placeholder="Имя автора"
							className="name"
							required
							onChange={event => {
								authorValue=event.target.value
							}}
					/>
				</label>
				<label>
				<textarea
						type="text"
						placeholder="Введите текст комментария"
						className="new-comment"
						required
						onChange={event => {
							textValue=event.target.value
						}}
				>

				</textarea>
				</label>
				<input
						type="submit"
						className="submit"
						value="Отправить"
				/>
			</form>
	)
}

export default Form;