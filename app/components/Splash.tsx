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
		<div>
			{ imgFiles.map((img, index) => (
				<Image key={index} src={`{pathPrefix}/{img}`} alt={img} fill className="object-cover" priority/>
			))}
		</div>
	);
}
