import Link from 'next/link'
import icon from '../img/icon.png'
import logo from '../img/logo.png'

function TailwindMark({ className }) {
  return <img alt="Icon" className={className} src={icon} />
}
function TailwindLogo({ className }) {
  return <img alt="Icon" className={className} src={logo} />
}

export default function Header() {
  return (
    <header className="flex justify-between items-center py-10">
      <div>
        <Link href="/">
          <a aria-label="Tailwind CSS Blog">
            <TailwindMark className="h-9 sm:hidden" />
            {/* <TailwindLogo className="hidden sm:block h-9" /> */}
            <div className="hidden sm:block font-extrabold text-2xl">alexandro.dev</div>
          </a>
        </Link>
      </div>
      <div className="text-base leading-5 flex space-x-4">
        <a
          target="_blank"
          href="https://alexandromg.gumroad.com/"
          className="font-medium text-gray-500 hover:text-gray-700"
        >
          <div className="flex space-x-2 items-center">
            <div>My SaaS kits</div>
            <img
              className="h-4 w-4"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAC0ElEQVRIic2VX2jWZRTHP+f5/cb2PK8MXJJuTmFRGBTMXdhFGHThnwRF8MILI1BESsJKwnJC8BKomIPBFP+wLhSCLLWuIrGbwSRwXZQsiRBUJIyM5k3o3v2e5xwv3tdtKttrbkLn5jy/c85zznOe8/19H2EW5aedK54rFcVXTSku8VZ8seDY0LsC0Ha8Z15zMbbDa1oSNLlgBT5FSinhtcBbJKSETwUljXirrkOKeE2UavE+xc6gadAX8VCg+DZo+iBv6etrzlNlCJGO6jkM7L4yrGbCjIllLaZmMRt3g9nxjpHWX/9qufE3aEvuGuNalA5M+s04KCbJJJFywY0qgkOdkhUOh2EuQ11BFjOQiGU5eYw4SSDShXDy2rybu4Nyc7ShciZ3uIWQAD33y/ufXJnhGK5eeufVQTNZPN/iJTlyuchnmPAR6Tz24y3g1v1vN9sFHpanXqDuFW3dv/P5Jh3rDim+5DXmQSNeq7AN4xB+wHYnpHihJA37nj0y8O+0Bd488FG7aWUImPuo1x5QE3gGg9dSutMFrJm2gFraZDBXRD4uaWtPuVzWeh1f2/x6k3k7J8gb/2xZtqjeDNoARGXgcZIDdJwYGDXkZ4C8Qdv+3ygql8t1908bYGK3AZKkFx/29Xdv3PvC3eG73+xaf/37D9ctnyrHtEMWszNAtyAnd3369l6vcawGU7EUn1H0FcRWCXoYWPqfO/hyd+9lM7dSTM4DY5NcmWCjjeTXxdxVYM4TdQBwYk/vILB6ss1APt+z8WyB/pljZsLWqfY/0ZAFbNu+rzeouS5yt3hNz3enpoqdEZu+9dnp3+vFPP3/wIwRAMMtmq2kYtJe1dltaenva58TK78FjY0+xeGgyYIV+BgJNaYMmgipoEkjj8GmjT7Fl4PG4fmtF5fmI9ve+6P56MF1hvQCnWDZZIasvv828caPy5RsWkH4QSzbLmX0HkjybcXIT92rAAAAAElFTkSuQmCC"
            />
          </div>
        </a>
        {/* <a
          target="_blank"
          href="https://www.getrevue.co/profile/alexandromtzg"
          className="font-medium text-gray-500 hover:text-gray-700"
        >
          <div className="flex space-x-2 items-center">
            <div>Newsletter</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </div>
        </a> */}

        <a
          target="_blank"
          href="https://twitter.com/alexandromtzg"
          className="font-medium text-blue-500 hover:text-blue-700 truncate"
        >
          <div className="flex space-x-2 items-center">
            <div>Follow me</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              className="h-5 w-5"
              fill="currentColor"
            >
              {' '}
              <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"></path>
            </svg>
          </div>
        </a>
      </div>
    </header>
  )
}
