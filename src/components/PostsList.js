import React from "react";
import PostItem from "./PostItem";

function PostsList({posts, title, remove}) {
	if (!posts.length) {
		return (
			<h2 className="text-center">Посты не найдены</h2>
		)
	}
	return (
		<>
			<h2 className="text-center">{title}</h2>
			{
				posts.map((post, index) =>
					<PostItem remove={remove} number={index + 1} post={post} key={post.id} />
				)
			}
			
		</>
	);
}

export default PostsList;
