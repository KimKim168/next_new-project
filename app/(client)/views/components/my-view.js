import React from 'react';

const MyView = () => {
  return (
    <div className='flex bg-red-100'>
      {/* Main Content */}
      <div className=' flex-1 p-6 xl:pl-20'>
        <div className='flex flex-col xl:flex-row'>
            <div>
            <h1 className='text-2xl font-bold mb-4'>Lorem Ipsum</h1>
            <p className='text-gray-700 mb-2'>
            Why do we use it?<br/>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </p>
            </div>
        <img 
          src='/assets/images/banner2.png' 
          alt='Placeholder' 
          className='w-full xl:w-[30%] h-auto rounded-lg shadow-md'
        />
        </div>
      </div>

      {/* Sticky Sidebar */}
      <div className='bg-slate-600 hidden md:block md:w-64 h-screen sticky top-0'>
        <img 
          src='/assets/images/banner.png' 
          alt='Banner' 
          className='w-full h-full'
        />
      </div>
    </div>
  );
};

export default MyView;