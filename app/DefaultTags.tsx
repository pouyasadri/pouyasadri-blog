import Script from 'next/script'

export default function DefaultTags(){
  return(
    <>
      <meta charSet='utf-8' />
      <meta content='width=device-width, initial-scale=1' name='viewport' />
      <link rel='icon' href='/favicon.ico' />
      <meta name='author' content='Pouyasadri' />
      <meta property='og:url' content='https://blog.pouyasadri.com/' />
      <meta property='og:type' content='BlogPosting' />
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
    </>
  )
}
