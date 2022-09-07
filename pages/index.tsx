import type { NextPage } from 'next'
import { Layout } from '../components/Layout'
import Link from "next/link";
import type { InferGetStaticPropsType} from "next";
import { client } from "../src/libs/client";    
import type { Blog, Tag } from "../src/types/blog";   
import { Loader, Paper,Text } from '@mantine/core';
import { format } from 'date-fns';
import { ArrowBigRightLine } from 'tabler-icons-react';



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
        <h1 className='text-3xl font-bold text-center font-serif m-5 cs:animate-tracking-in-contract-bck'>Tech Blog</h1>
          
          {blogs.map((blog)=>(
            <Paper key={blog.id} className='m-5 hover:scale-110' shadow="xl" p="xl"  withBorder>
              <Text  className="m-7 text-3xl animate-fade-in-left">
                <ul>
                  <li className='hover:text-red-400 p-14' >
                    <Link  href={`/blog/${blog.id}`} >
                      <a href="" className=''>{blog.title}</a>
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
