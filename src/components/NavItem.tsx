import { DefaultSession } from 'next-auth';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

declare module 'next-auth' {
  interface Session {
    user?: {
      id?: string;
      role?: string;
    } & DefaultSession['user'];
  }
}

const NavItem = ({ mobile }: { mobile?: boolean }) => {
  const { data: session, status } = useSession();
  console.log('session : ', { session }, status);

  return (
    <ul
      className={`text-md justify-center w-full flex gap-4 ${
        mobile && 'flex-col bg-orange-500 h-full'
      } items-center`}>
      <li className='py-2 text-center border-b-4 cursor-pointer'>
        <Link href={'/admin'}>Admin</Link>
      </li>
      <li className='py-2 text-center border-b-4 cursor-pointer'>
        <Link href={'/user'}>User</Link>
      </li>
      {session?.user ? (
        <li className='py-2 text-center border-b-4 cursor-pointer'>
          <button onClick={() => signOut()}>Signout</button>
        </li>
      ) : (
        <li className='py-2 text-center border-b-4 cursor-pointer'>
          <button onClick={() => signIn()}>Signin</button>
        </li>
      )}
    </ul>
  );
};

export default NavItem;
