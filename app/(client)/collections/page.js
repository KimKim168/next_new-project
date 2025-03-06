import React from 'react'
import MyCollection from '@/components/my-collection';
import MyBaseHeader from '@/components/header/my-base-header';

const page = () => {
  return (
    <div className='min-h-screen'>
      <MyBaseHeader/>
     <MyCollection/>
    </div>
  )
}

export default page
