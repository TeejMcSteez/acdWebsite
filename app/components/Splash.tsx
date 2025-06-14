'use client';
import { useState } from 'react';
import Image from 'next/image';

interface imageProps {
  imgFile: string;
  pathPrefix?: string;
}

interface SplashProps {
  imgFiles: string[];
  pathPrefix?: string;
}

export default function Splash({ imgFiles, pathPrefix = '' }: SplashProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="relative">
      {/* Fullscreen overlay if image is selected */}
	{selectedImage && (
  	<div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
    {/* Close button above image */}
    	<button
      	className="absolute top-4 right-4 z-50 text-white text-3xl font-bold hover:text-gray-400"
      	onClick={() => setSelectedImage(null)}
    	>
      	&times;
    	</button>

    	{/* Image container with lower z-index */}
    	<div className="relative w-full h-full max-w-screen max-h-screen z-40">
      		<Image
        		src={`${pathPrefix}/${selectedImage}`}
        		alt={selectedImage}
        		fill
        		className="object-contain"
        		priority
      		/>
    		</div>
  		</div>
		)}

      {/* Thumbnail grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 p-2">
        {imgFiles.map((img, index) => (
          <div key={index} className="cursor-pointer">
            <Image
              src={`${pathPrefix}/${img}`}
              alt={img}
              height={500}
              width={500}
              priority
              onClick={() => setSelectedImage(img)}
              className="rounded hover:opacity-80 transition duration-200"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

