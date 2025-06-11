"use client";

import Image from 'next/image';
import { useState } from 'react';

interface CarouselProps {
	images: string[];
	pathPrefix?: string // ex: "/gallery" - defaults to root
}

export default function Carousel({ images, pathPrefix = ''}: CarouselProps) {
	const [index, setIndex] = useState(0);
	const total = images.length;

	const getPrev = () => setIndex((index - 1 + total) % total);
	const getNext = () => setIndex((index + 1) % total);

	return (
		<div className="relative w-full max-w-2xl mx-auto aspect-video overflow-hidden rounded-xl border">
			{/* Image */}
			<div className="relative w-full h-full">
				<Image 
					src={`${pathPrefix}/${images[index]}`}
					alt={`Image ${index + 1}`}
					fill
					className="object-cover"
					priority
				/>
			</div>
			
			{/* Buttons */}
				<button
					onClick={getPrev}
					className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/7- p-2 rounded-full shadow hover:bg-white transition"
				>
					◀
				</button>
				
				<button
					onClick={getNext}
					className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/7- p-2 rounded-full shadow hover:bg-white transition"

				>
					▶
				</button>
				
				{/* Dots */}
				<div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
				{images.map((_, i) => (
					<div
						key={i}
						className={`h-2 w-2 rounded-full ${i === index ? 'bg-black' : 'bg=white/50'}`}
						/>
				))}
				</div>
			</div>
	);
}
