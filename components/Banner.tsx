import BreadCrumb from './BreadCrumb'

function Banner() {
  return (
    <div className='flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10'>
      <div>
        <h1 className='text-7xl text-[#14213d] sm:text-5xl'>PouyaSadri Daily Blog</h1>
        <h2 className='mt-5 md:mt-0'>
          Unlock the doors to an

          {' '}
          <span className='text-[#000000] underline decoration-4 decoration-[#fca311]'>Infinite Developer World</span>
          {' '}
          on the hottest developer blog around.
        </h2>
      </div>
      <p className='mt-5 md:mt-2 text-gray-400 max-w-sm text-[#5A6377] '>
        New product Features | The latest in technology | the weekly debugging
        nightmares & more!
      </p>
    </div>
  )
}

export default Banner
