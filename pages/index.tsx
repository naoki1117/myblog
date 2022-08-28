import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Layout } from '../components/Layout'
import Link from "next/link";
import type { InferGetStaticPropsType} from "next";
import { client } from "../src/libs/client";    // srcから見た絶対パスで指定
import type { Blog, Tag } from "../src/types/blog";    // srcから見た絶対パスで指定

export const getStaticProps = async () => {
  const blog = await client.get({ endpoint: "blogs" });
  // const tag = await client.get({ endpoint: "tag" });
  
  return {
    props: {
      blogs: blog.contents,
      // tags: tag.contents,
    },
  };
};
type Props = {
  blogs: Blog[];
  // tags: Tag[];
};


 const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  blogs,
  // tags,
 }:Props) => {
  {console.log(blogs)}
  return (
    <Layout title='home'>
      <div>
        
        <h1 className='text-3xl font-bold text-center font-serif'>ブログ</h1>
        <ul>
          {blogs.map((blog)=>(
          <li key={blog.id}>
            <h2 className='text-3xl'>{blog.title}</h2>
            <h3>{blog.createdAt}</h3>
            <p className='border-b-2 text-2xl'>{blog.content}</p>
          </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export default Home
