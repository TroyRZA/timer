import Image from "next/image";
import CountdownTimer from "./countdowntimer";

export default function Home() {
	return (
		<main className='flex flex-row justify-center'>
			<div className='flex flex-col basis-1/3 items-center bg-zinc-800 relative top-10 rounded-lg h-52 shadow-green-glow'>
				<div className='m-5'>
					<h1 className='text-4xl font-bold'>Troy Timer</h1>
				</div>
				<div>
					<CountdownTimer />
				</div>
			</div>
		</main>
	);
}
