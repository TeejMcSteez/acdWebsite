import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Contact from './components/Contact'
import Gallery from './components/Gallery'

export default function Home() {
	return (
		<div className="flex flex-col min-w-screen min-h-screen bg-stone-300 bg-no-repeat bg-cover bg-origin-border text-black">
			<Navbar/>
			<Hero />
			<Gallery/>
			{/* Currently client does not want about me section */}
			<Contact/>
		</div>
	);
}

