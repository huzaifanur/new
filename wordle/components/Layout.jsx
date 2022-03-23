import React from 'react'
import Header from './header/Header'
import Sidebar from './sidebar/sidebar'
function Layout({ children, auth }) {
  return (
    <div className="flex w-screen">
      <div className="">
        <Sidebar />
      </div>
      <div className="w-full">
        <div className="w-full">
          <Header />
        </div>
        <div className="w-full">{children}</div>
      </div>
    </div>
  )
}

export default Layout
