import React, { useState, useRef } from "react";
import './styles/App.css';
import Counter from "./components/Counter";
import PostsList from './components/PostsList';

import PostForm from './components/PostForm';
import MySelect from "./components/UI/select/MySelect";

function App() {

	const [value, setValue] = useState('текс в инпуте');

	const [posts, setPosts] = useState([
		{ id: 1, title: "JS", description: "Язык программирования" },
		{ id: 2, title: "JS 2", description: "Язык программирования" },
		{ id: 3, title: "JS 3", description: "Язык программирования" },
	]);

	// Для контролируемого компонента
	// const [title, setTitle] = useState('');
	// const [description, setDescription] = useState('');
	// Для некотнролируемого компонента
	// const bodyInputRef = useRef()

	
	const createPost = (newPost) => {
		setPosts([...posts, newPost]);
	};

	// Получаем пост из дочернего компонента
	const removePost = (post) => {
		setPosts(posts.filter(p => p.id !== post.id))
	}
	


	return (
		<div className="App">
			

			<PostForm create={createPost} />
			<hr />
			<div>
				<MySelect
					dafaultValue="Сортировка"
					options={[
						{value: "title", name: "По названию"},
						{value: "description", name: "По описанию"},
					]}
				/>
			</div>
			{
				posts.length
					? <PostsList remove={removePost} posts={posts} title="Список постов 1" />
					: <h2 className="text-center">Посты не найдены</h2>
			}
			
			<hr />
			<Counter />
			<h2>{value}</h2>
			<input
				type="text"
				value={value}
				onChange={event => setValue(event.target.value)}
			/>
			<hr />

		</div>
	);
}

export default App;
