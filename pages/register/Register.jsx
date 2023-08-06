import Layout from "../../src/Components/Layout/Layout";
import { useDataProvider } from "../../src/hooks/useDataProvider";
import { useMediaQuery } from "react-responsive";

const Home = () => {
	window.scrollTo(0, 0);

	const { user } = useDataProvider();
	const isMobileScreen = useMediaQuery({
		query: "(max-width: 600px)",
	});
    console.log(user);
	return (
		<Layout>
            register
		</Layout>
	);
};

export default Home;
