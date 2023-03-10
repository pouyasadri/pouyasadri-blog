import {groq} from 'next-sanity'
import {client} from '../../../../../lib/sanity.client'
import Image from 'next/image'
import urlFor from '../../../../../lib/urlFor'
import {PortableText} from '@portabletext/react'
import {RichTextComponents} from '../../../../../components/RichTextComponents'
import BreadCrumb from '../../../../../components/BreadCrumb'

type Props = {
  params: {
    lang: string;
    slug: string;
  };
};
export const revalidate = 120

export async function generateStaticParams() {
  const query = groq`
  *[_type=='post']
  {
  slug
  }
  `
  const slugs: Post[] = await client.fetch(query)
  const slugRoutes = slugs.map((slug) => slug.slug.current)
  return slugRoutes.map((slug) => ({
    slug,
    lang : 'en'
  }))
}

async function Post({params: {slug, lang}}: Props) {
  const query = groq`
  *[_type=='post' && slug.current == $slug][0]
  {
  ...,
  author->,
  categories[]->
  }
  `
  const french_query = groq`
  *[_type=='french_post' && slug.current == $slug][0]
  {
  ...,
  author->,
  categories[]->
  }
  `
  const post: Post = await client.fetch(lang === 'en' ? query : french_query, {slug})
  return (
    <div>
      <BreadCrumb lang={lang} title={post.title} />
      <article className='px-10 pb-28'>
        <section className='space-y-2 border border-[#fca311] text-white'>
          <div className='relative min-h-56 flex flex-col md:flex-row justify-between'>
            <div className='absolute top-0 w-full h-full opacity-10 blur-sm p-10'>
              {urlFor(post.mainImage).url() &&
                <Image src={urlFor(post.mainImage).url()} alt={post.author.name}
                       className='object-cover object-center mx-auto' fill />
              }
            </div>
            <section className='p-5 bg-[#fca311] w-full'>
              <div className='flex flex-col md:flex-row justify-between gap-y-5 text-[#14213d]'>
                <div>
                  <h1 className='text-4xl font-extrabold'>{post.title}</h1>
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
                <div className='flex items-center space-x-2'>
                  <Image className='rounded-full' src={urlFor(post.author.image).url()} alt={post.author.name}
                         height={40}
                         width={40} />
                  <div className='w-64'>
                    <h3 className='text-lg font-bold'>{post.author.name}</h3>
                    <div></div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className='italic pt-10 text-[#5A6377]'>
                  {post.description}
                </h2>
                <div className='flex items-center sm:flex-wrap sm:grid-cols-2 justify-end mt-auto space-x-2'>
                  {post.categories.map((category) => (
                    <p key={category._id}
                       className='bg-[#000000] text-[#fca311] px-3 py-1 rounded-full text-sm font-semibold mt-4'>
                      {category.title}
                    </p>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </section>
        <PortableText value={post.body}
                      components={RichTextComponents} />
      </article>
    </div>
  )
}

export default Post
