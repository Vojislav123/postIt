import Link from 'next/link';
import React from 'react';
import Login from './Login';
import {getServerSession} from 'next-auth/next';
import { authOptions } from '../../pages/api/auth/[...nextauth]';
import Logged from './Logged';

type Props = {};

async function Nav({}: Props) {
    const session= await getServerSession(authOptions);

	return (
		<nav className='flex justify-between items-center py-8'>
			<Link href={'/'}>
				<h1 className='font-bold text-lg'>Send It.</h1>
			</Link>
			<ul className='flex items-center gap-6'>
				{!session?.user && <Login />}
                {session?.user?.name && <Logged image={session.user?.image || ''} />}
			</ul> 
		</nav>
	);
}

export default Nav;
