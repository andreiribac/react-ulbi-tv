import React, { Fragment } from 'react';
import './styles/App.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import About from "./pages/About";
import Posts from './pages/Posts';
import NavBar from './components/UI/NavBar/NavBar';
import Page404 from './components/UI/Page404/Page404';
import PostIdPage from './pages/PostIdPage';
import { privateRoutes, publicRoutes } from './router';


function App() {
	const isAuth = true;
	return (
		<BrowserRouter>
			<div className='App'>
				{/* <Routes>
					<Route path="/" element={<NavBar />}>
						<Route index element={<Posts />} />
						<Route path="/about" element={<About name={"Andrei"} />} />
						<Route exact path="/posts" element={<Posts />} />
						<Route exact path="/posts/:id" element={<PostIdPage />} />

						<Route path="*" element={<Page404 />} />
					</Route>
				</Routes> */}
				<NavBar />
				{
					isAuth
						? <Routes>
							{
								privateRoutes.map(route =>
									<Route
										path={route.path}
										element={route.component}
										exact={route.exact}
									/>
								)
							}
						</Routes>
						: <Routes>
							{
								publicRoutes.map(route =>
									<Route
										path={route.path}
										element={route.component}
										exact={route.exact}
									/>
								)
							}
						</Routes>
				}


			</div>
		</BrowserRouter>
	)
}

export default App;
