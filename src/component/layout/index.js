import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div>
      <Header/>

      <div className='flex'>
        <div className='w-[15%]'>
          <Sidebar/>
        </div>
        <main className='w-[85%]'>
            {children}
        </main>
      </div>

      <Footer/>
    </div>
  )
}

export default Layout
