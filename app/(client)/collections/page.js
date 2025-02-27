import React from 'react'
import { Phone } from "lucide-react";
import Image from "next/image";
import MyHeader from "@/components/header/my-header";
import MyMenuHeader from "@/components/header/my-menu-header";
import MyItem from './components/my-item';
import MyCollection from '@/components/my-collection';
import MyLayout from '@/components/header/my-layout';

const page = () => {
  return (
    <div className='min-h-screen'>
      <MyLayout/>
     <MyCollection/>

    </div>
  )
}

export default page
