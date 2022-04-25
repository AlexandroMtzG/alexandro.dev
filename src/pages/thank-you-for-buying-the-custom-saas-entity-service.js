import { useState } from 'react'
export default function ThankYou({ actionUrl }) {
  const usersOptions = ['1', '2 - 3', '4 - 10', '11 - 25', '26 - 50', '51 - 100', '+100']
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [organization, setOrganization] = useState('')
  const [users, setUsers] = useState('')
  const [comments, setComments] = useState('')
  return (
    <div>
      <div className="bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:flex-col sm:align-center">
            <div className="relative max-w-2xl mx-auto py-12 sm:py-6 w-full overflow-hidden px-2">
              <svg
                className="absolute left-full transform translate-x-1/2"
                width="404"
                height="404"
                fill="none"
                viewBox="0 0 404 404"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="85737c0e-0916-41d7-917f-596dc7edfa27"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="4"
                      height="4"
                      className="text-gray-200 dark:text-black"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
              </svg>
              <svg
                className="absolute right-full bottom-0 transform -translate-x-1/2"
                width="404"
                height="404"
                fill="none"
                viewBox="0 0 404 404"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="85737c0e-0916-41d7-917f-596dc7edfa27"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="4"
                      height="4"
                      className="text-gray-200 dark:text-black"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
              </svg>
              <div className="text-center">
                <h1 className="text-3xl font-extrabold tracking-tight text-gray-800 dark:text-slate-200 sm:text-4xl">
                  Thank you!
                </h1>
                <p className="mt-4 text-lg leading-6 text-gray-600">
                  Send me your entity requirements using form below, and I'll get back to you as
                  soon as possible. (Or send me an email at{' '}
                  <span className=" font-medium border-b border-blue-300 border-dashed select-all">
                    alex.martinez@absys.com.mx
                  </span>
                  ).
                </p>
              </div>
              <div className="mt-6">
                <form
                  action={actionUrl}
                  method="POST"
                  className="mt-9 grid grid-cols-1 gap-x-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                >
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-900 dark:text-slate-300"
                    >
                      GumRoad email
                      {<span className="ml-1 text-red-500">*</span>}
                    </label>
                    <div className="mt-1">
                      <input
                        required
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value)
                        }}
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="bg-gray-50 border border-gray-200 rounded-md dark:bg-gray-900 text-gray-800 dark:text-slate-200 appearance-none rounded-none relative block w-full px-3 py-2 border-gray-300 dark:border-gray-600 placeholder-gray-500 focus:outline-none focus:ring-indigo-300 focus:border-indigo-300 focus:z-10 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <div className="flex justify-between">
                      <label
                        htmlFor="requirements"
                        className="block text-sm font-medium text-gray-900 dark:text-slate-300"
                      >
                        Requirements
                        {<span className="ml-1 text-red-500">*</span>}
                      </label>
                    </div>
                    <div className="mt-1">
                      <textarea
                        required
                        value={comments}
                        onChange={(e) => {
                          setComments(e.target.value)
                        }}
                        id="requirements"
                        name="requirements"
                        aria-describedby="requirements_description"
                        rows={8}
                        placeholder={`1. Explain the Entity by sending a list of:
    - Pages/URLs (with mockups, if any).
    - Features & Permissions per entity.

2. Choose any prisma-supported database. Default is PostgreSQL on Supabase.

3. Choose a deployment platform. Default is Vercel.`}
                        className="bg-gray-50 border border-gray-200 rounded-md dark:bg-gray-900 text-gray-800 dark:text-slate-200 appearance-none rounded-none relative block w-full px-3 py-2 border-gray-300 dark:border-gray-600 placeholder-gray-500 focus:outline-none focus:ring-indigo-300 focus:border-indigo-300 focus:z-10 sm:text-sm"
                      ></textarea>
                    </div>
                  </div>

                  <div className="text-right sm:col-span-2">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-sm text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Send requirements
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  return {
    props: {
      actionUrl: process.env.INTEGRATIONS_CONTACT_FORMSPREE?.toString() ?? '',
    },
  }
}
