export default function Contact() {
	return(
		<div id="contact" className="flex flex-col items-center justify-center rounded-2xl m-4 border border-yellow-400">
				<div className="flex items-center justify-center rounded">
					<h1 className="flex items-center justify-center text-xl p-2">
						Contact by Phone:
					</h1>
					<h2 className="flex items-center justify-center">
						(704) 691-4023
					</h2>
				</div>

				<div className="flex flex-col items-center rounded">
					<h1 className="items-center">
						Check out the
					<button className="bold p-1 underline">
						<a href="https://www.instagram.com/a.c.d.photography_/?igsh=MWJpZHlvYmM0MmF5cw%3D%3D">
							Instagram
						</a>
					</button>
					</h1>
				</div>
		</div>
	);
}
