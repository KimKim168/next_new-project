import React from 'react'
import { Phone } from "lucide-react";
import Image from "next/image";
import MyHeader from "@/components/header/my-header";
import MyMenuHeader from "@/components/header/my-menu-header";
import MySearch from "@/components/my-search";
import { MySlide } from "@/components/my-slide";
import MyView from './components/my-view';
import MyLayout from '@/components/header/my-layout';

const page = () => {
  return (
    <div className='min-h-screen'>
      <MyLayout/>
      {/*End nav and slide */}
     <MyView/>

    </div>
  )
}

export default page
