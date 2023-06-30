import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'
import Navbar from '../Navbar/Navbar.jsx'
import { useState } from 'react'
function Layout({children, enablePostBtns=false, entryData ={}}) { 
  return (
    <>
      <Header/>
      <Navbar enablePostBtns={enablePostBtns} entryData={entryData}/>
          <main className='container-fluid h-100'>
            {children}
          </main>
      <Footer/>
    </>
  )
}

export default Layout