import Head from 'next/head'
import PageTitle from '@/components/PageTitle'
import tinytime from 'tinytime'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { MDXProvider } from '@mdx-js/react'

const mdxComponents = {
  pre: ({ className, ...props }) => (
    <pre className={`${className} rounded-md bg-gray-800 py-3 px-4 overflow-x-auto`} {...props} />
  ),
  'pre.code': ({ className, ...props }) => (
    <code className={`${className} text-gray-200`} {...props} />
  ),
}

const postDateTemplate = tinytime('{dddd}, {MMMM} {DD}, {YYYY}')

export default function Post({ meta, children, posts }) {
  const router = useRouter()
  const postIndex = posts.findIndex((post) => post.link === router.pathname)
  const previous = posts[postIndex + 1]
  const next = posts[postIndex - 1]

  return (
    <article className="xl:divide-y xl:divide-gray-200">
      <Head>
        <title>{meta.title} – Tailwind CSS</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@tailwindcss" />
        <meta name="twitter:creator" content="@tailwindcss" />
        <meta name="twitter:title" content={`${meta.title} – Tailwind CSS`} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={`https://alexandro.dev${meta.image}`} />
        <meta property="og:url" content={`https://alexandro.dev${router.pathname}`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${meta.title} – Tailwind CSS`} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={`https://alexandro.dev${meta.image}`} />
        <meta name="description" content={meta.description}></meta>
      </Head>
      <header className="pt-6 xl:pb-10">
        <div className="space-y-1 text-center">
          <dl className="space-y-10">
            <div>
              <dt className="sr-only">Published on</dt>
              <dd className="text-base leading-6 font-medium text-gray-500">
                <time dateTime={meta.date}>{postDateTemplate.render(new Date(meta.date))}</time>
              </dd>
            </div>
          </dl>
          <div>
            <PageTitle>{meta.title}</PageTitle>
          </div>
        </div>
      </header>
        
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
          <div className="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
            <svg className="absolute top-12 left-full transform translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
              <defs>
                <pattern id="74b3fd99-0a6f-4271-bef2-e80eeafdf357" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="404" height="384" fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
            </svg>
            <svg className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
              <defs>
                <pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="404" height="384" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
            </svg>
            <svg className="absolute bottom-12 left-full transform translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
              <defs>
                <pattern id="d3eb07ae-5182-43e6-857d-35c643af9034" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="404" height="384" fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
            </svg>
          </div>
        </div>

      <div
        className="divide-y xl:divide-y-0 divide-gray-200 xl:grid xl:grid-cols-4 xl:col-gap-6 pb-16 xl:pb-20"
        style={{ gridTemplateRows: 'auto 1fr' }}
      >
        <dl className="pt-6 pb-10 xl:pt-11 xl:border-b xl:border-gray-200">
          <dt className="sr-only">Authors</dt>
          <dd>
            <ul className="flex justify-center xl:block space-x-8 sm:space-x-12 xl:space-x-0 xl:space-y-8">
              {meta.authors.map((author) => (
                <li key={author.twitter} className="flex items-center space-x-2">
                  <img src={author.avatar} alt="" className="w-10 h-10 rounded-full" />
                  <dl className="text-sm font-medium leading-5 whitespace-no-wrap">
                    <dt className="sr-only">Name</dt>
                    <dd className="text-gray-900">{author.name}</dd>
                    <dt className="sr-only">Twitter</dt>
                    <dd>
                      <a
                        href={`https://twitter.com/${author.twitter}`}
                        className="text-teal-500 hover:text-teal-600"
                      >
                        {author.twitter}
                      </a>
                    </dd>
                  </dl>
                </li>
              ))}
            </ul>
          </dd>
        </dl>
        <div className="divide-y divide-gray-200 xl:pb-0 xl:col-span-3 xl:row-span-2">
          <div className="prose max-w-none pt-10 pb-8">
            <MDXProvider components={mdxComponents}>{children}</MDXProvider>
          </div>
          {meta.discussion && (
            <div className="pt-6 pb-16">
              <p>
                Want to read more posts like this?{' '}
                <a target="_blank" href={meta.discussion} className="font-medium text-teal-500 hover:text-teal-600">
                  Subscribe to my newsletter &rarr;
                </a>
              </p>
            </div>
          )}
        </div>
        <footer className="text-sm font-medium leading-5 divide-y divide-gray-200 xl:col-start-1 xl:row-start-2">
          {(next || previous) && (
            <div className="space-y-8 py-8">
              {next && (
                <div>
                  <h2 className="text-xs tracking-wide uppercase text-gray-500">Next Article</h2>
                  <div className="text-teal-500 hover:text-teal-600">
                    <Link href={next.link}>
                      <a>{next.title}</a>
                    </Link>
                  </div>
                </div>
              )}
              {previous && (
                <div>
                  <h2 className="text-xs tracking-wide uppercase text-gray-500">
                    Previous Article
                  </h2>
                  <div className="text-teal-500 hover:text-teal-600">
                    <Link href={previous.link}>
                      <a>{previous.title}</a>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          )}
          <div className="pt-8">
            <Link href="/">
              <a className="text-teal-500 hover:text-teal-600">&larr; Back to the blog</a>
            </Link>
          </div>
        </footer>
      </div>
    </article>
  )
}
