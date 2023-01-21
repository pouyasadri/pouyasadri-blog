import Image from 'next/image'
import Link from 'next/link'
import localFont from '@next/font/local'

const surt = localFont({
  src: './fonts/Agustina.woff',
  variable:'--font-inter',
  display: 'swap'
})

function Header() {
  return (
    <header className='flex items-center justify-between space-x-2 font-bold px-10 py-10'>
      <div className='flex items-center space-x-2'>
        <Link href='/'>
          <h1 className={`${surt.variable} font-agustina text-[#000000] font-bold text-3xl`}>{`<Pouya Sadri />`}</h1>
        </Link>
      </div>
    </header>
  )
}

export default Header
