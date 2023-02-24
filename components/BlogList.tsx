import Image from 'next/image'
import urlFor from '../lib/urlFor'
import {ArrowUpRightIcon} from '@heroicons/react/24/solid'
import ClientSideRoute from './ClientSideRoute'
import BreadCrumb from './BreadCrumb'

type Props = {
  posts: Post[];
  lang: string;
};

function BlogList({posts,lang}: Props) {
  return (
    <div>
      <BreadCrumb title={''} />
      <hr className='border-[#8d99ae] mb-10' />
      <div className='grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24'>
        {posts.map(post => (
          <ClientSideRoute key={post._id} route={`${lang}/post/${post.slug.current}`}>
            <div className='flex flex-col group cursor-pointer'>
              <div className='relative w-full h-80 drop-shadow-xl
          group-hover:scale-x-105 transition-transform duration-200 ease-out'>
                <Image className='object-fill object-left lg:object-center' src={urlFor(post.mainImage).url()}
                       alt={post.author.name} fill />
                <div className='absolute bottom-0 w-full bg-opacity-20
              bg-[#000000] backdrop-blur-lg group-hover:scale-y-100 rounded drop-shadow-lg text-white p-5 flex justify-between'>
                  <div className='text-[#E6E6E6]'>
                    <p className='font-bold '>{post.title}</p>
                    <p>
                      {
                        new Date(post._createdAt).toLocaleDateString(
                          'en-US', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric'
                          }
                        )
                      }
                    </p>
                  </div>
                  <div className='flex flex-col md:flex-row md:flex-wrap gap-y-2 md:gap-x-2 md:ml-5 items-center'>
                    {
                      post.categories.map(category => (
                        <div key={category._id}
                             className='bg-[#fca311] text-center text-black px-3 py-1 rounded-full text-sm md:text-xs font-semibold '>
                          <p className='text-[#14213d]'>{category.title}</p>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
              <div className='mt-5 flex-1 '>
                <p className='underline text-lg font-bold text-[#14213d]'>{post.title}</p>
                <p className='line-clamp-2 text-gray-500 text-[#5A6377]'>{post.description}</p>
              </div>
              <p className='mt-5 font-bold flex items-center group-hover:underline text-[#14213d]'>
                Read Post
                <ArrowUpRightIcon className='ml-2 h-4 w-4' />
              </p>
            </div>
          </ClientSideRoute>
        ))}
      </div>
      {posts.length > 20 ?
        <nav aria-label='Page navigation example' className='justify-center text-center mx-auto p-5'>
          <ul className='inline-flex -space-x-px'>
            <li>
              <a href='#'
                 className='px-3 py-2 ml-0 leading-tight text-[#14213d] bg-[#8d99ae] border border-[#5A6377] rounded-l-lg hover:bg-[#E5E5E5] hover:text-[#8d99ae]'>Previous</a>
            </li>
            <li>
              <a href='#'
                 className='px-3 py-2 ml-0 leading-tight text-[#14213d] bg-[#8d99ae] border border-[#5A6377]  hover:bg-[#E5E5E5] hover:text-[#8d99ae]'>1</a>
            </li>
            <li>
              <a href='#'
                 className='px-3 py-2 ml-0 leading-tight text-[#14213d] bg-[#8d99ae] border border-[#5A6377] hover:bg-[#E5E5E5] hover:text-[#8d99ae]'>2</a>
            </li>
            <li>
              <a href='#' aria-current='page'
                 className='px-3 py-2 ml-0 leading-tight text-[#14213d] bg-[#8d99ae] border border-[#5A6377] hover:bg-[#E5E5E5] hover:text-[#8d99ae]'>3</a>
            </li>
            <li>
              <a href='#'
                 className='px-3 py-2 ml-0 leading-tight text-[#14213d] bg-[#8d99ae] border border-[#5A6377] hover:bg-[#E5E5E5] hover:text-[#8d99ae]'>4</a>
            </li>
            <li>
              <a href='#'
                 className='px-3 py-2 leading-tight text-[#14213d] bg-[#8d99ae] border border-[#5A6377] rounded-r-lg hover:bg-[#E5E5E5] hover:text-[#8d99ae]'>Next</a>
            </li>
          </ul>
        </nav> : null
      }
    </div>
  )
}

export default BlogList
