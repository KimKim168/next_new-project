import React from 'react'
import MyView from './components/my-view';
import MyBaseHeader from '@/components/header/my-base-header';

const page = () => {
  return (
    <div className='min-h-screen'>
     <MyBaseHeader/>
     <MyView/>

    </div>
  )
}

export default page
