export default function Navbar() {
	return(
		<div className="flex justify-between border border-b-yellow-400 dark:border-t-black dark:border-l-black dark:border-r-black">
			<h1 className="text-2xl items-center justify-center m-2 p-2">
				ACD Photography
			</h1>
			<nav className="flex items-center">
				<button className="flex rounded-xl m-2 p-2 hover:bg-rose-600">
					<a href="#hero">
						About Me
					</a>
				</button>
				<button className="flex rounded-xl m-2 p-2 hover:bg-rose-600">
					<a href="#contact">
						Contact
					</a>
				</button>
			</nav>
		</div>
	);
}
