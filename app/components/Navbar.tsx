export default function Navbar() {
	return(
		<div className="flex justify-between border border-b-[#ffd700] dark:border-t-black dark:border-l-black dark:border-r-black">
			<h1 className="text-3xl bold items-center justify-center m-2 p-2">
				ACD Photography
			</h1>
			<nav className="flex items-center m-2">
				<button className="flex rounded-xl m-2 p-2 hover:bg-rose-600">
					<a href="#hero" className="italic bold">
						About Me
					</a>
				</button>
				<button className="flex rounded-xl m-2 p-2 hover:bg-rose-600">
					<a href="#contact" className="italic bold">
						Contact
					</a>
				</button>
			</nav>
		</div>
	);
}
