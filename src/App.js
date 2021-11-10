import React, { useEffect, useState } from 'react';
import './styles/App.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import About from "./pages/About";
import Posts from './pages/Posts';
import NavBar from './components/UI/NavBar/NavBar';
import Page404 from './components/UI/Page404/Page404';
import PostIdPage from './pages/PostIdPage';
import { privateRoutes, publicRoutes } from './router/routers';
import { AuthContext } from './context/context';
import AppRouter from './components/AppRouter';


function App() {
	const [isAuth, setIsAuth] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (localStorage.getItem('auth')) {
			setIsAuth(true);
		}
		setIsLoading(false);
	}, [])
	return (
		<AuthContext.Provider value={{
			isAuth,
			setIsAuth,
			isLoading,
		}}>
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
					<AppRouter/>


				</div>
			</BrowserRouter>
		</AuthContext.Provider>
	)
}

export default App;
