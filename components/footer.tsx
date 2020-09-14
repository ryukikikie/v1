import React from "react";

const Footer = () => {
	const siteTitle = "WebWeeb";
	return (
		<footer className="footer">
			<div className="container">
				<p className="text-lg">
					Copyright &copy;{siteTitle} {new Date().getFullYear()}
				</p>
			</div>
		</footer>
	);
};

export default Footer;
