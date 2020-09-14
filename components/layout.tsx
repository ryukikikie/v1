import React from "react";
import Nav from "./nav";
import Footer from "./footer";
const layout = ({ children }) => {
	return (
		<>
			<div className="bg-gunmetal flex flex-col min-h-screen">
				<Nav />
				<div className="flex-grow">{children}</div>
				<Footer />
			</div>
		</>
	);
};

export default layout;
