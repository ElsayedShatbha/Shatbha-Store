import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";

const Root = () => {
	return (
		<div>
			<Suspense
				fallback={
					<div className="is-page-loading">
						<HashLoader />
					</div>
				}
			>
				<Outlet />
			</Suspense>
		</div>
	);
};

export default Root;
