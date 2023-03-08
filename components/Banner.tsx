import BreadCrumb from './BreadCrumb'

function Banner({lang}:{lang :String}) {
  return (
    <div className='flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10'>
      <div>
        <h1 className='text-7xl text-[#14213d] sm:text-5xl'>PouyaSadri Daily Blog</h1>
        {lang === 'en' ?
        <h2 className='mt-5 md:mt-0'>

          Discover a whole

          {' '}
          <span className='text-[#000000] underline decoration-4 decoration-[#fca311]'>New Coding Universe</span>
          {' '}
          and unlock the doors to
          {' '}
          <span className='text-[#000000] underline decoration-4 decoration-[#fca311]'>Infinite possibilities</span>
          {' '}
          today!

        </h2> :
          <h2 className='mt-5 md:mt-0'>
            Découvrez un nouvel

            {' '}
            <span className='text-[#000000] underline decoration-4 decoration-[#fca311]'>Univers de Codage</span>
            {' '}
            et ouvrez les portes des
            {' '}
            <span className='text-[#000000] underline decoration-4 decoration-[#fca311]'>possibilités Infinies</span>
            {' '}
            dès aujourd'hui !

          </h2>
        }
      </div>
      {lang === 'en'?
      <p className='mt-5 md:mt-2 text-gray-400 max-w-sm text-[#5A6377] '>
        New product Features | The latest in technology | the weekly debugging
        nightmares & more!
      </p> : <p className='mt-5 md:mt-2 text-gray-400 max-w-sm text-[#5A6377] '>
          Nouvelles fonctionnalités produit | Les dernières technologies | Les cauchemars de débogage hebdomadaires et plus encore !
        </p>
      }
    </div>
  )
}

export default Banner
