import React from 'react';

const MyView2 = () => {
  return (
    <div className='flex max-w-screen-2xl mx-auto lg:px-20'>
      {/* Main Content */}
      <div className=' flex-1 p-6 xl:pl-20'>
        <div className='flex flex-col '>
            <div>
            <h1 className='text-2xl font-bold mb-4'>Cambodia Book Fair</h1>
           
            </div>
        <img 
          src='/assets/images/book2.webp' 
          alt='Placeholder' 
          className='w-full  h-auto rounded-lg shadow-md my-5'
        />
         <p className='text-gray-700 mb-2 text-xl'>
            The Cambodia Book Fair is an exciting event where all major bookshops come together to showcase and sell a wide variety of books. Taking place over three days, from the 19th to the 21st, at the stunning location of Koh Pich, the event is a paradise for book lovers to explore an incredible selection of books, discover new authors, and enjoy special promotions. Adding to the excitement, the book fair also features live shows from models, bringing a vibrant and entertaining atmosphere to the event. Don’t miss this celebration of literature, learning, and live performances in a lively and welcoming setting!
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
  );
};

export default MyView;