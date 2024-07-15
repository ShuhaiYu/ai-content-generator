"use client"

import React from 'react'
import { useState } from 'react'
import SearchSeaction from './_components/SearchSeaction'
import ListSection from './_components/ListSection'

function Dashboard() {
  const [search, setSearch] = useState<String>('')
  return (
    <div>
      <div>
        <SearchSeaction onSearchInput={(value:string) => setSearch(value)} />
      </div>
      <div>
        <ListSection search={search}/>
      </div>
    </div>
  )
}

export default Dashboard