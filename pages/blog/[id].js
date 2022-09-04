import { Layout } from "../../components/Layout";
import { client } from "../../src/libs/client";
import { format } from "date-fns"
import { Paper,Text,Image } from "@mantine/core";
import { Link } from "next/link";
import { SmartHome } from "tabler-icons-react";
import { useRouter } from 'next/router'

//SSG
export const getStaticProps = async (context) => {
 
  const id = context.params.id;
  const data = await client.get({ endpoint: "blogs", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blogs" });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return {
    paths,
    fallback: false,
  };
};

export default function BlogId({ blog }) {
  const router = useRouter()
  return (
   
        <main className="h-screen ">
            <h1 className="m-10 md:flex md:justify-center">{blog.title}</h1>
            <Paper shadow="xl">
                <Text>
                    <p className="mb-5 text-end">更新日:{format (new Date(blog.publishedAt),"yyyy-MM-dd HH:mm:ss")}</p>
                    <div className=" m-b "
                        dangerouslySetInnerHTML={{ __html: `${blog.body}`}}
                        
                    ></div>
                    <SmartHome
                    size={48}
                    strokeWidth={2}
                    color={'#bfa840'}
                    className="mt-4 m-auto cursor-pointer"
                    onClick={() =>{
                      router.push("/")}
                    }
                    />
                    {/* <Image className="m-20" 
                    radius="md"
                    alt="not_image"
                    src={blog.image.url}
                    /> */}
                </Text>
            </Paper>
        </main>
   
  );
}


// import {
//     GetStaticPaths,
//     GetStaticProps,
//     InferGetStaticPropsType,
//     NextPage,
//   } from "next";
// import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
//   import { client } from "../../src/libs/client";
//   import type { Blog } from "../../src/types/blog";
  
//   // APIリクエストを行うパスを指定
//   export const getStaticPaths: GetStaticPaths<Params> = async () => {
//     const data = await client.get({ endpoint: "blogs" });
  
//     const paths = data.contents.map((content:any) => `/blog/${content.id}`);
//     return { paths, fallback: false };
//   };
  
//   // microCMSへAPIリクエスト
//   export const getStaticProps: GetStaticProps<Props, Params> = async (
//     context
//   ) => {
//     const id = context.params?.id;
//     const blog = await client.get({ endpoint: "blogs", contentId: id });
  
//     return {
//       props: {
//         blog:data,
//       },
//     };
//   };
  
//   // Props（blog）の型
//   type Props = {
//     blog: Blog;
//   };
  
//   const BlogId: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
//     blog,
//   }: Props) => {
//     return (
//       <main>
//         <h1>{blog.title}</h1>
//         <p>{blog.publishedAt}</p>
//               {blog.tags.map((tag) => (
//           <li key={tag.id}>
//             #{tag.tag}
//           </li>
//         ))}
//         <div
//           dangerouslySetInnerHTML={{
//             __html: `${blog.body}`,
//           }}
//         />
//       </main>
//     );
//   }