import Menu from './Menu'
import Logo from './Logo'

export default function Navbar() {
	return(
		<div className="flex justify-between dark:border-t-black dark:border-l-black dark:border-r-black">
			<Logo />
				
			<div className="p-2 m-2">
				<Menu />
			</div>
		</div>
	);
}
