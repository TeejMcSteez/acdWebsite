import Carousel from './Carousel';
import Splash from './Splash'
import path from 'path';
import fs from 'fs';

export default function Gallery() {

	const galleryDir = path.join(process.cwd(), 'public', 'gallery');

	const imageFiles = fs.readdirSync(galleryDir);

	return(
		<div className="p-10">
			<h1 className="flex text-2xl bold items-center justify-center m-2 p-2">Welcome, check out my work!</h1>
			<Splash imgFiles={imageFiles} pathPrefix="/gallery"/>
		</div>
	);
}
