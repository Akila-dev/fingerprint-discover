import { useState, useEffect } from 'react';

import { FingerprintSVG } from '@/components';
import { useAnimate, motion } from 'framer-motion';

const Fingerprint = ({ intro, animateUnlock }) => {
	const [init, setInit] = useState(true);
	const [animated, setAnimated] = useState(false);
	const [hovered, setHovered] = useState(false);

	const introHoverAnimation = () => {
		setAnimated(true);
		animateUnlock();
		setHovered(true);
		setTimeout(() => {
			setHovered(false);
		}, 5000);
	};

	useEffect(() => {
		setTimeout(() => {
			setInit(false);
		}, 1000);
	}, []);

	return (
		<div className={`fingerprint-intro`}>
			<div
				onMouseOver={() => {
					if (intro && !init && !animated) {
						introHoverAnimation();
					}
				}}
				onClick={() => {
					if (intro && !init && !animated) {
						introHoverAnimation();
					}
				}}
				className={`relative w-full h-full object-contain ${
					hovered && 'fingerprint'
				}`}
			>
				<FingerprintSVG />
			</div>
			{/* <div className="absolute top-0 left-0 w-full h-full object-contain -z-10">
				<FingerprintSVG color="#555" />
			</div> */}
		</div>
	);
};

export default Fingerprint;
