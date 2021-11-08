import React, { Fragment } from 'react';
import './styles/App.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import About from "./pages/About";
import Posts from './pages/Posts';
import NavBar from './components/UI/NavBar/NavBar';
import Page404 from './components/UI/Page404/Page404';


function App() {
	return (
		// <>
		// 	work

		// </>
		<BrowserRouter>
			<div className='App'>
				{/* <NavBar /> */}
				<Routes>
					<Route path="/" element={<NavBar />}>
						<Route index element={<Posts />} />
						<Route path="/about" element={
							<About name={"Andrei"} />
						} />
						<Route path="/posts" element={
							<Posts />
						} />
						<Route path="*" element={<Page404 />} />
					</Route>
				</Routes>

			</div>
		</BrowserRouter>
	)
}

export default App;
