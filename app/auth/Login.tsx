'use client'


import React from 'react';
import { signIn } from 'next-auth/react';


type Props = {}

export default function Login({}: Props) {
  return (
    <li className='list-none'>
        <button onClick={()=>signIn()} className='text-sm bg-gray-700 text-white py-2 px-6 rounded-xl disabled:opacity-25'>
            Sign In
        </button>
    </li>
  )
}