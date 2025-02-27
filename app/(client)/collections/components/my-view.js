import MyLayout from '@/components/header/my-layout';
import React from 'react';

const MyView = () => {
  return (
    <>
    <MyLayout/>
    <div className='flex max-w-screen-2xl mx-auto lg:px-20'>
      {/* Main Content */}
      <div className=' flex-1 p-6 xl:pl-20'>
        <div className='flex flex-col '>
            <div>
            <h1 className='text-2xl font-bold mb-4'>Good to Great: Why Some Companies Make the Leap...And Others Don't</h1>
           
            </div>
        <img 
          src='/assets/images/book4.webp' 
          alt='Placeholder' 
          className='w-[50%] h-auto aspect-[6/9] rounded-lg shadow-md my-5'
        />
         <p className='text-gray-700 mb-2 text-xl'>
            Becoming good at reading requires a combination of consistent practice and the right approach. Start by choosing materials that genuinely interest you, as this makes reading enjoyable and keeps you motivated. Set aside dedicated time each day to read, even if it’s just a few pages, to build a habit. Improve your comprehension by reading actively—highlight key points, take notes, or summarize what you’ve read to reinforce understanding. Expanding your vocabulary through context or by looking up unfamiliar words also enhances your reading skills. Lastly, challenge yourself by exploring different genres and more complex texts over time to broaden your knowledge and adaptability as a reader.
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

export default MyView;