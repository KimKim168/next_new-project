import React from 'react'
import MyCollection from '@/components/my-collection';
import MyBaseHeader from '@/components/header/my-base-header';
import MyTopHeader from '@/components/header/my-top-header';

const page = () => {
  return (
    <div className='min-h-screen'>
      <MyTopHeader/>
      <MyBaseHeader/>
     <MyCollection/>
    </div>
  )
}

export default page
