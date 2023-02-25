import '../../../styles/globals.css'
import Header from '../../../components/Header'
import Banner from '../../../components/Banner'
import Footer from '../../../components/Footer'
type RootLayoutProps = {
  children: React.ReactNode;
  params: {
    lang: string;
  };
};
export default function RootLayout({
                                     children,
                                     params,
                                   }: RootLayoutProps) {
  return (
    <html lang={params.lang}>
    <head />
    <body className='max-w-7xl mx-auto bg-[#E5E5E5]'>
    <Header />
    <Banner />
    {children}
    <Footer />
    </body>
    </html>
  )
}
