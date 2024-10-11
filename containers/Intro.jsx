'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useAnimate, motion, AnimatePresence } from 'framer-motion';

import { images } from '@/constants';
import { Fingerprint, LockUnlock } from '@/components';

const Intro = () => {
	const [animationPhase, setAnimationPhase] = useState(0);

	const animateUnlock = () => {
		setTimeout(() => {
			setAnimationPhase(1);
		}, 5000);
	};

	// VARIANTS
	const fingerPrintVariant = {
		initial: { z: '-100px' },
		animate: (i) => ({
			z: i === 0 ? '0px' : '-50px',
			transition: { type: 'spring' },
		}),
		exit: { scale: 0 },
	};
	return (
		<div className="w-full h-screen bg-hero-bg flex-center">
			<div
				style={{
					perspective: '100px',
					transformStyle: 'preserve-3d',
					perspectiveOrigin: 'center center',
				}}
			>
				<AnimatePresence>
					<motion.div
						animate="animate"
						initial="initial"
						exit="exit"
						variants={fingerPrintVariant}
						custom={animationPhase}
					>
						<Fingerprint intro animateUnlock={() => animateUnlock()} />
					</motion.div>
					{/* {animationPhase === 1 && (
						<div>
							<LockUnlock />
						</div>
					)} */}
				</AnimatePresence>
			</div>
			<div className="w-full h-[50vh] lg:h-[40vh] absolute bottom-0 left-0 object-cover overflow-hidden">
				<Image
					width={1440}
					height={920}
					src={images.grid1}
					alt="background grid"
					className="w-full h-full object-cover"
				/>
			</div>
		</div>
	);
};

export default Intro;
