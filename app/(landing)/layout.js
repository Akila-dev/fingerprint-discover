'use client';

import { useState } from 'react';

import { Intro } from '@/containers';
import { Fingerprint } from '@/components';

export default function RootLayout({ children }) {
	const [intro, setIntro] = useState(true);
	return intro ? (
		<Intro />
	) : (
		<div>
			<div>
				<Fingerprint />
			</div>
			<div>{children}</div>
		</div>
	);
}
