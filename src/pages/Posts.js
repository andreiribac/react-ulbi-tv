import React, { useState, useEffect, useRef } from "react";
import PostsList from '../components/PostsList';
import PostForm from '../components/PostForm';
import MySelect from "../components/UI/select/MySelect";

import Counter from "../components/Counter";
import InputValue from "../components/InputValue";
import MyInput from "../components/UI/input/MyInput";
import PostFilter from '../components/PostFilter';
import MyModal from "../components/UI/MyModal/MyModal";
import MyButton from '../components/UI/button/MyButton';
import { usePosts } from '../hooks/usePosts';
import PostService from '../API/PostService';
import Loader from "../components/UI/Loader/Loader";
import { useFetching } from '../hooks/useFetching';
import { getPageCount, getPagesArray } from '../utils/pages';
import Pagination from "../components/UI/pagination/Pagination";
import { useObserver } from '../hooks/useObserver';

function Posts() {
	const [posts, setPosts] = useState([]);
	const [filter, setFilter] = useState({ sort: '', query: '' });
	const [modal, setModal] = useState(false);
	// Создаем состояние куда будем помещать общее количество постов
	const [totalPages, setTotalPages] = useState(0);
	// Для лимита и номера странци создаем отдельное состояние
	const [limit, setLimit] = useState(10);
	const [page, setPage] = useState(1);

	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query,);
	// const [isPostsLoading, setIsPostsLoading] = useState(false);

	const lastElement = useRef();



	// Это хук, который предоставляет часто используемый функционал
	// Именно - обработку индикации загрузки и обработку ошибки какого-то
	// Запроса на получение данныйх
	// При этом он возвращет нам массив из 3 элементов
	// И этими элементами внутри любого компонента мы можем управлять как хотим
	const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
		const response = await PostService.getAll(limit, page);
		setPosts([...posts, ...response.data]);
		const totalCount = response.headers['x-total-count'];
		setTotalPages(getPageCount(totalCount, limit))
	});

	// useEffect(() => {
	// 	if (isPostsLoading) return;
	// 	if (observer.current) observer.current.disconnect();
	// 	let callback = function (entries, observer) {
	// 		if (entries[0].isIntersecting && page < totalPages) {
	// 			console.log(page);
	// 			setPage(page + 1);
	// 		}
			
	// 	};
	// 	observer.current = new IntersectionObserver(callback);
	// 	observer.current.observe(lastElement.current)
	// }, [isPostsLoading]);

	useObserver(lastElement, page < totalPages, isPostsLoading, () => {
		setPage(page + 1);
	});

	useEffect(() => {
		fetchPosts(limit, page)
	}, [limit, page]);

	const createPost = (newPost) => {
		setPosts([...posts, newPost]);
		setModal(false);
	};

	// // Работаем с сервером получаем JSON
	// async function fetchPosts() {
	// 	setIsPostsLoading(true);
	// 	setTimeout(async () => {

	// 		setIsPostsLoading(false);
	// 	 }, 1000);

	// }

	// Получаем пост из дочернего компонента
	const removePost = (post) => {
		setPosts(posts.filter(p => p.id !== post.id))
	}

	// Создаем функцию которая будет изменять номер страницы 
	const changePage = (page) => {
		setPage(page);
		// fetchPosts(limit, page);
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
		<div className="Posts">
			{/* <MyButton onClick={fetchPosts}>get posts</MyButton> */}
			<MyModal visible={modal} setVisible={setModal}>
				<h3 className='text-center'>Добавьте пост</h3>
				<PostForm create={createPost} />
			</MyModal>
			<hr />
			<MyButton onClick={() => setModal(true)}>
				Создать пост
			</MyButton>
			<hr />
			<PostFilter
				filter={filter}
				setFilter={setFilter}
			/>
			<MySelect
				value={limit}
				onChange={value => setLimit(value)}
				defaultValue="Кол-во элементов на странице"
				options={[
					{ value: 5, name: '5' },
					{ value: 10, name: '10' },
					{ value: 25, name: '25' },
					{ value: -1, name: 'Показать все' },
				]}
			/>
			{postError &&
				<h2 className='text-center'>Произошла ошибка ${postError}</h2>
			}
			{isPostsLoading && <Loader />}
			<PostsList
				remove={removePost}
				posts={sortedAndSearchedPosts}
				title="Список постов"
			/>
			<div ref={lastElement} style={{height: 20, background: "red"}}></div>
			<hr />
			<Pagination
				page={page}
				changePage={changePage}
				totalPages={totalPages}
			/>
			<hr />

			{/* <hr />
			<Counter />
			<hr />
			<InputValue />
			<hr /> */}



		</div>
	);
}

export default Posts;

