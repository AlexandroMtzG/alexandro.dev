import { useState } from 'react'
export default function Newsletter({ url }) {
  const [i, setI] = useState(0)
  function next() {
    if (i + 1 === names.length) {
      setI(0)
    } else {
      setI(i + 1)
    }
  }
  const names = [
    {
      website: 'saasrock.com',
      title: 'SaaS Rock 🪨',
    },
    {
      website: 'velozaas.com',
      title: 'Velozaas',
    },
    {
      website: 'velozsaas.com',
      title: 'Veloz SaaS',
    },
    {
      website: 'velozos.com',
      title: 'Veloz OS',
    },
    {
      website: 'velozify.com',
      title: 'Velozify',
    },
    {
      website: 'ixsaas.com',
      title: 'ixSaaS',
    },
  ]
  return (
    <div className="bg-white">
      <div className="mx-auto lg:flex lg:items-center px-2 py-2">
        <div className="lg:w-0 lg:flex-1">
          {/* <h2 className="text-lg font-extrabold text-gray-900">Get notified</h2> */}
          <p className="text-lg leading-7 text-gray-500 mt-3">
            I'm Alexandro 👋, currently building{' '}
            {/* <button
              onClick={next}
              // target="_blank"
              // rel="noreferrer"
              className="underline text-gray-800 hover:text-gray-800 focus:outline-none"
            >
              {names[i].title}
            </button> */}
            <a
              href="https://saasrock.com"
              target="_blank"
              className="text-gray-800 font-normal hover:text-gray-900 hover:border-blue-500 border-b border-dashed border-blue-300"
            >
              SaasRock
            </a>{' '}
            - a multi-tenant framework for SaaS apps, built with{' '}
            <a
              target="_blank"
              href="https://remix.run/"
              className="text-gray-800 font-normal hover:text-gray-900 hover:border-gray-500 border-b border-dashed border-gray-300"
            >
              Remix
            </a>
            ,{' '}
            <a
              target="_blank"
              href="https://tailwindcss.com"
              className="text-gray-800 font-normal hover:text-gray-900 hover:border-teal-500 border-b border-dashed border-teal-300"
            >
              {' '}
              Tailwind CSS
            </a>
            , and{' '}
            <a
              target="_blank"
              href="https://prisma.io"
              className="text-gray-800 font-normal hover:text-gray-900 hover:border-teal-500 border-b border-dashed border-teal-300"
            >
              {' '}
              Prisma
            </a>
            .{' '}
            <a
              target="_blank"
              href="https://alexandromg.gumroad.com/l/SaasRock"
              className="text-gray-800 font-normal hover:text-gray-900 hover:border-teal-500 border-b border-dashed border-teal-300"
            >
              Get it
            </a>{' '}
            before v1 launches 🚀.
          </p>
          {/* <p className="text-lg leading-7 text-gray-500 mt-6">
            This is my personal blog where I talk about some SaaS challenges I've come across, and
            how I overcame them. 
          </p> */}
        </div>
        <div className="mt-8 lg:mt-0 lg:ml-8">
          {/* <form className="sm:flex" action={url}>
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email-address"
              type="email"
              autoComplete="email"
              required
              className="w-full px-5 py-3 border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-1 focus:ring-gray-500 focus:border-gray-500 sm:max-w-xs rounded-md"
              placeholder="Enter your email"
            />
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                type="submit"
                className="w-full flex items-center justify-center py-3 px-5 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Get notified
              </button>
            </div>
          </form> */}
          {/* <a
            href="https://alexandromg.gumroad.com/"
            target="_blank"
            className="w-full flex items-center justify-center py-3 px-5 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Subscribe
          </a> */}
        </div>
      </div>
    </div>
  )
}
