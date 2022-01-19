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
            <TailwindLogo className="hidden sm:block h-9" />
          </a>
        </Link>
      </div>
      <div className="text-base leading-5">
        <a
          target="_blank"
          href="https://twitter.com/alexandromtzg"
          className="font-medium text-gray-500 hover:text-gray-700"
        >
          Follow me &rarr;
        </a>
      </div>
    </header>
  )
}
