import React from 'react'
import { MyLanguageSwitcher } from '../my-language-switcher'
import { Phone, User } from 'lucide-react'

const MyTopHeader = () => {
  return (
    <div className="flex items-center justify-end gap-2 max-w-screen-2xl px-5 sm:px-10 xl:px-20 mt-1">
    <MyLanguageSwitcher />
    <Phone width={15} height={15} />
    <p>010 775589 -</p>
    <div className='flex justify-center items-center '>
        <User width={19} height={19} />
        <a href="#"> Student Login</a>
    </div>
  </div>
  )
}

export default MyTopHeader
