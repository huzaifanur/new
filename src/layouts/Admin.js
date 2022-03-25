import React from 'react'

// components

import AdminNavbar from '../components/Navbars/AdminNavbar'
import Sidebar from '../components/Sidebar/Sidebar.js'
import HeaderStats from '../components/Headers/HeaderStats.js'
import FooterAdmin from '../components/Footers/FooterAdmin.js'

export default function Admin({ children }) {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Sidebar />
      <div className="flex flex-col min-h-screen">
        <div className="relative md:ml-64 flex-grow bg-blueGray-100">
          <AdminNavbar />
          {/* Header */}
          <HeaderStats />
          <div className="  mx-auto w-full ">{children}</div>
        </div>
        <div className="z-50 relative left-28 ">
          <FooterAdmin />
        </div>
      </div>
    </div>
  )
}
