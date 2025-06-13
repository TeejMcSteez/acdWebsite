import Menu from './Menu'

export default function Navbar() {
	return(
		<div className="flex justify-between border border-b-[#ffd700] dark:border-t-black dark:border-l-black dark:border-r-black">
			<h1 className="text-2xl bold m-2 p-2">ACD</h1>
				
			<div className="p-2 m-2">
				<Menu />
			</div>
		</div>
	);
}
