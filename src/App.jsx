import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Root from "./Components/Root/Root";

const Home = lazy(() => import("../pages/home/Home"));
const NF404 = lazy(() => import("../pages/notFound/NF404"));
const Register = lazy(() => import("../pages/register/Register"));

function App() {
	return (
		<Routes>
			<Route path={"/"} element={<Root />}>
				<Route index element={<Home />} />
				<Route path="register" element={<Register />} exact />
			</Route>
			<Route path="*" element={<NF404 />} exact>
				<Route path="404" element={<NF404 />} exact />
			</Route>
		</Routes>
	);
}

export default App;
