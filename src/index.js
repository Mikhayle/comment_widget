import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Vidjet from './containers/Vidjet';
import comments from './reducers/comments';
import './css/main.css';

const getLocaleState = (name) => {
	return JSON.parse(localStorage.getItem(name));
}

const initialState = getLocaleState(`comments`) !== null ? getLocaleState(`comments`) : [];

const store = createStore(comments, initialState);

ReactDOM.render(
		<Vidjet store={store} />,
		document.querySelector(`.fixed-container`)
)