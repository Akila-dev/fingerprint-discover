'use client';
import React from 'react';
import { motion } from 'framer-motion';

const FingerprintSVG = ({ color }) => {
	const variants = {
		initial: { pathLength: 0, opacity: 0 },
		animate: {
			pathLength: 1,
			opacity: 1,
			transition: {
				duration: 1,
				ease: 'easeOut',
			},
		},
		exit: { pathLength: 0 },
	};

	return (
		<motion.svg
			width="100%"
			height="100%"
			viewBox="0 0 392 391"
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
			<motion.g
				initial="initial"
				animate="animate"
				stroke={color ? color : 'url(#subtleGoldGradient)'}
			>
				<motion.path
					// initial="initial"
					// animate="animate"
					variants={variants}
					d="M193.321 389.574C299.636 389.574 385.821 303.389 385.821 197.074C385.821 90.7592 299.636 4.57401 193.321 4.57401C87.0062 4.57401 0.821014 90.7592 0.821014 197.074C0.821014 303.389 87.0062 389.574 193.321 389.574Z"
					stroke="none"
					strokeMiterlimit="10"
				/>
				<motion.path
					// initial="initial"
					// animate="animate"
					variants={variants}
					d="M133.227 14.213C105 22 64.656 49.237 39.736 85.74C17.811 118.781 4.20229 160.124 8.00001 200C11 224 20 247 16.103 271.159"
					strokeWidth="8"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<motion.path
					// initial="initial"
					// animate="animate"
					variants={variants}
					d="M387.198 213.878C385.957 163.442 375.385 116.818 342.951 76.707C298.877 22.2058 224.628 -6.80863 155.434 8.12901"
					strokeWidth="8"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<motion.path
					// initial="initial"
					// animate="animate"
					variants={variants}
					d="M317.896 86.306C285 48 236 28 187 31C125 34 67 76 45.632 134.967"
					strokeWidth="8"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<motion.path
					// initial="initial"
					// animate="animate"
					variants={variants}
					d="M359.939 199.364C356.85 163.027 349 132 329.796 103.405"
					strokeWidth="8"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<motion.path
					// initial="initial"
					// animate="animate"
					variants={variants}
					d="M360.38 290.802C363 271 363 244 361.5 220"
					strokeWidth="8"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<motion.path
					// initial="initial"
					// animate="animate"
					variants={variants}
					d="M39.464 154.765C36.6004 166.625 35.1141 178.808 35.0553 191C34.942 214.456 42.9717 236.616 44.345 259.858C45.1998 274.325 42.1514 288.677 37.009 302.162"
					strokeWidth="8"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<motion.path
					// initial="initial"
					// animate="animate"
					variants={variants}
					d="M144.599 68.306C101.889 85.4579 69.7357 124.183 63.1678 170C58.935 199.527 68.2912 227.644 70.0707 257C71.4042 278.997 68.866 302.678 54.906 324.115"
					strokeWidth="8"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<motion.path
					// initial="initial"
					// animate="animate"
					variants={variants}
					d="M331.916 192.638C327.922 153.568 312.635 117.455 286 92.5081C254.349 62.863 208.317 52.4108 166.367 61.612"
					strokeWidth="8"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<motion.path
					// initial="initial"
					// animate="animate"
					variants={variants}
					d="M335.467 215.26C339.226 251.86 337.611 291.471 331.916 329.85"
					strokeWidth="8"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<motion.path
					// initial="initial"
					// animate="animate"
					variants={variants}
					d="M265.55 111.093C246.785 95.157 222.339 85.517 195.603 85.517C136.455 85.517 88.505 132.689 88.505 190.878C88.505 197.099 89.057 203.193 90.109 209.118"
					strokeWidth="8"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<motion.path
					// initial="initial"
					// animate="animate"
					variants={variants}
					d="M310.654 261.1C310.654 236.558 308.094 155.277 279.87 125.845"
					strokeWidth="8"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<motion.path
					// initial="initial"
					// animate="animate"
					variants={variants}
					d="M309.651 283.69C307.684 308.362 305.1 333.217 299.823 356.252"
					strokeWidth="8"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<motion.path
					// initial="initial"
					// animate="animate"
					variants={variants}
					d="M93.382 228.464C101.671 270.557 95.914 308.473 74.179 341.639"
					strokeWidth="8"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<motion.path
					// initial="initial"
					// animate="animate"
					variants={variants}
					d="M265.55 372.313C283.675 325.322 292.075 227.248 274.194 169C259.474 121.048 213.268 111.543 195.603 111.543C157.535 111.543 120.518 141.104 116.776 177.461C113.496 209.326 124.98 239.744 123.582 271.5C122.062 306.018 111.912 334.698 94.359 358.369"
					strokeWidth="8"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<motion.path
					// initial="initial"
					// animate="animate"
					variants={variants}
					d="M118.171 370.712C123.068 363.204 126.964 354.696 131.861 347.188"
					strokeWidth="8"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<motion.path
					// initial="initial"
					// animate="animate"
					variants={variants}
					d="M140.021 327.85C147.714 310.044 151.705 291.366 152.229 271C153.219 232.5 142.292 216.493 142.292 188.92C142.292 169.106 151.173 155.706 166.073 145.74"
					strokeWidth="8"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<motion.path
					// initial="initial"
					// animate="animate"
					variants={variants}
					d="M248.857 335.5C256.342 300.446 260.024 265.696 256.799 230C254.456 204.061 250.971 167.342 229 149.558C216.806 139.689 200.167 135.778 184.708 138.93"
					strokeWidth="8"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<motion.path
					// initial="initial"
					// animate="animate"
					variants={variants}
					d="M231.926 382.285C236.834 374.085 240.718 365.154 243.239 355.252"
					strokeWidth="8"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<motion.path
					// initial="initial"
					// animate="animate"
					variants={variants}
					d="M201.567 385.786C214.958 361.622 223.357 333.667 227.085 302.164"
					strokeWidth="8"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<motion.path
					// initial="initial"
					// animate="animate"
					variants={variants}
					d="M229.545 280.639C231.744 253.179 228.647 221.471 222.799 187.558C220.359 174.521 209.203 164.67 195.801 164.67C180.613 164.67 168.301 177.318 168.301 192.921C168.301 195.493 168.642 197.981 169.268 200.349C178.146 235.468 179.626 269.413 173.59 302.163C168.37 331.467 158.335 357.89 144.6 380.329"
					strokeWidth="8"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<motion.path
					// initial="initial"
					// animate="animate"
					variants={variants}
					d="M171.438 384.249L182.037 363.623"
					strokeWidth="8"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<motion.path
					// initial="initial"
					// animate="animate"
					variants={variants}
					d="M189.93 344.73C206.711 300.862 208.508 249.597 194.882 191.594"
					strokeWidth="8"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</motion.g>
		</motion.svg>
	);
};

export default FingerprintSVG;
