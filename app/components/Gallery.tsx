import Carousel from './Carousel';
import path from 'path';
import fs from 'fs';

export default function Gallery() {

	const galleryDir = path.join(process.cwd(), 'public', 'gallery');

	const imageFiles = fs.readdirSync(galleryDir);

	return(
		<div className="p-10">
			<Carousel images={imageFiles} pathPrefix="/gallery" />
		</div>
	);
}
