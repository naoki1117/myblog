import { useQuery } from "@tanstack/react-query"
import type { Blog} from "../src/types/blog";
import { client } from "../src/libs/client";

// export const getStaticProps = async () => {
//     const blog = await client.get({ endpoint: "blogs" });
//     const tag = await client.get({ endpoint: "tag" });
    
//     return {
//       props: {
//         blogs: blog.contents,
//         tags: tag.contents,
//       },
//     };
//   };


// export const useQueryBlogs = () => {
//     return useQuery<Blog[],Error>({
//         queryKey:["blogs"],
//         queryFn:getStaticProps,
//         staleTime:Infinity,
//         refetchOnWindowFocus:false,
        
//     })
// }