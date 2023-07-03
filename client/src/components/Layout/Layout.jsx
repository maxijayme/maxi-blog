import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'
import Navbar from '../Navbar/Navbar.jsx'
function Layout({children, showComponent = true, enablePostBtns=false, entryData ={}}) { 
  return (
    <>
      <Header showComponent={showComponent}/>
      <Navbar showComponent={showComponent} enablePostBtns={enablePostBtns} entryData={entryData}/>
          <main className='container mx-auto flex flex-col justify-center h-fit'>
            {children}
          </main>
      <Footer/>
    </>
  )
}

export default Layout