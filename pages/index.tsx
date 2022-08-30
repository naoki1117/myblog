import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Layout } from '../components/Layout'
import Link from "next/link";
import type { InferGetStaticPropsType} from "next";
import { client } from "../src/libs/client";    
import type { Blog, Tag } from "../src/types/blog";   
import { Paper,Text } from '@mantine/core';
import { format } from 'date-fns';

export const getStaticProps = async () => {
  const blog = await client.get({ endpoint: "blogs" });
  const tag = await client.get({ endpoint: "tag" });
  
  return {
    props: {
      blogs: blog.contents,
      tags: tag.contents,
    },
  };
};
type Props = {
  blogs: Blog[];
  tags: Tag[];
};


 const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  blogs,
  tags,
 }:Props) => {
  {console.log(blogs)}
  return (
    <Layout title='home' >
      <div>
        
        <h1 className='text-3xl font-bold text-center font-serif m-5'>ブログ</h1>
        
          {blogs.map((blog)=>(
            <Paper className='m-5' shadow="xl" p="xl"  withBorder>
              <Text  className="m-7 text-3xl bg-">
                <ul>
                  <li key={blog.id}>
                    <Link  href={`/blog/${blog.id}`}>
                      <a href="">{blog.title}</a>
                    </Link>
                  </li>
                </ul> 
              </Text>
              <Text className='text-right text-lg'>
                {format (new Date(blog.createdAt),"yyyy-MM-dd HH:mm:ss")}
              </Text>
            </Paper>
          ))}
        
      </div>
    </Layout>
  )
}


export default Home
