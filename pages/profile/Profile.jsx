import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../src/Components/Layout/Layout";
import { useDataProvider } from "../../src/hooks/useDataProvider";
import { useMediaQuery } from "react-responsive";

const Profile = () => {
	window.scrollTo(0, 0);

	const navigate = useNavigate();
	const { user } = useDataProvider();

	useEffect(() => {
		if (user === "none" || !user) {
			navigate("/login", { replace: true });
		}
	}, []);
	// const isMobileScreen = useMediaQuery({
	// 	query: "(max-width: 600px)",
	// });

    console.log(user);
	return (
		<Layout>
		</Layout>
	);
};

export default Profile;
