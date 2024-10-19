// app/blog/[slug]/page.js
import { Prose } from '@/app/components/Prose';
import { fetchPostBySlug } from '../../lib/api';
import { renderRichText } from '../../lib/utils';

interface PostParams {
  slug: string;
}

export default async function BlogPost({ params }: { params: PostParams }) {
  const { slug } = params;
  const post = await fetchPostBySlug(slug);

  console.log(post.richtext, 'post.richtext');

  if (!post) {
    return <div className="p-4 text-center">Post not found</div>;
  }

  return (
    <article className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
     <Prose>
        {renderRichText(post.richtext)} 
     </Prose>
    </article>
  );
}
