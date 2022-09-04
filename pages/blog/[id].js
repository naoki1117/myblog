import { Layout } from "../../components/Layout";
import { client } from "../../src/libs/client";
import { format } from "date-fns"
import { Paper,Text,Image } from "@mantine/core";

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
  return (
    <Layout title="blog">
        <main className="h-screen">
            <h1 className="text-center m-10">{blog.title}</h1>
            <Paper shadow="xl">
                <Text>
                    <p className=" text-end">{format (new Date(blog.publishedAt),"yyyy-MM-dd HH:mm:ss")}</p>
                    <div className="text-center text-4xl"
                        dangerouslySetInnerHTML={{ __html: `${blog.body}` }}
                        
                    ></div>
                    {/* <Image className="m-20" 
                    radius="md"
                    alt="not_image"
                    src={blog.image.url}
                    /> */}
                </Text>
            </Paper>
        </main>
    </Layout>
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