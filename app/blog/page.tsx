// app/blog/page.js
import { fetchPosts } from '../../lib/api';
import CustomLink from '../../components/Link';
import {Card} from '../../components/Card';

interface Post {
  id: string;
  title: string;
  slug: string;
}

export default async function BlogIndex() {
  const posts: Post[] = await fetchPosts();

  return (
    <div className="container mx-auto my-8 px-4">
      <h2 className="text-3xl font-bold mb-6">All Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Card key={post.id} title={post.title}>
            <CustomLink href={`/blog/${post.slug}`} className="text-blue-600 hover:underline">
              Read more
            </CustomLink>
          </Card>
        ))}
      </div>
    </div>
  );
}
