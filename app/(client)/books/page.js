import React from 'react'
import { Phone } from "lucide-react";
import Image from "next/image";
import MyHeader from "@/components/header/my-header";
import MyMenuHeader from "@/components/header/my-menu-header";
import MySearch from "@/components/my-search";
import { MySlide } from "@/components/my-slide";
import MyView from './components/my-view';

const page = () => {
  return (
    <div className='min-h-screen'>
       <div className="flex items-center justify-end gap-2 max-w-screen-2xl px-5 sm:px-10 xl:px-20 mt-1">
        <Phone width={15} height={15} />
        <p>010 775589 -</p>
        <a href="#">Student Login</a>
      </div>
      {/* nav and slide */}
      <div className=" mt-1 bg-[#393838]">
        <div className="max-w-screen-2xl py-5 mx-auto px-5 sm:px-10 xl:px-20 flex items-center">
          <a href='/' className="flex-1 flex gap-2 items-center text-base  md:text-xl lg:text-xl text-white text-center">
            
            <Image
              src="/assets/images/logo.png"
              width={90}
              height={90}
              alt="logo"
              className="w-14 h-16 md:w-20 md:h-24"
            />
            <p className="font-semibold">
              វិទ្យាស្ថានជាតិអប់រំ
              <br />
              <span className="font-normal">National Institute Of Education{" "}</span> 
            </p>
          </a>
         <MyHeader/>
         <MyMenuHeader/>
        </div>
      </div>
      {/*End nav and slide */}
     <MyView/>

    </div>
  )
}

export default page
