import {groq} from 'next-sanity'
import {client} from '../lib/sanity.client'
import DefaultTags from '../app/DefaultTags'

type Props = {
  params: {
    lang:string;
    slug: string;
  };
};
export default async function Head({params: {slug,lang}}: Props) {

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
    <>
      <DefaultTags/>
      <title>{post.title}</title>
      <meta name='description'
            content={post.description} />
      <meta property="article:published_time" content={post._createdAt}/>
    </>
  )
}
