import React from 'react'
import MyView from './components/my-view';
import MyLayout from '@/components/header/my-layout';

const page = () => {
  return (
    <div className='min-h-screen'>
     <MyLayout/>
     <MyView/>

    </div>
  )
}

export default page
