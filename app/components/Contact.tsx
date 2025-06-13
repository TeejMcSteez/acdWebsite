import Image from 'next/image'

export default function Contact() {
	return(
		<div id="contact" className="flex flex-col items-center justify-center m-4">
				<div className="flex items-center justify-center rounded">
					<h1 className="flex items-center justify-center p-2">
						<Image src="/phone.svg" alt={"Phone SVG"} height={30} width={30} priority />:
					</h1>
					<h2 className="flex items-center justify-center bold text-xl">
						(704) 691-4023
					</h2>
				</div>

				<div className="flex flex-col items-center rounded">
					<button className="bold p-1 underline">
						<a href="https://www.instagram.com/a.c.d.photography_/?igsh=MWJpZHlvYmM0MmF5cw%3D%3D" className="hover:invert-50" target="_blank">
							<Image src={"/instaIcon.svg"} alt={"Instagram"} height={50} width={50} priority/>
						</a>
					</button>
				</div>
		</div>
	);
}
