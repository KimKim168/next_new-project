import Image from 'next/image'
import React from 'react'
import MyMenuHeader from './my-menu-header'
import { BASE_API_URL } from '@/env';
import { MyLanguageSwitcher } from '../my-language-switcher';
import { Phone, User } from 'lucide-react';

const MyBaseHeader = async () => {

  const repPages = await fetch(`${BASE_API_URL}/pages?position=menus`,{
    next:{revalidate: 3600 },
  });

  const menus = await repPages.json();
  // console.log(menu);

  return (
    <div>
     
      {/* nav and slide */}
      <div className="mt-1 bg-[#393838]">
        <div className="max-w-screen-2xl py-5 mx-auto px-5 sm:px-10 xl:px-20 flex items-center">
          <a href='/' className="flex-1 flex gap-2 items-center text-base  md:text-xl lg:text-xl text-white text-center">
            
            <Image
              src="/assets/images/rule.png"
              width={90}
              height={90}
              alt="logo"
              className="w-14 h-16 md:w-20 md:h-24"
            />
            <p className="font-semibold">
            សាកលវិទ្យាល័យភូមិន្ទនីតិសាស្រ្ដ និងវិទ្យាសាស្រ្ដសេដ្ឋកិច្ច
              <br />
              <span className="font-normal">Royal University of Law and Economics{" "}</span> 
            </p>
          </a>

         <MyMenuHeader menus={menus}/>
        </div>
      </div>
    </div>
  )
}

export default MyBaseHeader
