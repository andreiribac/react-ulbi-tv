import React from "react";
import PostItem from "./PostItem";

function PostsList({posts, title, remove}) {

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
