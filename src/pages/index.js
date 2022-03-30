import tinytime from 'tinytime'
import Link from 'next/link'
import Head from 'next/head'
import getAllPostPreviews from '@/getAllPostPreviews'
import twitterCard from '@/img/twitter-card.png'

const posts = getAllPostPreviews()

const postDateTemplate = tinytime('{MMMM} {DD}, {YYYY}')

export default function Home() {
  return (
    <div className="divide-y divide-gray-200">
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@alexandromtzg" />
        <meta name="twitter:creator" content="@alexandromtzg" />
        <meta name="twitter:title" content="Blog – alexandro.dev" />
        <meta
          name="twitter:description"
          content="Dev tips, advice and stories from @alexandromtzg."
        />
        <meta name="twitter:image" content={`https://alexandro.dev${twitterCard}`} />
        <meta property="og:url" content="https://alexandro.dev" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Blog – Tailwind CSS" />
        <meta
          property="og:description"
          content="Dev tips, advice and stories from @alexandromtzg."
        />
        <meta property="og:image" content={`https://alexandro.dev${twitterCard}`} />
        <title>Blog - alexandro.dev</title>
        <meta name="description" content="Dev tips, advice and stories from @alexandromtzg." />
      </Head>

      <div className="pt-6 pb-8 space-y-2 md:space-y-5">
        {/* <h1 className="text-3xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-3xl md:leading-14">
          Blog
        </h1> */}
        <p className="text-lg leading-7 text-gray-500">
          I'm{' '}
          <a
            target="_blank"
            href="https://twitter.com/alexandromtzg"
            className="underline text-gray-500 hover:text-gray-800"
          >
            @AlexandroMtzG
          </a>
          , full-stack developer.
        </p>
        <p className="text-lg leading-7 text-gray-500">
          These are the main tools I use:{' '}
          <a
            target="_blank"
            href="https://remix.run/"
            className="text-gray-800 font-normal hover:text-gray-700 hover:underline"
          >
            Remix
          </a>
          ,{' '}
          <a
            target="_blank"
            href="https://reactjs.org/"
            className="text-blue-700 font-normal hover:text-blue-700 hover:underline"
          >
            {' '}
            React
          </a>
          ,{' '}
          <a
            target="_blank"
            href="https://tailwindcss.com"
            className="text-teal-500 font-normal hover:text-teal-500 hover:underline"
          >
            {' '}
            Tailwind CSS
          </a>
          ,{' '}
          <a
            target="_blank"
            href="http://aka.ms/net"
            className="text-purple-800 font-normal hover:text-purple-700 hover:underline"
          >
            .NET
          </a>
          ,{' '}
          <a
            target="_blank"
            href="https://vuejs.org"
            className="text-green-800 font-normal hover:text-green-800 hover:underline"
          >
            {' '}
            Vue
          </a>
          ,{' '}
          <a
            target="_blank"
            href="https://svelte.dev/"
            className="text-orange-800 font-normal hover:text-orange-800 hover:underline"
          >
            {' '}
            Svelte
          </a>
          ,{' '}
          <a
            target="_blank"
            href="https://www.postgresql.org"
            className="text-blue-800 font-normal hover:text-blue-700 hover:underline"
          >
            {' '}
            Postgres
          </a>
          ,{' '}
          <a
            target="_blank"
            href="https://vercel.com"
            className="text-gray-800 font-normal hover:text-gray-700 hover:underline"
          >
            {' '}
            Vercel
          </a>
          ,{' '}
          <a
            target="_blank"
            href="https://supabase.io/"
            className="text-green-800 font-normal hover:text-green-900 hover:underline"
          >
            {' '}
            Supabase
          </a>
          ,{' '}
          <a
            target="_blank"
            href="https://prisma.io/"
            className="text-gray-800 font-normal hover:text-gray-900 hover:underline"
          >
            {' '}
            Prisma
          </a>
          ,{' '}
          <a
            target="_blank"
            href="https://www.heroku.com"
            className="text-purple-800 font-normal hover:text-purple-900 hover:underline"
          >
            {' '}
            Heroku
          </a>{' '}
          and{' '}
          <a
            target="_blank"
            href="https://aws.amazon.com/lightsail"
            className="text-yellow-800 font-normal hover:text-yellow-500 hover:underline"
          >
            {' '}
            Lightsail
          </a>
          .
        </p>
      </div>
      <ul className="divide-y divide-gray-200">
        {posts.map(({ link, module: { default: Component, meta } }) => {
          return (
            <li key={link} className="py-12">
              <article className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                <dl>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base leading-6 font-normal text-gray-500">
                    <time dateTime={meta.date}>{postDateTemplate.render(new Date(meta.date))}</time>
                  </dd>
                </dl>
                <div className="space-y-5 xl:col-span-3">
                  <div className="space-y-6">
                    <h2 className="text-2xl leading-8 font-bold tracking-tight">
                      <Link href={link}>
                        <a className="text-gray-900">{meta.title}</a>
                      </Link>
                    </h2>
                    <div className="prose max-w-none text-gray-500">
                      <Component />
                    </div>
                  </div>
                  <div className="text-base leading-6 font-normal">
                    <Link href={link}>
                      <a
                        className="text-gray-500 hover:text-gray-800"
                        aria-label={`Read "${meta.title}"`}
                      >
                        Read more &rarr;
                      </a>
                    </Link>
                  </div>
                </div>
              </article>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
