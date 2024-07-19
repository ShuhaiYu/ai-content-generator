import { UserButton } from '@clerk/nextjs'
import { Search } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <div className='flex justify-between items-center p-5 shadow-sm border-b-2 bg-white'>
        <div className='flex gap-2 items-center p-2 border rounded-md max-w-lg'>
            <Search size={24} />
            <input type="text" placeholder="Search" className="border-none bg-transparent outline-none" />
        </div>
        <div className='flex gap-5 items-center'>
            <h2 className="bg-primary p-1 rounded-full text-xs text-white px-2">Join Membership for $4.99/Month</h2>
            <UserButton />
        </div>
    </div>
  )
}

export default Header