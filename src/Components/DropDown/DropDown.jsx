import { Link } from "react-router-dom";
import "./drop-down-item.css";

const DropDown = ({ ...props }) => {
	return (
		<div className="btn-group">
			<button
				style={{
					border: "none",
					padding: "0",
					fontSize: "1.6rem",
				}}
				type="button"
				className="btn dropdown-toggle dropdown-toggle-split btn-lg"
				data-bs-toggle="dropdown"
				aria-expanded="false"
			></button>
			<ul
				style={{
					width: "20rem",
					fontSize: "1.5rem",
					fontweight: "600",
					marginTop: "2rem ",
					direction: "rtl",
                    padding:"0"
				}}
				className="dropdown-menu dropdown-menu-lg-end"
			>
				<li className="drop-down-item">
					<Link className="dropdown-item" to="#">
						الطلبات
					</Link>
				</li>
				<li className="drop-down-item">
					<Link className="dropdown-item" to="#">
						منتجاتي المفضله
					</Link>
				</li>
				<li className="drop-down-item">
					<Link className="dropdown-item" to="#">
						تسجيل الدخول
					</Link>
				</li>
				<li className="drop-down-item">
                <Link className="dropdown-item" to="/register">
						انشاء حساب
					</Link>
				</li>
			</ul>
		</div>
	);
};

// className={({ isActive }) =>
// isActive ? activeStyle : undefined
// }

export default DropDown;

DropDown.defaultProps = {
	title: "Dropdown",
	items: [
		{
			id: 1,
			title: "Item 1",
			link: "#",
		},
		{
			id: 2,
			title: "Item 2",
			link: "#",
		},
		{
			id: 3,
			title: "Item 3",
			link: "#",
		},
	],
};
