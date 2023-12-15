import Image from 'next/image'
import Link from 'next/link'
import localFont from 'next/font/local'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const myFont = localFont({src: './SourceSansPro-Black.ttf'})

export default function Home() {
  return (
    <main className={`flex min-h-screen h-auto bg-home-background bg-cover bg-center ${myFont.className}`}>
      {/* navigation */}
      <div className=' max-w-[1206px] w-[90%] mx-auto py-5'>
        <nav className='flex items-center justify-between'>
          <h2>@rnl_dev</h2>
          <ul className='flex items-center gap-6'>
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <Link href="/">Projects</Link>
            </li>
            <li>
              <Link href="/">Skills</Link>
            </li>
            <li>
              <Link href="/">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </main>
  )
}
