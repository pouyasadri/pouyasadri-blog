import '../../styles/globals.css'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import BreadCrumb from '../../components/BreadCrumb'

export default function RootLayout({
                                     children
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html>
    <head />
    <body className='max-w-7xl mx-auto bg-[#E5E5E5]'>
    <Header />
    <Banner />
    {children}
    <Footer/>
    </body>
    </html>
  )
}
