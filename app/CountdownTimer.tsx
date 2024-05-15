"use client";
import React, { useEffect, useState } from "react";

const CountdownTimer = () => {
	const calculateTimeLeft = () => {
		let year = new Date().getFullYear();
		const difference = +new Date(`${year}-05-23`) - +new Date();
		let timeLeft = {};

		if (difference > 0) {
			timeLeft = {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference / 1000 / 60) % 60),
				seconds: Math.floor((difference / 1000) % 60)
			};
		}

		return timeLeft;
	};

	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
	const [year] = useState(new Date().getFullYear());

	useEffect(() => {
		setTimeout(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);
	});

	return (
		<div className='flex flex-col justify-center'>
			<div className='flex flex-row'>
				{Object.entries(timeLeft).map(([unit, value]) => (
					<div className='m-1' key={unit}>
						<span>{value as React.ReactNode}</span>
						<span>{unit}</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default CountdownTimer;
