import Link from "next/link";
import Logo from "./logo";
export default function Nav() {
	return (
		<div>
			<div className="nav">
				<ul className="nav-links">
					<li className="animated-link-wrapper">
						<Link href="/about">
							<a>About</a>
						</Link>
					</li>
					<li className="animated-link-wrapper">
						<Link href="/blog">
							<a>Blog</a>
						</Link>
					</li>
					<li className="animated-link-wrapper">
						<Link href="/portfolio">
							<a>Portfolio</a>
						</Link>
					</li>
					<li className="animated-link-wrapper">
						<Link href="/contact">
							<a>Contact</a>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}
