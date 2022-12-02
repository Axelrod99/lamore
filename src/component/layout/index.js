import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div>
      <Header/>

      <div className='flex'>
        <div className='w-1/5'>
          <Sidebar/>
        </div>
        <main className='w-4/5'>
            {children}
        </main>
      </div>
      <Footer/>
    </div>
  )
}

export default Layout
