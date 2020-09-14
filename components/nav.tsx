import Link from "next/link";
import Logo from "./logo";
export default function Nav() {
	return (
		<div>
			{/* <Link href="/">
				<a>
					<span>
						<Logo />
					</span>
				</a>
			</Link> */}
			<div className="nav bg-cashmere">
				<ul className="nav-links">
					<li>
						<Link href="/about">
							<a>About</a>
						</Link>
					</li>
					<li>
						<Link href="/blog">
							<a>Blog</a>
						</Link>
					</li>
					<li>
						<Link href="/portfolio">
							<a>Portfolio</a>
						</Link>
					</li>
					<li>
						<Link href="/contact">
							<a>Contact</a>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}
