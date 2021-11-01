import React, {useState} from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

function PostForm({create}) {

	const [post, setPost] = useState({
		title: '',
		body: '',
	});

	const addNewPost = (e) => {
		e.preventDefault();
		// setPosts([...posts, { ...post, id: Date.now() }]);
		const newPost = {
			...post, id: Date.now(),
		}
		create(newPost)
		setPost({
			title: '',
			body: '',
		});
	}

	return (
		<form>
			{/* Управляемый компонент */}
			<MyInput
				value={post.title}
				onChange={e => setPost({ ...post, title: e.target.value })}
				type="text"
				placeholder="Навзание поста"
			/>
			<MyInput
				value={post.body}
				onChange={e => setPost({ ...post, body: e.target.value })}
				type="text"
				placeholder="Навзание поста"
			/>

			{/* Неуправляемый | Некотнролируемый компонент */}
			{/* <MyInput
					ref={bodyInputRef}
					type="text"
					placeholder="Описание поста"
				/> */}
			{/* <input ref={bodyInputRef} type="text"/> */}
			<MyButton onClick={addNewPost} >создать пост</MyButton>
		</form>
	)
}

export default PostForm;
