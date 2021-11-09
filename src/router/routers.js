import About from "../pages/About";
import Posts from '../pages/Posts';
import PostIdPage from '../pages/PostIdPage';
import Page404 from '../components/UI/Page404/Page404';
import Login from "../pages/Login";

export const privateRoutes = [
	{path: '/', component: <Posts />, exact: true},
	{ path: '/about', component: <About name={"Andrei"}/>, exact: true,},
	{path: '/posts', component: <Posts />, exact: true},
	{path: '/posts/:id', component: <PostIdPage/>, exact: true},
	{path: '*', component: <Page404/>, exact: ''},
]

export const publicRoutes = [
	{path: '/login', component: <Login />, exact: true},
	{path: '/', component: <Login />, exact: true},
	{path: '/*', component: <Login />, exact: true},
]