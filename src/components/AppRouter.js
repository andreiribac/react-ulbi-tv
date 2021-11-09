import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { AuthContext } from '../context/context';
import { privateRoutes, publicRoutes } from '../router/routers';
import Loader from './UI/Loader/Loader';


function AppRouter() {
	const { isAuth, isLoading } = useContext(AuthContext);

	if (isLoading) {
		return <Loader />
	}

	return (
		<>
			{
				isAuth
					? <Routes>
						{
							privateRoutes.map(route =>
								<Route
									key={route.path}
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
									key={route.path}
									path={route.path}
									element={route.component}
									exact={route.exact}
								/>
							)
						}
					</Routes>
			}
		</>
	)
}

export default AppRouter
