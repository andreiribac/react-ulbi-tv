import React, { useEffect, useState,} from 'react'
import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';

function PostIdPage() {
	const params = useParams();
	const [post, setPost] = useState({});
	const [comments, setComments] = useState([]);
	const [fetchPostById, isLoading, error] = useFetching(async (id) => {
		const response = await PostService.getById(id);
		setPost(response.data);
	});
	const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
		const response = await PostService.getCommentsByPostId(id)
		setComments(response.data);
	})

	useEffect(() => {
		fetchPostById(params.id);
		fetchComments(params.id)
	}, []);

	return (
		<div>
			<h2>Вы попали на страницу поста с ID = {params.id}</h2>
			{isLoading
				? <Loader />
				: <div>
					<div><h3>{post.id}. {post.title}</h3></div>
					<br/>
					<div>{post.body}</div>
					<br />
					<h3>Коментарии</h3>
					{isComLoading
						? <Loader />
						: <div>
							{comments.map(comm => 
								<div key={comm.id} style={{ marginTop: 25 }}>
									<h5>{comm.name}</h5>
									<div>{ comm.email}</div>
									<div>{ comm.body}</div>
								</div>
							)}
						</div>
					}
				</div>
			}
			
		</div>
	)
}

export default PostIdPage
