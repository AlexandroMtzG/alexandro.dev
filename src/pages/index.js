import tinytime from 'tinytime'
import Link from 'next/link'
import Head from 'next/head'
import getAllPostPreviews from '@/getAllPostPreviews'
import twitterCard from '@/img/twitter-card.jpg'

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
        <meta name="twitter:description" content="News content from the Tailwind CSS team." />
        <meta name="twitter:image" content={`https://alexandro.dev${twitterCard}`} />
        <meta property="og:url" content="https://alexandro.dev" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Blog – Tailwind CSS" />
        <meta property="og:description" content="News content from the Tailwind CSS team." />
        <meta property="og:image" content={`https://alexandro.dev${twitterCard}`} />
        <title>Blog – Tailwind CSS</title>
        <meta name="description" content="News content from the Tailwind CSS team." />
      </Head>
      <div className="pt-6 pb-8 space-y-2 md:space-y-5">
        {/* <h1 className="text-3xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          alexandro.dev
        </h1> */}
        <p className="text-lg leading-7 text-gray-500">
          I'm <a href="https://twitter.com/alexandromtzg" className="underline text-violet-600">@alexandromtzg</a>, full-stack developer, I have great admiration for the tailwind team, so I'm focused on building a better design for  <a className="underline" href="https://netcoresaas.com"
          target="_blank">netcoresaas.com</a>.
        </p>
        <p className="text-lg leading-7 text-gray-500">
          My favorite tools are .NET, Vue, TailwindCSS, PostgreSQL, Heroku and AWS LightSail.
        </p>
        <p className="text-lg leading-7 text-gray-500">
          Expect post related to those technologies and other stuff.
        </p>
      </div>
      <ul className="divide-y divide-gray-200">
        {posts.map(({ link, module: { default: Component, meta } }) => {
          return (
            <li key={link} className="py-12">
              <article className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                <dl>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base leading-6 font-medium text-gray-500">
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
                  <div className="text-base leading-6 font-medium">
                    <Link href={link}>
                      <a
                        className="text-teal-500 hover:text-teal-600"
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
