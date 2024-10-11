import { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { getIndex, useFlubber } from '@/utils/use-flubber';

const lockedPath =
	'M133.5 252.469C140.545 252.469 147.301 249.67 152.283 244.689C157.264 239.707 160.062 232.951 160.062 225.906C160.062 218.861 157.264 212.105 152.283 207.124C147.301 202.142 140.545 199.344 133.5 199.344C126.455 199.344 119.699 202.142 114.717 207.124C109.736 212.105 106.938 218.861 106.938 225.906C106.938 232.951 109.736 239.707 114.717 244.689C119.699 249.67 126.455 252.469 133.5 252.469Z';

const unlockedPath =
	'M129.5 245.844C136.346 245.844 142.911 243.124 147.752 238.283C152.593 233.443 155.312 226.877 155.312 220.031C155.312 213.185 152.593 206.62 147.752 201.779C142.911 196.938 136.346 194.219 129.5 194.219C122.654 194.219 116.089 196.938 111.248 201.779C106.407 206.62 103.688 213.185 103.688 220.031C103.688 226.877 106.407 233.443 111.248 238.283C116.089 243.124 122.654 245.844 129.5 245.844Z';
const lockedPath2 =
	'M53.8125 79.8125V132.938C39.7229 132.938 26.2103 138.535 16.2474 148.497C6.28458 158.46 0.6875 171.973 0.6875 186.062V265.75C0.6875 279.84 6.28458 293.352 16.2474 303.315C26.2103 313.278 39.7229 318.875 53.8125 318.875H213.188C227.277 318.875 240.79 313.278 250.753 303.315C260.715 293.352 266.312 279.84 266.312 265.75V186.062C266.312 171.973 260.715 158.46 250.753 148.497C240.79 138.535 227.277 132.938 213.188 132.938V79.8125C213.188 58.6781 204.792 38.4092 189.848 23.4649C174.903 8.52063 154.634 0.125 133.5 0.125C112.366 0.125 92.0967 8.52063 77.1524 23.4649C62.2081 38.4092 53.8125 58.6781 53.8125 79.8125ZM133.5 26.6875C119.41 26.6875 105.898 32.2846 95.9349 42.2474C85.9721 52.2103 80.375 65.7229 80.375 79.8125V132.938H186.625V79.8125C186.625 65.7229 181.028 52.2103 171.065 42.2474C161.102 32.2846 147.59 26.6875 133.5 26.6875ZM53.8125 159.5H213.188C220.232 159.5 226.989 162.299 231.97 167.28C236.951 172.261 239.75 179.018 239.75 186.062V265.75C239.75 272.795 236.951 279.551 231.97 284.533C226.989 289.514 220.232 292.312 213.188 292.312H53.8125C46.7677 292.312 40.0114 289.514 35.03 284.533C30.0485 279.551 27.25 272.795 27.25 265.75V186.062C27.25 179.018 30.0485 172.261 35.03 167.28C40.0114 162.299 46.7677 159.5 53.8125 159.5Z';

const unlockedPath2 =
	'M129.5 26.4375C115.808 26.4375 102.677 31.8765 92.9956 41.5581C83.314 51.2397 77.875 64.3707 77.875 78.0625V129.688H206.938C220.629 129.688 233.76 135.127 243.442 144.808C253.123 154.49 258.562 167.621 258.562 181.312V258.75C258.562 272.442 253.123 285.573 243.442 295.254C233.76 304.936 220.629 310.375 206.938 310.375H52.0625C38.3707 310.375 25.2397 304.936 15.5581 295.254C5.87654 285.573 0.4375 272.442 0.4375 258.75V181.312C0.4375 167.621 5.87654 154.49 15.5581 144.808C25.2397 135.127 38.3707 129.688 52.0625 129.688V78.0625C52.0625 57.5248 60.2211 37.8283 74.7434 23.3059C89.2658 8.78357 108.962 0.625 129.5 0.625C150.038 0.625 169.734 8.78357 184.257 23.3059C198.779 37.8283 206.937 57.5248 206.938 78.0625C206.938 81.4855 205.578 84.7682 203.157 87.1886C200.737 89.609 197.454 90.9688 194.031 90.9688C190.608 90.9688 187.326 89.609 184.905 87.1886C182.485 84.7682 181.125 81.4855 181.125 78.0625C181.125 64.3707 175.686 51.2397 166.004 41.5581C156.323 31.8765 143.192 26.4375 129.5 26.4375ZM52.0625 155.5H206.938C213.783 155.5 220.349 158.22 225.19 163.06C230.03 167.901 232.75 174.467 232.75 181.312V258.75C232.75 265.596 230.03 272.161 225.19 277.002C220.349 281.843 213.783 284.562 206.938 284.562H52.0625C45.2166 284.562 38.6511 281.843 33.8103 277.002C28.9695 272.161 26.25 265.596 26.25 258.75V181.312C26.25 174.467 28.9695 167.901 33.8103 163.06C38.6511 158.22 45.2166 155.5 52.0625 155.5Z';

const paths = [lockedPath, unlockedPath];
const paths2 = [lockedPath2, unlockedPath2];

const LockUnlock = () => {
	const [pathIndex, setPathIndex] = useState(0);
	const [pathIndex2, setPathIndex2] = useState(0);
	const progress = useMotionValue(pathIndex);
	const progress2 = useMotionValue(pathIndex2);
	const path = useFlubber(progress, paths);
	const path2 = useFlubber(progress2, paths2);

	useEffect(() => {
		const animation = animate(progress, pathIndex, {
			duration: 0.8,
			ease: 'easeInOut',
			onComplete: () => {
				if (pathIndex === paths.length - 1) {
					progress.set(0);
					setPathIndex(1);
				} else {
					setPathIndex(pathIndex + 1);
				}
			},
		});
		return () => animation.stop();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathIndex]);

	useEffect(() => {
		const animation = animate(progress2, pathIndex2, {
			duration: 0.8,
			ease: 'easeInOut',
			onComplete: () => {
				if (pathIndex2 === paths2.length - 1) {
					progress2.set(0);
					setPathIndex2(1);
				} else {
					setPathIndex2(pathIndex2 + 1);
				}
			},
		});
		return () => animation.stop();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathIndex2]);

	return (
		<div className="fingerprint-intro rounded-xl glassy-background p-7">
			<svg
				width="100%"
				height="100%"
				viewBox="0 0 267 319"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<defs>
					<radialGradient
						id="subtleGoldGradient"
						cx="50%"
						cy="50%"
						r="50%"
						fx="50%"
						fy="50%"
					>
						<stop
							offset="0%"
							style={{ stopColor: '#FFD700', stopOpacity: '1' }}
						/>
						<stop
							offset="40%"
							style={{ stopColor: '#FFEA7A', stopOpacity: '1' }}
						/>
						<stop
							offset="80%"
							style={{ stopColor: '#FFC700', stopOpacity: '1' }}
						/>
						<stop
							offset="100%"
							style={{ stopColor: '#FFD700', stopOpacity: '1' }}
						/>
					</radialGradient>
				</defs>

				<g transform="">
					<motion.path fill={'url(#subtleGoldGradient)'} d={path} />
					<motion.path
						fillRule="evenodd"
						clipRule="evenodd"
						d={path2}
						fill={'url(#subtleGoldGradient)'}
					/>
				</g>
			</svg>
		</div>
	);
};

export default LockUnlock;
