import MyBaseHeader from '@/components/header/my-base-header';
import { BASE_API_URL, IMAGE_PAGES_URL } from '@/env';
import React from 'react';

const page = async ({params}) => {

    const { id } = await params;
    
    // console.log(id)

    const respone = await fetch(`${BASE_API_URL}/pages/${id}`);

    const data = await respone.json();
//    console.log(data)

  return (
    <>
    <MyBaseHeader/>
    <div className='flex max-w-screen-2xl mx-auto lg:px-20'>
      {/* Main Content */}
      <div className=' flex-1 p-6 xl:pl-20'>
        <div className='flex flex-col '>
            <div>
            <h1 className='text-2xl font-bold mb-4'>{data.name}</h1>
            </div>
        <img 
          src={`${IMAGE_PAGES_URL}${data.image}`} 
          alt='Placeholder' 
          className='w-[50%] h-auto aspect-[6/9] rounded-lg shadow-md my-5'
        />
         <p className='text-gray-700 mb-2 text-xl'>
            {data.description}
        </p>
        </div>
      </div>

      {/* Sticky Sidebar */}
      {/* <div className='bg-slate-600 hidden md:block md:w-64 h-screen sticky top-0'>
        <img 
          src='/assets/images/banner.png' 
          alt='Banner' 
          className='w-full h-full'
        />
        
      </div> */}
      <div className='w-72 my-24 space-y-4 hidden lg:block'>
      <img 
          src='/assets/images/banner1.png' 
          alt='Banner' 
          className='w-full object-cover'
        />
      <img 
          src='/assets/images/banner2.png' 
          alt='Banner' 
          className='w-full  object-cover'
        />
      </div>
    </div>
    </>
  );
};

export default page;