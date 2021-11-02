import React, { useState, useRef, useMemo } from "react";
import './styles/App.css';
import PostsList from './components/PostsList';
import PostForm from './components/PostForm';
import MySelect from "./components/UI/select/MySelect";

import Counter from "./components/Counter";
import InputValue from "./components/InputValue";
import MyInput from "./components/UI/input/MyInput";
import PostFilter from './components/PostFilter';
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from './components/UI/button/MyButton';

function App() {

	const [posts, setPosts] = useState([
		{ id: 1, title: "(2) | Java", body: "(3) | Язык программирования" },
		{ id: 2, title: "(3) | JS", body: "(1) | Язык программирования" },
		{ id: 3, title: "(1) | Php", body: "(2) | Язык программирования" },
	]);

	const [filter, setFilter] = useState({ sort: '', query: '' });
	// const [selectedSort, setSelectedSort] = useState('');
	// const [searchQuery, setSearchQuery] = useState('');

	const [modal, setModal] = useState(false);

	// function getSortedPosts() {
	// 	console.log('Work function');
	// 	if (selectedSort) {
	// 		return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
	// 	}
	// 	return posts;
	// }

	// const sortedPosts = getSortedPosts();
	const sortedPosts = useMemo(() => {
		// console.log('Work function');
		if (filter.sort) {
			return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
		}
		return posts;
	}, [filter.sort, posts]);

	const sortedAndSearchedPosts = useMemo(() => {
		return sortedPosts.filter(post => post.title.includes(filter.query.toLowerCase()))
	}, [filter.query, sortedPosts])

	// Для контролируемого компонента
	// const [title, setTitle] = useState('');
	// const [description, setDescription] = useState('');
	// Для некотнролируемого компонента
	// const bodyInputRef = useRef()


	const createPost = (newPost) => {
		setPosts([...posts, newPost]);
		setModal(false);
	};

	// Получаем пост из дочернего компонента
	const removePost = (post) => {
		setPosts(posts.filter(p => p.id !== post.id))
	}

	// JavaScript метод sort() позволяет отсортировать массив путём 
	// преобразования его элементов в строки и сравнения этих строк в 
	// порядке следования кодовых символов Unicode
	// 	(сортирует массив по алфавиту).

	// Метод localeCompare() возвращает число, указывающее,
	// должна ли данная строка находиться до,
	// после или в том же самом месте, что и строка,
	// переданная через параметр, при сортировке этих строк.
	// Чаще всего используется для упорядочивания массивов:
	// ['a', 'b', 'c', 'd'].sort((a, b) => a.localeCompare(b))
	// const sortPosts = (sort) => {
	// 	setSelectedSort(sort);
	// 	// console.log(sort);
	// 	// setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));

	// }

	return (
		<div className="App">
			<MyModal visible={modal} setVisible={setModal}>
				<h3 className='text-center'>Добавьте пост</h3>
				<PostForm create={createPost} />
			</MyModal>
			<hr/>
			<MyButton onClick={() => setModal(true)}>
				Создать пост
			</MyButton>
			<hr/>
			<PostFilter
				filter={filter}
				setFilter={setFilter}
			/>
			<PostsList
				remove={removePost}
				posts={sortedAndSearchedPosts}
				title="Список постов 1"
			/>

			{/* <hr />
			<Counter />
			<hr />
			<InputValue />
			<hr /> */}



		</div>
	);
}

export default App;
