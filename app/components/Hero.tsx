"use client";

import Image from "next/image";

export default function Hero() {
	return(	
		<div id="about" className="p-2 mt-10 text-center min-h-screen">
			<div className="flex flex-col md:flex-row items-center justify-between text-center">
				<Image src={"/me.JPG"} height={125} width={175} alt="Me" className="relative rounded-3xl"/>
				<p className="p-2 m-2 text-pretty">
					Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
					Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
				</p>
			</div>
		</div>
	);
}
