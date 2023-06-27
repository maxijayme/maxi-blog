import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'
import Navbar from '../Navbar/Navbar.jsx'
function Layout({children}) {  
  return (
    <>
      <Header/>
      <Navbar/>
          <main className='container-fluid h-100'>
            {children}
          </main>
      <Footer/>
    </>
  )
}

export default Layout