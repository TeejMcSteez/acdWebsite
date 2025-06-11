import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Contact from './components/Contact'
import Gallery from './components/Gallery'

export default function Home() {
	return (
		<div className="flex flex-col min-w-screen min-h-screen">
			<Navbar/>
			<Hero/>
			<Gallery/>
			<Contact/>
		</div>
	);
}

