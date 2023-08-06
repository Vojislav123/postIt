'use client';

import React from 'react';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';

export default function Logged({image}: loggedProps) {
	return (
		<li className='flex gap-8 items-center'>
			<button
				onClick={() => signOut()}
				className='bg-gray-700 text-white px-6 py-2 rounded-md'>
				Sign out
			</button>
            <Link href={'/dashboard'}>
                <Image width={64} height={64} src={image} alt='profile' className='w-14 rounded-full' />
            </Link>
		</li>
	);
}
