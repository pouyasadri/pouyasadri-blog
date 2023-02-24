import {groq} from 'next-sanity'
import {client} from '../../../../../lib/sanity.client'
import DefaultTags from '../../../../DefaultTags'

type Props = {
  params: {
    slug: string;
  };
};
export default async function Head({params: {slug}}: Props) {
  const query = groq`
  *[_type=='post' && slug.current == $slug][0]
  {
  ...,
  author->,
  categories[]->
  }
  `
  const post: Post = await client.fetch(query, {slug})
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
