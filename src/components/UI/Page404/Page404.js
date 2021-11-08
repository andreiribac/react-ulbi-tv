import React from 'react';
import { Link, } from "react-router-dom";

function Page404() {
	return (
		<div>
			<h2>Нет такой страницы</h2>
			<p>вернитесь на <Link to='/'>главную</Link></p>
		</div>
	)
}

export default Page404
