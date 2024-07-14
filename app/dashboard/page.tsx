import React from 'react'
import SearchSeaction from './_components/SearchSeaction'
import ListSection from './_components/ListSection'

function Dashboard() {
  return (
    <div>
      <div>
        <SearchSeaction />
      </div>
      <div>
        <ListSection />
      </div>
    </div>
  )
}

export default Dashboard