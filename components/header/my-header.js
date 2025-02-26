"use client";
import { usePathname } from 'next/navigation'
import React from 'react'

const MyHeader = () => {
  return (
    <div className='hidden lg:block'>
    <ul className="flex space-x-2 text-white">
      <li className="text-base border-r pr-2 border-white hover:underline hover:shadow-xl hover:cursor-pointer hover:underline-offset-4">Home</li>
      <li className="text-base border-r pr-2 border-white hover:underline hover:shadow-xl hover:cursor-pointer hover:underline-offset-4">About</li>
      <li className="text-base border-r pr-2 border-white hover:underline hover:shadow-xl hover:cursor-pointer hover:underline-offset-4">
        Cellections
      </li>
      <li className="text-base border-r pr-2 border-white hover:underline hover:shadow-xl hover:cursor-pointer hover:underline-offset-4">
        Resources
      </li>
      <li className="text-base border-r pr-2 border-white hover:underline hover:shadow-xl hover:cursor-pointer hover:underline-offset-4">Database</li>
      <li className="text-base border-r pr-2 border-white hover:underline hover:shadow-xl hover:cursor-pointer hover:underline-offset-4">
        Contac Us
      </li>
    </ul>
  </div>
  )
}

export default MyHeader
