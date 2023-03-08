import {previewData} from 'next/headers'
import {groq} from 'next-sanity'
import {client} from '../../../lib/sanity.client'
import {PreviewSuspense} from '@sanity/preview-kit'
import BlogList from '../../../components/BlogList'
import PreviewBlogList from '../../../components/PreviewBlogList'
import Head from 'next/head'
import Script from 'next/script'

type Props = {
  params: {
    lang: string;
  };
};
const query = groq`
  *[_type == 'post']{
    ...,
    author->,
    categories[]->
    
  }| order(_createdAt desc)`
const french_query = groq`
  *[_type == 'french_post']{
    ...,
    author->,
    categories[]->
    
  }| order(_createdAt desc)`
export const revalidate = 120
export default async function HomePage({params: {lang}}: Props) {
  if (previewData()) {
    return (
      <PreviewSuspense fallback={
        <div role='status'>
          <p className='text-center text-lg animate-pulse text-[#F7AB0A]'>
            Loading Preview Data ...
          </p>
        </div>
      }>
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    )
  }
  const posts = await client.fetch(lang === 'en' ? query : french_query)
  return (
    <>
    <div>
      <Head>
        <meta charSet='utf-8' />
        <meta content='width=device-width, initial-scale=1' name='viewport' />
        <link rel='icon' href='/favicon.ico' />
        <meta name='author' content='Pouyasadri' />
        <meta property='og:url' content='https://blog.pouyasadri.com/' />
        <meta property='og:type' content='website' />
        <link rel='apple-touch-icon' sizes='180x180' href='/icons/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='192x192' href='/icons/android-chrome-192x192.png' />
        <link rel='icon' type='image/png' sizes='512x512' href='/icons/android-chrome-512x512.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/icons/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/icons/favicon-16x16.png' />
        <link rel='manifest' href='/site.webmanifest' />
        <meta name='msapplication-TileColor' content='#603cba' />
        <meta name='theme-color' content='#000000' />
        <meta name='msapplication-TileImage' content='/icons/mstile-150x150' />
        <link rel='manifest' href='%PUBLIC_URL%/site.webmanifest' />
        <Script>
          {`window.dataLayer = window.dataLayer || [];

            function gtag() {
            dataLayer.push(arguments);
          }

            gtag('js', new Date());

            gtag('config', 'G-4P1CLNYVNX');`}
        </Script>
        <Script>
          {`(function(c, l, a, r, i, t, y) {
              c[a] = c[a] || function() {
                  (c[a].q = c[a].q || []).push(arguments)
              }
              t = l.createElement(r)
              t.async = 1
              t.src = 'https://www.clarity.ms/tag/' + i + '?ref=bwt'
              y = l.getElementsByTagName(r)[0]
              y.parentNode.insertBefore(t, y)
          })(window, document, 'clarity', 'script', 'cn7jcfr1te');`}
        </Script>
      </Head>
      <BlogList posts={posts} lang={lang} />
    </div>
    </>
  )
}

