import Carousel from './Carousel';
import Splash from './Splash'
import path from 'path';
import fs from 'fs';

export default function Gallery() {

	const galleryDir = path.join(process.cwd(), 'public', 'gallery');

	const imageFiles = fs.readdirSync(galleryDir);

	return(
		<div className="p-10">
			<Splash imgFiles={imageFiles} pathPrefix="/gallery"/>
		</div>
	);
}
