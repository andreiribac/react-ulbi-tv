import React from "react";
import PostItem from "./PostItem";
import {
	CSSTransition,
	TransitionGroup,
} from 'react-transition-group';

function PostsList({ posts, title, remove }) {
	if (!posts.length) {
		return (
			<h2 className="text-center">Посты не найдены</h2>
		)
	}
	return (
		<>
			<h2 className="text-center">{title}</h2>
			<TransitionGroup>
				{
					posts.map((post, index) =>
						<CSSTransition
							key={post.id}
							timeout={500}
							classNames="post"
						>
							<PostItem remove={remove} number={index + 1} post={post}  />
						</CSSTransition>
					)
				}
			</TransitionGroup>
		</>
	);
}

export default PostsList;
