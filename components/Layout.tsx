import {ReactNode,FC} from 'react'
import Link from "next/link"
import Head from "next/head"
import Image from "next/image"

interface Props {
    title:string,
    children:ReactNode
}

export const Layout:FC<Props> = ({title="nextjs",children}) => {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen text-gray-600  text-sm font-mono bg-hero-pattern bg-cover'>
        <Head>{title}</Head>
        <header>
            <nav className='bg-gray-800 w-screen'>
                <div className="flex justify-around items-center pl-8 h-14">
                    <div className="flex space-x-10">
                        <Link href="/">
                            <a className='text-gray-300 hover:bg-gray-700 delay-100 hover:text-red-500 px-3 py-2 rounded'>HOME</a>
                        </Link>
                        <Link href="/learning">
                            <a className='text-gray-300 hover:bg-gray-700 delay-100 hover:text-red-500 px-3 py-2 rounded'>learning</a>
                        </Link>
                        <Link href="/contacts">
                            <a className='text-gray-300 hover:bg-gray-700 delay-100 hover:text-red-500 px-3 py-2 rounded'>contact</a>
                        </Link>
                    </div>
                </div>
            </nav>
            
        </header>
        <main className=" flex-1 flex-col justify-center w-screen gap-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            <div className="border-solid border-4">
                <p className='text-3xl font-bold font-serif'>おすすめリンク</p>
            </div>
            <div className="col-span-2 row-span-3">
        
                {children}

            </div>
            <div className="row-span-2 border-solid border-4 font-serif">
                <p className='text-3xl font-bold'>メモ</p>
            </div>
        </main>
        <footer>
        <a
          className="flex items-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          {/* <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" /> */}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
        </footer>
    </div>
  )
}
