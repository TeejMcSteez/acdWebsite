"use client";

import Image from 'next/image';
import { useState } from 'react';

interface SplashProps {
	imgFiles: string[];
	pathPrefix?: string; // For prefixing path if images are in another directory
}

export default function Splash({imgFiles, pathPrefix = ''}: SplashProps) {
	const imgs = imgFiles.length;

	return(	
		<div className="grid grid-cols-2 md:grid-cols-3">
			{ imgFiles.map((img, index) => (
			
				<div className="flex p-1 m-1">
				
					<Image key={index} src={`${pathPrefix}/${img}`} alt={img} height={300} width={300} objectFit="contain" priority className=""/>

				</div>

			))}
		</div>
	);
}
