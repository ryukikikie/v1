import Link from "next/link";
import Logo from "./logo";
import { useRouter } from "next/router";
export default function Nav() {
	const router = useRouter();

	return (
		<div>
			<div className="nav">
				<ul className="nav-links">
					<li
						className={
							router.pathname == "/about"
								? "active animated-link-wrapper"
								: "animated-link-wrapper"
						}
					>
						<Link href="/about">
							<a>About</a>
						</Link>
					</li>
					<li
						className={
							router.pathname == "/blog"
								? "active animated-link-wrapper"
								: "animated-link-wrapper"
						}
					>
						<Link href="/blog">
							<a>Blog</a>
						</Link>
					</li>
					<li
						className={
							router.pathname == "/portfolio"
								? "active animated-link-wrapper"
								: "animated-link-wrapper"
						}
					>
						<Link href="/portfolio">
							<a>Portfolio</a>
						</Link>
					</li>
					<li
						className={
							router.pathname == "/contact"
								? "active animated-link-wrapper"
								: "animated-link-wrapper"
						}
					>
						<Link href="/contact">
							<a>Contact</a>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}
