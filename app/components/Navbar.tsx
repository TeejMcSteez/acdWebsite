export default function Navbar() {
	return(
		<div className="flex justify-between">
			<h1 className="text-2xl items-center justify-center">
				ACD Photography
			</h1>
			<nav className="flex items-center">
				<button className="m-2 p-2">About Me</button>
				<button className="m-2 p-2">Photos</button>
			</nav>
		</div>
	);
}
