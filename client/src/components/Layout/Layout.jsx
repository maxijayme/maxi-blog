import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'
import Navbar from '../Navbar/Navbar.jsx'
function Layout({children, enablePostBtns=false, entryData ={}}) { 
  return (
    <>
      <Header/>
      <Navbar enablePostBtns={enablePostBtns} entryData={entryData}/>
          <main className='container mx-auto flex flex-col justify-center'>
            {children}
          </main>
      <Footer/>
    </>
  )
}

export default Layout