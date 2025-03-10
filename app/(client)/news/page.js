import React from 'react'
import MyView from './components/my-view';
import MyBaseHeader from '@/components/header/my-base-header';
import MyTopHeader from '@/components/header/my-top-header';

const page = () => {
  return (
    <div className='min-h-screen'>
      <MyTopHeader/>
      <MyBaseHeader/>
      {/*End nav and slide */}
     <MyView/>

    </div>
  )
}

export default page
