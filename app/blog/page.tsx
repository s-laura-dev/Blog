// app/blog/page.js
import { fetchPosts } from '../../lib/api';
import {Card} from '../../components/Card';

// const API_URL = process.env.NEXT_PUBLIC_API_URL;


interface Post {
  id: string;
  title: string;
  slug: string;
  description: string;  
  cover: {
    formats: {
      thumnail: {
        url: string;
      };
      small: {
        url: string;
      };
    };
  };
}

export default async function BlogIndex() {
  // const posts: Post[] = await fetchPosts();

// console.log('posts:', posts[0]);

  return (
    <div className="container mx-auto mt-12 mb-8 px-4">
      <h2 className="text-3xl font-bold mb-6">Work in progress :)</h2>
      
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map(({id, title, slug, description, cover}) => (
          <Card key={id} title={title} description={description} link={`/blog/${slug}`} imageSrc ={`${API_URL}${cover?.formats?.small?.url}`}          />
        ))} 
      </div> */}
    </div> 
  );
}
