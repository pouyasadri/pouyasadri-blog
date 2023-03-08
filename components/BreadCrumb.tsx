function BreadCrumb({title, lang}: {title: string, lang: String}) {
  return (
    <nav className='flex pl-10 pb-6' aria-label='Breadcrumb'>
      <ol className='inline-flex items-center space-x-1 md:space-x-3'>
        <li className='inline-flex items-center'>
          <a href='https://www.pouyasadri.com'
             className='inline-flex items-center text-sm font-medium text-[#5A6377] hover:text-[#fca311]'>
            <svg aria-hidden='true' className='w-4 h-4 mr-2' fill='currentColor' viewBox='0 0 20 20'
                 xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z'></path>
            </svg>
            {lang === 'en' ? 'Home' : 'Accueil'}
          </a>
        </li>
        <li>
          <div className='flex items-center'>
            <svg aria-hidden='true' className='w-6 h-6 text-[#5A6377]' fill='currentColor' viewBox='0 0 20 20'
                 xmlns='http://www.w3.org/2000/svg'>
              <path fillRule='evenodd'
                    d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                    clipRule='evenodd'></path>
            </svg>
            <a href={lang === 'en' ? 'https://blog.pouyasadri.com/en' : 'https://blog.pouyasadri.com/fr'}
               className='ml-1 text-sm font-medium text-[#5A6377] hover:text-[#fca311] md:ml-2'>Blogs</a>
          </div>
        </li>
        {title != '' ?
          <li aria-current='page'>
            <div className='flex items-center'>
              <svg aria-hidden='true' className='w-6 h-6 text-[#5A6377]' fill='currentColor' viewBox='0 0 20 20'
                   xmlns='http://www.w3.org/2000/svg'>
                <path fillRule='evenodd'
                      d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                      clipRule='evenodd'></path>
              </svg>
              <span className='ml-1 text-sm font-medium text-[#5A6377] md:ml-2 cursor-default'>{title}</span>
            </div>
          </li> : null
        }
      </ol>
    </nav>
  )
}

export default BreadCrumb
