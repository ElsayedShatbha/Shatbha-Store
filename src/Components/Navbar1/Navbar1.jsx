import "./navbar1.css";
import { useMediaQuery } from "react-responsive";
import { NavLink, useLocation, Link } from "react-router-dom";
// import { useLogout } from "../../hooks/useLogout";
import { useDataProvider } from "../../hooks/useDataProvider";
import PropagateLoader from "react-spinners/PropagateLoader";
import DropDown from "../DropDown/DropDown";
import { ReactComponent as SearchIcon } from "../../assets/icons/searchIcon.svg";
import { ReactComponent as Cart } from "../../assets/icons/cart.svg";
import { useState } from "react";

const Navbar1 = () => {
	const isLargeScreen = useMediaQuery({
		query: "(min-width: 950px)",
	});

	let activeStyle = "active-style";

	const { user } = useDataProvider();
	const { pathname } = useLocation();
	const isActive = ["/", "/home"].includes(pathname);
	const [hovered, setHovered] = useState(false);
	const [clicked, setClicked] = useState(false);
	// const { logout, loading } = useLogout();
	// if (loading) {
	// 	return (
	// 		<div className="is-page-loading">
	// 			<PropagateLoader color="#6600cc" />
	// 		</div>
	// 	);
	// } else {

	return (
		<>
			<nav className="navbar1 ">
				<div className="container navdiv navbar navbar-expand-lg">
					<Link to={0}>
						<img
							src="/colLogo.svg"
							alt="logo"
							style={{ aspectRatio: "16/6" }}
						></img>
					</Link>
					<ul className="links">
						<li className="link">
							<NavLink
								to="/"
								className={({ isActive }) =>
									isActive ? activeStyle : undefined
								}
							>
								الرئيسية
							</NavLink>
						</li>
						<li className="link">
							<NavLink
								to="/blogs"
								className={({ isActive }) =>
									isActive ? activeStyle : undefined
								}
							>
								تأسيس
							</NavLink>
						</li>
						<li className="link">
							<NavLink
								to="/lectures"
								className={({ isActive }) =>
									isActive ? activeStyle : undefined
								}
							>
								تشطيب
							</NavLink>
						</li>
						<li className="link">
							<NavLink
								to="/profile"
								className={({ isActive }) =>
									isActive ? activeStyle : undefined
								}
							>
								المتجر
							</NavLink>
						</li>
						<li className="link">
							<NavLink
								to="/profile"
								className={({ isActive }) =>
									isActive ? activeStyle : undefined
								}
							>
								حسابي
							</NavLink>
						</li>
						<li
							style={{
								padding: "0 0 0 1.5rem",
							}}
						>
							<DropDown title={"حسابي"} />
						</li>
						<li className="link">
							<NavLink
								to="/buyCredit"
								className={({ isActive }) =>
									isActive ? activeStyle : undefined
								}
							>
								<Cart />
							</NavLink>
						</li>
					</ul>
					<form className="d-flex search-form">
						<input
							className="form-control form-control-lg ms-2 search-input"
							type="search"
							placeholder="بحث عن المنتجات"
							aria-label="Search"
						/>
						<button
							className="btn btn-outline-dark p-3"
							type="submit"
							onMouseEnter={() => {
								setHovered(true);
							}}
							onMouseLeave={() => {
								setHovered(false);
							}}
						>
							<SearchIcon
								style={{
									fill: hovered ? "var(--white-color)" : "",
								}}
							/>
						</button>
					</form>
				</div>
			</nav>
		</>
	);
	// }
};

export default Navbar1;
