import React from 'react'
import {UserProfile} from '@clerk/nextjs'

function Settings
() {
  return (
    <div className='flex items-center justify-center h-full pt-5'>
        <UserProfile />
    </div>
  )
}

export default Settings
