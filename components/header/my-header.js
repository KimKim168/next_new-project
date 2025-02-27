"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const MyHeader = () => {
  const pathName = usePathname();

  return (
    <div className="hidden lg:block">
      <ul className="flex space-x-2 text-white">
        <li className={`border-r pr-2 border-white`}>
          <Link 
            href="/" 
            className={`text-base ${
              pathName === '/' ? 'text-yellow-400 font-semibold underline underline-offset-4' : 'hover:underline hover:shadow-xl hover:cursor-pointer hover:underline-offset-4'
            }`}
          >
            Home
          </Link>
        </li>
        <li className={`text-base border-r pr-2 border-white ${pathName === '/about' ? 'text-yellow-400 font-semibold underline underline-offset-4' : 'hover:underline hover:shadow-xl hover:cursor-pointer hover:underline-offset-4'}`}>
          <Link href="/about">About</Link>
        </li>
        <li className={`text-base border-r pr-2 border-white ${pathName === '/collections' ? 'text-yellow-400 font-semibold underline underline-offset-4' : 'hover:underline hover:shadow-xl hover:cursor-pointer hover:underline-offset-4'}`}>
          <Link href="/collections">Collections</Link>
        </li>
        <li className={`text-base border-r pr-2 border-white ${pathName === '/resources' ? 'text-yellow-400 font-semibold underline underline-offset-4' : 'hover:underline hover:shadow-xl hover:cursor-pointer hover:underline-offset-4'}`}>
          <Link href="/resources">Resources</Link>
        </li>
        <li className={`text-base border-r pr-2 border-white ${pathName === '/database' ? 'text-yellow-400 font-semibold underline underline-offset-4' : 'hover:underline hover:shadow-xl hover:cursor-pointer hover:underline-offset-4'}`}>
          <Link href="/database">Database</Link>
        </li>
        <li className={`text-base border-r pr-2 border-white ${pathName === '/contact' ? 'text-yellow-400 font-semibold underline underline-offset-4' : 'hover:underline hover:shadow-xl hover:cursor-pointer hover:underline-offset-4'}`}>
          <Link href="/contact">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default MyHeader;
