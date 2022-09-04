import {ReactNode,FC} from 'react'
import Link from "next/link"
import Head from "next/head"
import Image from "next/image"
import { Button,Grid, Menu } from '@mantine/core'
import { Activity } from 'tabler-icons-react';
import { Menu2,Home2,ArrowBigUpLine,MailFast } from 'tabler-icons-react';
import { NextLink } from '@mantine/next'

interface Props {
    title:string,
    children:ReactNode
}

export const Layout:FC<Props> = ({title="nextjs",children}) => {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen text-white  text-sm font-mono '>
        <Head>{title}</Head>
        <header >
            
            <div className='absolute top-4 left-10'>create by Naoki Kimura</div>
            
            <nav className='bg-gray-800 w-screen h-20 mt-5 flex justify-around items-center  '>
                <div className="">
                    <div className="space-x-20 md:hidden ">
                        <Link href="/">
                            <a className='text-gray-300 hover:bg-gray-700 delay-100 hover:text-blue-500 transition-all duration-200 rounded-md text-3xl'>HOME</a>
                        </Link>
                        <Link href="/learning">
                            <a className='text-gray-300 hover:bg-gray-700 delay-100 hover:text-blue-500 transition-all duration-200 rounded-md text-3xl'>learning</a>
                        </Link>
                        <Link href="/contacts">
                            <a className='text-gray-300 hover:bg-gray-700 delay-100 hover:text-blue-500 transition-all duration-200 rounded-md text-3xl'>history</a>
                        </Link>
                    </div>
                </div>
                <div className='cs:hidden absolute right-2 top-10'>
                        <Menu>
                            <Menu.Target>
                                <Button>
                                    <Menu2
                                        size={32}
                                        strokeWidth={2}
                                        color={'#40b4bf'}
                                    />
                                </Button>
                            </Menu.Target>
                            <Menu.Dropdown>
                                <Menu.Label>menulist</Menu.Label>
                                <Menu.Item
                                icon={
                                    <Home2
                                        size={16}
                                        strokeWidth={2}
                                        color={'#b5bf40'}
                                    /> 
                                    }
                                        component={NextLink}
                                        href="/"
                                    >
                                        Home
                                    </Menu.Item>
                                <Menu.Item
                                icon={
                                    <ArrowBigUpLine
                                        size={16}
                                        strokeWidth={2}
                                        color={'#b5bf40'}
                                    /> 
                                    }
                                        component={NextLink}
                                        href="/learning"
                                    >
                                        leearning
                                    </Menu.Item>
                                <Menu.Item
                                icon={
                                    <MailFast
                                        size={16}
                                        strokeWidth={2}
                                        color={'#b5bf40'}
                                    /> 
                                    }
                                        component={NextLink}
                                        href="/contacts"
                                    >
                                        contacts
                                </Menu.Item>
                            </Menu.Dropdown>
                        </Menu>
                    </div>
            </nav>
            
        </header>
        <Grid columns={12} className="flex flex-1 justify-center w-screen gap-0">
            <Grid.Col md={8} className="">
        
                {children}

            </Grid.Col>
            <Grid.Col md={4} className="cs:border-l-2 md:border-t-2">
                <p className='text-3xl font-bold font-serif m-3'>おすすめリンク</p>
                <div className='flex flex-col'>
                    <a className='m-2 underline underline-offset-1 text-lg cursor-pointer hover:text-red-400' href='https://qiita.com/'>Qiita_エンジニアの為の情報コミュニティ</a>
                    <a className='m-2 underline underline-offset-1 text-lg cursor-pointer hover:text-red-400' href='https://zenn.dev/'>Zenn_エンジニアの為の情報コミュニティ</a>
                </div>
            </Grid.Col>
            
        </Grid>
        <footer>

        <a
          className="flex items-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          {/* <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" /> */}
          <Image  src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
        </footer>
    </div>
  )
}
